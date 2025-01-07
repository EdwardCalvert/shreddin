# Auth && JWT tokens
Authorisation is managed through JWT tokens, which are asymetrically signed using the keys (rs256.pem, rs256.pub) that are in the root of the folder, which is very insecure as if people gained access to the source code then they could forge tokens, however this simplifies deployment, so will be kept for early releases.

Most of the intersting parts of authentication happen in the `auth/service.py` file. The `views.py` file exposes these to endpoints.

The `helpers.py` exposes two wrappers `auth_required` and `admin_required` which can be used to limit access. 