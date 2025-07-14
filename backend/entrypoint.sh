#!/bin/sh

export PYTHONPATH=/api
export FLASK_APP=api/app.py

alembic upgrade head

if [ "$RUN_SEED" = "true" ]; then
  echo "Seeding database..."
  python -c 'from api.app import run_seed_if_needed; run_seed_if_needed()'
fi

exec flask run --host=0.0.0.0 --port=5000
