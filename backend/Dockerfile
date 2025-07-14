FROM python:3.11-slim
WORKDIR /app

# Install system dependencies required for psycopg2 and building packages
RUN apt-get update && apt-get install -y gcc libpq-dev && rm -rf /var/lib/apt/lists/*

# Copy requirements first to leverage Docker layer caching
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your app code
COPY . .

# Expose the port your Flask app runs on
EXPOSE 5000

# Environment variables for Flask
ENV FLASK_APP=api/app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Run migrations first, then start Flask server
CMD alembic upgrade head && flask run --host=0.0.0.0 --port=5000
