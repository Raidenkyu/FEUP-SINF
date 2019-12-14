# Documentation

## Endpoints

### Login

Send `post` request to `/api/login`, with json body:

```json
{
    "email": "<user_email>",
    "password": "<user_password>"
}
```

### Register

Send `post` request to `/api/users`, with json body:

```json
{
    "email": "<user_email>",
    "username": "<username",
    "password": "<user_password>",
    "passwordConf": "<user_password_confirmation>"
}
```

### Logout

Send `get` request to `/api/users`.

### Get Orders

Send `get` request to `/api/orders`.

Example response:

```json
{
    "pendingValue": 230.63,
    "pendingNum": 1,
    "ordersByTimestamp": {
        "2019-12": {
            "fulfilled": 16,
            "canceled": 0
        },
    },
    "ordersProducts": [
        {
            "id": "39c5913b-4962-42b4-b539-0f19f0977219",
            "description": "Folha Dupla Vermelha",
            "state": "Pending",
            "quantity": 1250,
            "value": 230.63,
            "date": "2019-12-27"
        },
    ]
}
```

### Get Invoice

Send `get` request to `/api/invoice`.

### Get Logged User

Send `get` request o `/api/users`

```json
{
    "email": "<user_email>",
    "username": "<user_name>",
    "role": "<user_role>",
}
```