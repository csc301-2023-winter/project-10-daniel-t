pip3 install virtualenv
# shellcheck disable=SC2046
virtualenv -p $(which python3.10) venv
pip install Flask
pip install spellchecker
pip install pytest
