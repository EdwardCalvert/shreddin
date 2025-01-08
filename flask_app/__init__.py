from flask import Flask, logging as logger, jsonify
from flask_cors import CORS
from flask_app.config import get_config
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import json
import os
import logging
from flask import jsonify

# Fix issue where DB connection expires after the backend is unused for a period.
from flask_sqlalchemy import SQLAlchemy as _BaseSQLAlchemy


class SQLAlchemy(_BaseSQLAlchemy):
    def apply_pool_defaults(self, app, options):
        options = super().apply_pool_defaults(app, options)
        options["pool_pre_ping"] = True
        return options


db = SQLAlchemy()


def create_app():
    load_dotenv()

    app = Flask(__name__)
    app.logger.setLevel(logging.INFO)

    logger.default_handler.setFormatter(logging.Formatter('[%(asctime)s] %(levelname)s - %(message)s'))
    app.logger.info("Initialized app")
    CORS(app)

    config_type = os.getenv('FLASK_ENV', 'DEV')
    app.config.from_object(get_config(config_type))
    app.logger.info(f"Read {config_type.lower()} config")

    db.init_app(app)
    app.logger.info("Initialized DB")

    from flask_app.routes import init_routes

    init_routes(app)
    app.logger.info("Initialized routes")

    JWTManager(app)

    with app.app_context():
        db.create_all()

    @app.route("/ping")
    def index():
        return jsonify({"status": "running"})

    return app
