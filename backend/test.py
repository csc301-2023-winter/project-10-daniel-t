import pytest
from app import create_app


@pytest.fixture()
def app():
    app = create_app()
    app.config.update({
        "TESTING": True,
    })

    yield app


@pytest.fixture()
def client(app):
    return app.test_client()


@pytest.fixture()
def runner(app):
    return app.test_cli_runner()


def test_Retrieve_partner(client):
    response = client.get("http://127.0.0.1:5000/abstracts/Retrieve/partner/")
    assert response.status_code == 200, "Test the status code of Retrieve/partner"
    assert b"AMD" in response.data, "Test the response of Retrieve/partner contain AMD"
    return


def test_Retrive_years(client):
    response = client.get("http://127.0.0.1:5000/abstracts/Retrieve/years")
    assert response.status_code == 200, "Test the status code of Retrieve/years"
    assert b"2020\\u201321" in response.data, "Test the response of Retrieve/years contain 2020\\u201321"
    return


def test_Retrive_acasup(client):
    response = client.get("http://127.0.0.1:5000/abstracts/Retrieve/acasup")
    assert response.status_code == 200, "Test the status code of Retrieve/acasup"
    assert b"Alan Moses" in response.data, "Test the response of Retrieve/acasup contain Alan Moses"
    return


def test_Search_keyword(client):
    re_url = "http://127.0.0.1:5000/abstracts/Search/keyword/"
    key_word = ''
    response = client.get(re_url + key_word)
    assert response.status_code == 404, "Test the status code of Search/keyword/ with empty key word ''"

    key_word = ' '
    response = client.get(re_url + key_word)
    assert response.status_code == 200, "Test the status code of Search/keyword/ with empty space key word ' '"
    assert b"Alan Moses" in response.data, "Test the response of Search/keyword/ with empty space key word ' '"

    key_word = 'ehfksaufshefskjdfhsefksdfhsefksuhdfskeihfsdkf'
    response = client.get(re_url + key_word)
    assert response.status_code == 200, "Test the status code of Search/keyword/ with long key word"
    assert b"Alan Moses" not in response.data, "Test the response of Search/keyword/ with long key word does not " \
                                               "contain unrelated response "
    return


def test_Search_picture(client):
    pre_url = "http://127.0.0.1:5000/abstracts/Search/picture/"
    partner = ''
    response = client.get(pre_url + partner)
    assert response.status_code == 404, "Test the status code of Search/picture/ with empty partner is 404"

    partner = "AMD"
    response = client.get(pre_url + partner)
    assert response.status_code == 200, "Test the status code of Search/picture/ with partner AMD"
    assert b"PNG" in response.data, "Test the response of Search/picture/ with partner AMD"
    return


def test_Search_results(client):
    inputs = ''
    year = ''
    partner = ''
    supervisor = ''
    url = "https://127.0.0.1:5000/abstracts/Search/results/?text" + inputs + "&year" + year \
          + "&partner" + partner + "&supervisor" + supervisor
    response = client.get(url)
    assert response.status_code == 200, "Test the status code of Search_results without any parameters"
    assert b'[]\n' == response.data, "Test the response of Search_results without any parameters"

    inputs = ' '
    year = '=2021–22'
    partner = ''
    supervisor = ''
    url = "https://127.0.0.1:5000/abstracts/Search/results/?text" + inputs + "&year" + year \
          + "&partner" + partner + "&supervisor" + supervisor
    response = client.get(url)
    assert response.status_code == 200, "Test the status code of Search_results with some parameters"
    assert b'[]\n' != response.data, "Test the response of Search_results with some parameters"
    return


def test_Retrieve_id(client):
    pre_url = "https://127.0.0.1:5000/abstracts/Retrieve/id/"
    pid = ''
    response = client.get(pre_url + pid)
    assert response.status_code == 404, "Test the status code of Retrieve_id without project id"

    pid = "rec276EPIbEcGESyp"
    response = client.get(pre_url + pid)
    assert response.status_code == 200, "Test the status code of Retrieve_id with valid project id"
    assert b'Kevin Ferreira' in response.data, "Test the response of Retrieve_id with valid project id"
    return
