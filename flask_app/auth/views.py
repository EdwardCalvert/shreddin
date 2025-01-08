import os
from twilio.rest import Client
from flask import Blueprint, jsonify, request
from flask import current_app



auth_api = Blueprint("auth_api", __name__)

@auth_api.route("/register", methods=["POST"])
def sms_send():
    print("food")
