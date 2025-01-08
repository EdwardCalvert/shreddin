from flask import Flask
from flask_app.auth.views import auth_api


def init_routes(app: Flask):

    app.register_blueprint(auth_api, url_prefix="/api/v1/auth")
