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


def test_Retrive_years(client):
    response = client.get("http://127.0.0.1:5000/Retrieve/years")
    assert b"2020\u201321" in response.data
    assert response.status_code == 200

