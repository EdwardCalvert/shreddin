
Flask-app uses asymmetric certificate to sign JWT tokens. 
```bash
docker run --mount type=bind,src=.,dst=/project,ro```

## Backend
Again, this is batteries-included and will connect to the development Postgresql database. We anticipate offering different configurations in the near future.

```
($env:VITE_API_SOURCE = "https://localhost:7066") -and (npm run dev)
```

### Running the first time
1. cd into `src\flask_app`
2. Create a virtual environment using
```powershell
 python3 -m venv .venv
 ```
3. Activate the virtual environment, using  
Windows: 
```powershell
.\.venv\Scripts\Activate.ps1
``` 
Linux: 
```bash
source .venv/bin/activate
```
4. Install the requirements using 
```powershell
pip install -r requirements.txt
```
5. Setup the environment (secrets etc) < - add instructions?
6. Run flask using the command: 
```powershell
flask --app app --debug run
```

### Run after initialised
1. Navigate into `src\flask_app`
```powershell
cd src\flask_app
```
2. Activate your virtual environment using

Powershell: 
```powershell
.\.venv\Scripts\Activate.ps1
``` 
Linux: 
```bash
source .venv/bin/activate
```
2. Run flask using the command:
```powershell
flask --app app --debug run
```

More detailed information regarding the backend can be found in the readme.md file in `src\flask_app`

### Running tests
Run pytest in `src/flask_app/`
```
pytest
```
