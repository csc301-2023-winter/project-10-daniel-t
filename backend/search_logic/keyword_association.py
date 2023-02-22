# This file is part of the project backend code for CSC301 MScAC.
# Author: Peng Du

from search_logic.Import_Abstract import *
from spellchecker import SpellChecker

checker = SpellChecker()


def auto_correct(text: str) -> str:
    """Return the autocorrected text."""
    words = text.split()
    corrected_words = []
    for word in words:
        corrected_word = checker.correction(word)
        corrected_words.append(corrected_word)
    corrected_text = ' '.join(corrected_words)
    return corrected_text


def edit_distance(word1: str, word2: str) -> int:
    """Return the edit distance between two words, using the edit distance algorithm."""
    # Initialize a matrix with zeros
    matrix = [[0] * (len(word2) + 1) for _ in range(len(word1) + 1)]
    # Fill in the first row and column with incremental values
    for i in range(len(word1) + 1):
        matrix[i][0] = i
    for j in range(len(word2) + 1):
        matrix[0][j] = j
    # Fill in the rest of the matrix using dynamic programming
    for i in range(1, len(word1) + 1):
        for j in range(1, len(word2) + 1):
            if word1[i - 1] == word2[j - 1]:
                cost = 0
            else:
                cost = 1
            matrix[i][j] = min(matrix[i - 1][j] + 1,  # Deletion
                               matrix[i][j - 1] + 1,  # Insertion
                               matrix[i - 1][j - 1] + cost)  # Substitution
    # The edit distance is the value in the bottom right of the matrix
    return matrix[-1][-1]


def calculate_heuristic(word: str, desired_word: str) -> float:
    """Return the heuristic of <word> to <desired_word>, which is determined by
    how similar the two words are.

    Rules:
        - The higher the heuristic is, the more similar the two words are.
        - If <desired_word> starts/ends with <word>, then the heuristic is the largest.
        - If <desired_word> is shorter than <word>, then the heuristic is the smallest.
        - The higher the edit distance is, the lower the heuristic would be.
        - To ensure fairness, the heuristic also consider the length of the word.
        - The formula is: heuristic = 1 - (distance / <length of the longer word>)
    """
    word, desired_word = word.lower(), desired_word.lower()  # ignore the case.
    if desired_word.startswith(word) or desired_word.endswith(word):
        return 100
    if len(desired_word) < len(word):
        return -100
    distance = edit_distance(word, desired_word)
    longer_length = max(len(word), len(desired_word))
    return 1 - (distance / longer_length)


def related_keywords(word: str) -> list[str]:
    """Return a list of 10 keywords/titles that exists in the database that is related to <word>,
    sorted in the order of heuristic. To appear in the result, the minimum heuristic is 0.7."""
    result_with_heuristic = []
    all_text = titles + students + partners + partner_supervisors + \
               academic_supervisors + first_names + last_names + preferred_names
    for w in all_text:
        if ',' in w:
            # If there are multiple contexts in the same text, split them up.
            split = w.split(',')
            for s in split:
                h = calculate_heuristic(word, s.strip())
                if h > 0.7:
                    result_with_heuristic.append((s.strip(), h))
        else:
            h = calculate_heuristic(word, w)
            if h > 0.7:
                result_with_heuristic.append((w, h))
    result_with_heuristic = list(set(result_with_heuristic))  # Remove duplicates
    if len(result_with_heuristic) == 0:
        # If the result is empty, try to autocorrect the input.
        corrected = auto_correct(word)
        if corrected != word:
            return related_keywords(corrected)
    result_with_heuristic.sort(key=lambda x: x[1], reverse=True)
    return [p[0] for p in result_with_heuristic][:10]

