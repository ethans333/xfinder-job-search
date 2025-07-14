from flask import Blueprint, jsonify, request
from models import db, JobPosting

job_posting_bp = Blueprint('job_posting_bp', __name__)


@job_posting_bp.route("/job_posting", methods=["GET"])
def get_job_postings():
    job_postings = JobPosting.query.all()
    return jsonify([
        {
            "id": jp.id,
            "title": jp.title,
            "company": jp.company,
            "city": jp.city,
            "state": jp.state,
            "description": jp.description
        } for jp in job_postings])


@job_posting_bp.route("/job_posting", methods=["POST"])
def add_job_posting():
    data = request.get_json()
    new_job_posting = JobPosting(
        title=data.get('title'),
        company=data.get('company'),
        city=data.get('city'),
        state=data.get('state'),
        description=data.get('description')
    )
    db.session.add(new_job_posting)
    db.session.commit()
    return jsonify({"message": "Job posting added successfully", "id": new_job_posting.id}), 201
