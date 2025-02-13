# Shreddin'

An app to improve the user experience of signing up to trips at the University of Aberdeen's Mountain Biking Club. The focus is on simplifying signing up to trips for users, allowing committee members to understand if there is sufficient car space, and will ultimately allow for a simplified payment system based on the concept of zones, based off the mvp at [https://edwardcalvert.github.io/aumbc-zones-mvp/](https://edwardcalvert.github.io/aumbc-zones-mvp/)

## Structure

A .NET Web API with entity framework. HTTP only cookie, so it can't be accessed by JavaScript. 

A React Frontend, with vite and tailwind. 
```powershell
($env:VITE_API_SOURCE = "https://shreddin-backend.edcalvert.net") -and (npm run dev)
```

# Deploy

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "Cors": {
    "AllowedOrigins": [ "<<Your origins>>" ]
  },

  "DataProtectionFolder":"<<Your folder>>",
  "ConnectionStrings": {
    "Default": "<<Your connection string>>"
  },
  "R2": {
    "TokenValue": "<<Your token value>>",
    "AccessKeyID": "<<Your access key ID>>",
    "SecretAccessKey": "<<Your secret access key>>",
    "Endpoint": "<<Your endpoint>>",
    "BucketName": "<<Your bucket name>>"
  },
  "UserRegistrationSecurityCode": "<<your registration code>>"
}

```