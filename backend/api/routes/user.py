from flask import Blueprint, jsonify
from api.models import db, User

user_bp = Blueprint('user_bp', __name__)


@user_bp.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([{"id": u.id, "name": u.name} for u in users])


@user_bp.route("/users/<name>", methods=["POST"])
def add_user(name):
    new_user = User(name=name)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": f"Added {name}!"})
