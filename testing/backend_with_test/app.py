# This file is part of the project backend code for CSC301 MScAC.
# Author: Peng Du


from flask import Flask, jsonify, request
from search_logic.search_results import *
from retrieve_logic.Retrieve_methods import *


def create_app():
    app = Flask(__name__)

    @app.route('/Retrieve/id/<string:rid>', methods=['GET'])
    def retrieve_by_id(rid):
        return jsonify(retrieve_id(rid))

    @app.route('/Retrieve/partner/', methods=['GET'])
    def retrieve_all_partner():
        return jsonify(retrieve_partner())

    @app.route('/Retrieve/years', methods=['GET'])
    def retrieve_all_years():
        return jsonify(retrieve_years())

    @app.route('/Retrieve/acasup', methods=['GET'])
    def retrieve_all_acasup():
        return jsonify(retrieve_acasup())

    # APIs for searching results
    @app.route('/Search/keyword/<string:word>', methods=['GET'])
    def keywords(word):
        return jsonify(related_keywords(word))

    @app.route('/Search/results/<string:text>', methods=['GET'])
    def search_results(text):
        return jsonify(search_result(text))

    @app.route('/Search/year/<string:year>', methods=['GET'])
    def year_result(year):
        return jsonify(search_by_year(year))

    @app.route('/Search/partner/<string:partner>', methods=['GET'])
    def partner_result(partner):
        return jsonify(search_by_partner(partner))

    @app.route('/Search/acasup/<string:supervisor>', methods=['GET'])
    def acasup_result(supervisor):
        return jsonify(search_by_acasup(supervisor))
    return app


# app = create_app()

# app = Flask(__name__)
#
#
# # APIs for retrieving results
# @app.route('/Retrieve/id/<string:rid>', methods=['GET'])
# def retrieve_by_id(rid):
#     return jsonify(retrieve_id(rid))
#
#
# @app.route('/Retrieve/partner/', methods=['GET'])
# def retrieve_all_partner():
#     return jsonify(retrieve_partner())
#
#
# @app.route('/Retrieve/years', methods=['GET'])
# def retrieve_all_years():
#     return jsonify(retrieve_years())
#
#
# @app.route('/Retrieve/acasup', methods=['GET'])
# def retrieve_all_acasup():
#     return jsonify(retrieve_acasup())
#
#
# # APIs for searching results
# @app.route('/Search/keyword/<string:word>', methods=['GET'])
# def keywords(word):
#     return jsonify(related_keywords(word))
#
#
# @app.route('/Search/results/<string:text>', methods=['GET'])
# def search_results(text):
#     return jsonify(search_result(text))
#
#
# @app.route('/Search/year/<string:year>', methods=['GET'])
# def year_result(year):
#     return jsonify(search_by_year(year))
#
#
# @app.route('/Search/partner/<string:partner>', methods=['GET'])
# def partner_result(partner):
#     return jsonify(search_by_partner(partner))
#
#
# @app.route('/Search/acasup/<string:supervisor>', methods=['GET'])
# def acasup_result(supervisor):
#     return jsonify(search_by_acasup(supervisor))
