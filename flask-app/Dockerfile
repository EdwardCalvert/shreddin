FROM python:3.11-slim

RUN apt-get update && apt-get install -y \
    libpq-dev gcc python3-dev musl-dev \
    && apt-get clean

WORKDIR /src/flask_app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .
CMD  python3 -m flask run --host=0.0.0.0 --port=$FLASK_PORT
