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
            "orderId": "39c5913b-4962-42b4-b539-0f19f0977219",
            "product": "Folha Dupla Vermelha",
            "state": "Pending",
            "quantity": 1250,
            "value": 230.63,
            "date": "2019-12-27"
        },
    ]
}
```

### Get Invoice

Send `get` request to `/api/sales`.

Example response:

```json
{
    "growth": 0,
    "margin": 81.30076654191977,
    "salesByTimestamp": {
        "2019-11": {
            "revenue": 381.29999999999995,
            "income": 310
        },
    },
    "products": {
        "Folha Dupla com Cheiro a Menta": {
            "units": 1500,
            "revenue": 369
        },
    },
    "salesList": [
        {
            "id": "55403bed-b6df-4bae-b01a-16ff581d242e",
            "product": "Folha Dupla com Cheiro a Menta",
            "quantity": 1500,
            "value": 300,
            "date": "2019-12-14",
            "revenue": 369
        },
    ]
}
```

### Get Logged User

Send `get` request o `/api/users`

```json
{
    "email": "<user_email>",
    "username": "<user_name>",
    "role": "<user_role>",
}
```