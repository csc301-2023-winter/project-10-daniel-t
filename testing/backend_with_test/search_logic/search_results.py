# This file is part of the project backend code for CSC301 MScAC.
# Author: Peng Du

from search_logic.keyword_association import *
from search_logic.Import_Abstract import *

def search_result(text: str) -> list:
    """Return a list of IDs of all the records corresponding to the text."""
    result = []
    for a in range(len(ids)):
        title, student, partner, academic_supervisor, partner_supervisor = titles[a], students[a], \
                                                                           partners[a], \
                                                                           academic_supervisors[a], \
                                                                           partner_supervisors[a]
        related = related_keywords(text)
        for word in related:
            if word in title or word in student or word in partner or \
                    word in academic_supervisor or word in partner_supervisor:
                result.append(ids[a])
                break
    return result


def search_by_year(year: str) -> list:
    """Return a list of IDs of all the records with cohort of the given year.
    The format needs to be '20xx-xx', e.g. 2021-22"""
    return year_mapping.get(year, [])


def search_by_partner(partner: str) -> list:
    """Return a list of IDs of all the records of the given partner."""
    return partner_mapping.get(partner, [])


def search_by_acasup(supervisor: str) -> list:
    """Return a list of IDs of all the records that are supervised by the given
    supervisor."""
    return acasup_mapping.get(supervisor, [])
