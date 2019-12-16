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
            "product": "Folha Dupla Vermelha",
            "state": "Pending",
            "quantity": 1250,
            "value": 230.63,
            "date": "2019-12-27"
        },
    ]
}
```

### Get Sales

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

Send `get` request to `/api/users`

```json
{
    "email": "<user_email>",
    "username": "<user_name>",
    "role": "<user_role>",
}
```

### Get Stock

Send `get` request to `api/stock`

```json
{
    "assetsInStock": {
        "products": 5000,
        "resources": 52.5
    },
    "products": [
        {
            "name": "Folha Dupla Vermelha",
            "quantity": 5000,
            "value": 750
        },
    ],
    "resources": [
        {
            "name": "Sortido",
            "quantity": 1500,
            "value": 0.035
        }
    ]
}
```

### Get Customers

Send `get` request to `api/customers`

```json
{
    "customers": [
        {
            "name": "Cliente Indiferenciado",
            "lastDate": "2019-10-14",
            "totalOrders": 1,
            "value": 98.4
        },
    ]
}
```

### Get Financial

Send `get` request to `api/financial`

```json
        "document": {
            "grossNetMargin": {
                "gross": [ ],
                "net": [ ]
            },
            "returnOn": {
                "sales": [ ],
                "assets": [ ],
                "equity": [ ]
            },
            "ebitda": 620719,
            "ebit": 274256,
            "avgColPeriod": 23.695467637278,
            "avgPayPeriod": 1.1356754799350746,
            "cashRatio": 0.036856836750076734,
            "acidRatio": 1.5089861570419254
    }
}
```

`grossNetMargin.gross` is the array of monthly values (January to December) with values for Gross Margin

`grossNetMargin.net` is the array of monthly values (January to December) with values for Net Profit Margin

`returnOn.sales` is the array of monthly values (January to December) with values for Return on Sales

`returnOn.assets` is the array of monthly values (January to December) with values for Return on Assets

`returnOn.equity` is the array of monthly values (January to December) with values for Return on Equity

`ebitda` is the value of EBITDA 

`ebit` is the value of EBIT 

`avgColPeriod` is the value of Average Collection Period

`avgPayPeriod` is the value of Average Payment Period

`cashRatio` is the value of Cash Ratio

`acidRatio` is the value of Acid Ratio