from flask import Blueprint, jsonify, request
from api.models import db, JobPosting
from sqlalchemy import or_

job_posting_bp = Blueprint('job_posting_bp', __name__)


@job_posting_bp.route("/job_posting", methods=["GET"])
def get_job_postings():
    page = request.args.get("page", default=1, type=int)
    per_page = request.args.get("per_page", default=10, type=int)
    keyword = request.args.get("keyword", default="", type=str).strip()

    query = JobPosting.query

    if keyword:
        like_pattern = f"%{keyword}%"
        query = query.filter(
            or_(
                JobPosting.title.ilike(like_pattern),
                JobPosting.company.ilike(like_pattern),
                JobPosting.city.ilike(like_pattern),
                JobPosting.state.ilike(like_pattern),
                JobPosting.description.ilike(like_pattern),
            )
        )

    pagination = query.order_by(JobPosting.timestamp.desc()).paginate(
        page=page, per_page=per_page, error_out=False
    )

    job_postings = pagination.items

    return jsonify({
        "page": page,
        "per_page": per_page,
        "total": pagination.total,
        "pages": pagination.pages,
        "data": [
            {
                "id": jp.id,
                "title": jp.title,
                "company": jp.company,
                "city": jp.city,
                "state": jp.state,
                "description": jp.description,
            } for jp in job_postings
        ]
    })


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
