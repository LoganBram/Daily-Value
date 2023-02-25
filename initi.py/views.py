from flask import Blueprint
from flask import Blueprint

# name of file =
views = Blueprint(__name__, "views")


@views.route("/home")
def home():
    return "f"
