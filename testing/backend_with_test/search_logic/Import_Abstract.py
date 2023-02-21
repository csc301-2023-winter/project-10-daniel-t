# This file is part of the project backend code for CSC301 MScAC.
# Author: Peng Du

import requests
import json

# ---------Send GET request to populate the data from airtable API.---------
url = "https://api.airtable.com/v0/appp7vLC4kTum3DEP/Public abstracts"
payload = {}
headers = {
    'Authorization': 'Bearer pat1TmtYM3mE59hdP.ef3242b8e476f1817d9bf16b687faf316b7b78077a6bf7c5332789fcb2514e25',
    'Cookie': 'brw=brwWlPj1vR7gCXLV0; AWSALB=rZ0WV0cEdOVXvrqxCvEflR7WFxFYcr'
              '+S89t9OJAlBOLSayJttvNuiQhUVDbKrkcGSHe2COixeNW/sgKeDOIt4bEzj0MTQ7X0IuT/djIIQ1OfJGHsGF/txRHEZERj; '
              'AWSALBCORS=rZ0WV0cEdOVXvrqxCvEflR7WFxFYcr+S89t9OJAlBOLSayJttvNuiQhUVDbKrkcGSHe2COixeNW'
              '/sgKeDOIt4bEzj0MTQ7X0IuT/djIIQ1OfJGHsGF/txRHEZERj '
}
response = requests.request("GET", url, headers=headers, data=payload)
parsed_dict = response.json()
# ---------Store each piece of data in  parallel lists.---------
ids = [record['fields']['Record ID'].strip().strip("\u202a") for record in parsed_dict['records']]
cohorts = [record['fields']['Cohort'].strip().strip("\u202a") for record in parsed_dict['records']]
titles = [record['fields']['Internship title (ARIA)'].strip().strip("\u202a") for record in parsed_dict['records']]
students = [record['fields']['Student'].strip().strip("\u202a") for record in parsed_dict['records']]
partners = [record['fields']['Partner'].strip().strip("\u202a") for record in parsed_dict['records']]
partner_logos = [record['fields']['Partner logo'] if 'Partner logo' in record['fields']
                 else None
                 for record in parsed_dict['records']]
partner_supervisors = [record['fields']['Partner supervisor'].strip().strip("\u202a")
                       for record in parsed_dict['records']]
academic_supervisors = [record['fields']['Academic supervisor'].strip().strip("\u202a")
                        for record in parsed_dict['records']]
public_abstracts = [record['fields']['Public abstract (ARIA)'].strip().strip("\u202a")
                    for record in parsed_dict['records']]
first_names = [record['fields']['First name'].strip().strip("\u202a") for record in parsed_dict['records']]
last_names = [record['fields']['Last name'].strip().strip("\u202a") for record in parsed_dict['records']]
preferred_names = [record['fields']['First/preferred name (from Student)'].strip().strip("\u202a")
                   for record in parsed_dict['records']]
# create a list of all the individual academic supervisors
supervisors = set()
for pair in academic_supervisors:
    for sup in pair.split(','):
        supervisors.add(sup.strip().strip("\u202a"))
supervisors = list(supervisors)
# Construct a hash mapping from ids to title, cohort, student, partner, partner's logo, partner supervisors,
# academic supervisors and public abstracts.
id_mapping = {}
year_mapping = {}
partner_mapping = {}
acasup_mapping = {}
for i in range(len(ids)):
    # construct the supervisor mapping.
    for sup in academic_supervisors[i].split(','):
        if sup not in acasup_mapping:
            acasup_mapping[sup] = [ids[i]]
        else:
            acasup_mapping[sup].append(ids[i])
    # construct the year mapping.
    if cohorts[i] not in year_mapping:
        year_mapping[cohorts[i]] = [ids[i]]
    else:
        year_mapping[cohorts[i]].append(ids[i])
    # construct the partner mapping.
    if partners[i] not in partner_mapping:
        partner_mapping[partners[i]] = [ids[i]]
    else:
        partner_mapping[partners[i]].append(ids[i])
    # construct the id mapping.
    if partner_logos[i]:
        id_mapping[ids[i]] = (titles[i], cohorts[i], students[i], partners[i], partner_logos[i][0]['url'],
                              partner_supervisors[i], academic_supervisors[i], public_abstracts[i])
    else:
        id_mapping[ids[i]] = (titles[i], cohorts[i], students[i], partners[i], None,
                              partner_supervisors[i], academic_supervisors[i], public_abstracts[i])

