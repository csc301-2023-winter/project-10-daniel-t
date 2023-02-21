# This file is part of the project backend code for CSC301 MScAC.
# Author: Peng Du
from search_logic.Import_Abstract import *


def retrieve_id(record_id: str) -> tuple:
    """Return a tuple that contains all the information about the record of the given id"""
    return id_mapping[record_id]


def retrieve_partner() -> list:
    """Return a list of all the partners that occurred in the database, in alphabetic order."""
    return sorted(list(set(partners)))


def retrieve_years() -> list:
    """Return a list of all the cohort years that occurred in the database, from the most recent to
    the least recent."""
    return sorted(list(set(cohorts)))[::-1]


def retrieve_acasup() -> list:
    """Return a list of all the academic supervisors that occurred in the database,
    in alphabetic order."""
    return sorted(supervisors)
