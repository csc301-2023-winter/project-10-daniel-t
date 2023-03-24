# This file is part of the project backend code for CSC301 MScAC.
# Author: Peng Du

import requests
import json
import os
import urllib.request
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
root_dir = os.path.abspath(os.path.dirname(__file__))
image_dir = os.path.join(root_dir, 'partner_logos')
if not os.path.exists(image_dir):
    os.makedirs(image_dir)
# ---------Store each piece of data in  parallel lists.---------
ids = [record['id'].strip().strip("\u202a") for record in parsed_dict['records']]
# Note: The record_ids are not used.
record_ids = [record['fields']['Record ID'].strip().strip("\u202a") for record in parsed_dict['records']]
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
# merge the records for when the title, partner, year, and supervisors are all the same
to_be_deleted = set()
for i in range(len(ids)):
    if i in to_be_deleted:
        continue
    for j in range(i + 1, len(ids)):
        if j in to_be_deleted:
            continue
        if i != j and students[i] != students[j] and titles[i] == titles[j] and \
            partners[i] == partners[j] and \
                cohorts[i] == cohorts[j] and \
                academic_supervisors[i] == academic_supervisors[j] and \
                partner_supervisors[i] == partner_supervisors[j] and \
                public_abstracts[i] == public_abstracts[j]:
            students[i] += students[j]
            to_be_deleted.add(j)

# delete all the records that have been merged already, so that the parallel list is still aligned
for lsts in [ids, record_ids, partner_logos, titles, cohorts, students, partners, partner_supervisors,
             academic_supervisors, public_abstracts]:
    for ind in to_be_deleted:
        lsts.pop(ind)

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
        # cache the logo
        image_url = partner_logos[i][0]['url']
        image_filename = os.path.basename(image_url) + '.JPEG'
        image_path = os.path.join(image_dir, image_filename)
        if not os.path.exists(image_path):
            urllib.request.urlretrieve(image_url, image_path)
        id_mapping[ids[i]] = (titles[i], cohorts[i], students[i], partners[i], partner_logos[i][0]['url'],
                              partner_supervisors[i], academic_supervisors[i], public_abstracts[i])
    else:
        id_mapping[ids[i]] = (titles[i], cohorts[i], students[i], partners[i], None,
                              partner_supervisors[i], academic_supervisors[i], public_abstracts[i])

