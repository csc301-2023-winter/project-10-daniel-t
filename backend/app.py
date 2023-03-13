# This file is part of the project backend code for CSC301 MScAC.
# Author: Peng Du, Fucheng Zhuang


from flask import Flask, jsonify, request, render_template
from search_logic.search_results import *
from retrieve_logic.Retrieve_methods import *
from apscheduler.schedulers.background import BackgroundScheduler
import atexit
import subprocess

app = Flask(__name__)


def run_script():
    """Run the Import_Abstract.py script periodically to update."""
    subprocess.call(['python', './search_logic/Import_Abstract.py'])


# Use a scheduler to run the Import_Abstract.py script every 5 hours
scheduler = BackgroundScheduler()
scheduler.add_job(func=run_script, trigger='interval', hours=5)
scheduler.start()
atexit.register(lambda: scheduler.shutdown())


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


@app.route('/Search/results/', methods=['GET'])
def search_results():
    text = request.args.get('text')
    year = request.args.get('year')
    partner = request.args.get('partner')
    supervisor = request.args.get('supervisor')
    result = search_by_four_factors(text=text, year=year, partner=partner, supervisor=supervisor)
    final_result = []
    for ids in result:
        final_result.append(retrieve_id(ids))
    return jsonify(final_result)


# APIs for retrieving results
@app.route('/Retrieve/id/<string:rid>', methods=['GET'])
def retrieve_by_id(rid):
    return jsonify(retrieve_id(rid))


if __name__ == "__main__":
    app.run()
