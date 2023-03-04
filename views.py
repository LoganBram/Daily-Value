from flask import Blueprint, render_template

# name of file =
views = Blueprint(__name__, "views")


@views.route("/")
def home():
    return render_template("index.html")


@views.route("/popular")
def popular():
    return render_template('popular.html')
