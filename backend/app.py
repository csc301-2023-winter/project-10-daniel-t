# This file is part of the project backend code for CSC301 MScAC.
# Author: Peng Du, Fucheng Zhuang


from flask import Flask, jsonify, request, render_template
from search_logic.search_results import *
from retrieve_logic.Retrieve_methods import *

app = Flask(__name__)


@app.route('/')
def dashboard():
    return render_template('search.html')


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


# @app.route('/Search/results/<string:text>', methods=['GET'])
# def search_results(text):
#     return jsonify(search_result(text))

@app.route('/Search/results', methods=['POST'])
def search_results():
    results = request.form['results']
    data = search_result(results)
    return render_template('results.html', data=data)

# APIs for retrieving results
# @app.route('/Retrieve/id/<string:rid>', methods=['GET'])
# def retrieve_by_id(rid):
#     return jsonify(retrieve_id(rid))


@app.route('/Retrieve/id', methods=['POST'])
def retrieve_by_id():
    id_number = request.form['id']
    rid = retrieve_id(id_number)
    return render_template('results.html', data=rid)


@app.route('/Search/year', methods=['POST'])
def year_result():
    year = request.form['year']
    year_data = search_by_year(year)
    return render_template('results.html', data=year_data)


# @app.route('/Search/year/<string:year>', methods=['GET'])
# def year_result(year):
#     return jsonify(search_by_year(year))


@app.route('/Search/partner/<string:partner>', methods=['GET'])
def partner_result(partner):
    return jsonify(search_by_partner(partner))


@app.route('/Search/acasup/<string:supervisor>', methods=['GET'])
def acasup_result(supervisor):
    return jsonify(search_by_acasup(supervisor))


if __name__ == "main":
    app.run()
