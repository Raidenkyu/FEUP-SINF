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

### Get Orders List

Send `get` request to `/api/orders/list`.

Query Params: page, pageSize

Example response:

```json
{
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

Query Params: page, pageSize

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

### Get Sales

Send `get` request to `/api/sales/list`.

Query Params: page, pageSize

Example response:

```json
{
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

Send `get` request to `api/stocks`

Example response:

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

### Get Stock Products

Send `get` request to `api/stocks/products`

Query Params: page, pageSize

Example response:

```json
{
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
### Get Stocks resources

Send `get` request to `api/stocks/resources`

Query Params: page, pageSize

Example response:

```json
{
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

Example response:

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

### Get Monthy Purchases

Send `get` request to `api/purchases/monthly`

Example response:

```json
{
    "purchasesByTimestamp": {
        "2019-12": 1073.5
    }
}
```

### Get Purchases List

Send `get` request to `api/purchases/list`

Query Params: page, pageSize

Example response:

```json
{
    "purchasesList": [
        {
            "purchaseId": "a759e462-7007-46f7-954e-427e335d6e95",
            "name": "Folha Simples",
            "quantity": 5000,
            "value": 169.5,
            "date": "2020-03-20"
        },
    ]
}
```

### Get Suppliers List

Send `get` request to `api/purchases/suppliers`

Query Params: page, pageSize

Example response:

```json
{
    "suppliers": [
        {
            "supplierId": "519951018",
            "quantity": 15000,
            "priceRatio": 0.05000000000000001
        },
    ]
}
```
### Get Financial

Send `get` request to `api/financial`

```json
{
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

`grossNetMargin.gross` is the array of monthly values (January to December) with values for Gross Margin. The unit is €.

`grossNetMargin.net` is the array of monthly values (January to December) with values for Net Profit Margin. The unit is €.

`returnOn.sales` is the array of monthly values (January to December) with values for Return on Sales. The unit is % (it's a percentage).

`returnOn.assets` is the array of monthly values (January to December) with values for Return on Assets. The unit is % (it's a percentage).

`returnOn.equity` is the array of monthly values (January to December) with values for Return on Equity. The unit is % (it's a percentage).

`ebitda` is the value of EBITDA. Use 2 decimal places and the unit is €.

`ebit` is the value of EBIT. Use 2 decimal places and the unit is €.

`avgColPeriod` is the value of Average Collection Period. Use 2 decimal places and the unit is 'days'.

`avgPayPeriod` is the value of Average Payment Period. Use 2 decimal places and the unit is 'days'.

`cashRatio` is the value of Cash Ratio. Use 2 decimal places and the it has no unit (it's a ratio).

`acidRatio` is the value of Acid Ratio. Use 2 decimal places and the it has no unit (it's a ratio).


### Get Financial values for Stocks' Page

Send `get` request to `api/stock/financial`

```json
{
    "document": {
        "turnover": 38.74924550847282,
        "avgInvPeriod": 9.419538244175358
    },
}
```

`turnover` is the value of Inventory Turnover. Use 2 decimal places and it has no unit (it represents how many times we sell our entire inventory in the consired time period).

`avgInvPeriod` is the value of Average Inventory Period. Use 2 decimal places and the unit is 'days'.


### Get Financial values for Overview Page

Send `get` request to `api/financial/overview`

```json
{
    "document": {
        "monthlySales": [
            682074.9199999997,
            852439.49,
            930639.5899999999,
            756504.8700000006,
            996844.7800000011,
            785450.2500000003,
            1098385.4899999995,
            627898.6299999998,
            962016.6200000003,
            1053048.03,
            1237902.9499999997,
            939121.2199999986
        ],
        "monthlyExpenses": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -8803419.75
        ],
        "monthlyDiff": [
            682074.9199999997,
            852439.49,
            930639.5899999999,
            756504.8700000006,
            996844.7800000011,
            785450.2500000003,
            1098385.4899999995,
            627898.6299999998,
            962016.6200000003,
            1053048.03,
            1237902.9499999997,
            -7864298.530000001
        ],
        "totalSales": "10,922,326.84",
        "totalExpenses": "8,803,419.75"
    },
}
```

### Get Sales values for Overview Page

Send `get` request to `api/overview/sales`

```json
    "salesByTimestamp": {
        "2019-11": {
            "revenue": 381.29999999999995,
            "income": 310
        },
        "2019-12": {
            "revenue": 10673.339999999997,
            "income": 8677.5
        }
    }
```

### Get Purchases values for Overview Page

Send `get` request to `api/overview/purchases`

```json
    "purchasesByTimestamp": {
        "2019-12": 1073.5
    }
```

### Get Stocks values for Overview Page

Send `get` request to `api/overview/stock`

```json
    "assetsInStock": {
        "products": 13372,
        "resources": 9027.5
    }
```