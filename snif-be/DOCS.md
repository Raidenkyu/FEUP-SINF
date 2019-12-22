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
            "clientName": "Peninsula",
            "clientTaxID": "596159498",
            "totalValue": 246,
            "date": "2020-01-17",
            "orderId": "bf662d85-bbde-46be-a659-a0f6862ade7a",
            "state": "Pending"
        }
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
            "clientName": "Lyon Souveniers",
            "clientTaxID": "518377679",
            "totalValue": 984,
            "date": "2019-12-17",
            "invoiceId": "beeb3af9-8908-44e9-9a5a-2163643cb193"
        }
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
            "supplierName": "Renova",
            "supplierTaxID": "543458687",
            "totalValue": 988.75,
            "date": "2020-01-17",
            "purchaseId": "0d122b23-6e59-4c5d-b622-65772aaba224"
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
            "supplierName": "Random Company",
            "supplierKey": "519951018",
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

### Get Purchases Order Information values for Drilldown

Send `get` request to `api/purchases/{orderKey}`

```json
{
    "supplierName": "Renova",
    "supplierTaxID": "543458687",
    "totalValue": 988.75,
    "date": "2020-01-17",
    "purchasesList": [
        {
            "productName": "Sacos para embalar",
            "productQuantity": 12500,
            "productValue": 988.75
        }
    ]
}
```

### Get Order Information values for Drilldown Page

Send `get` request to `api/orders/{orderKey}`

```json
{
    "clientName": "Intramarche",
    "clientTaxID": "553515330",
    "totalValue": 289.05,
    "date": "2019-12-13",
    "state": "Processed",
    "orderList": [
        {
            "productName": "Lencos Decorados com Elementos de Natal",
            "productQuantity": 500,
            "productValue": 123
        },
    ]
}
```

### Get Sale Information values for Drilldown

Send `get` request to `api/sales/{saleKey}`

```json
{
    "clientName": "MicroPreco",
    "clientTaxID": "553848860",
    "totalValue": 608.85,
    "date": "2019-12-14",
    "invoiceId": "55403bed-b6df-4bae-b01a-16ff581d242e",
    "salesList": [
        {
            "product": "Folha Dupla com Cheiro a Menta",
            "quantity": 1500,
            "value": 300,
            "revenue": 369
        }
    ]
}
```

### Get Stock Information values for Drilldown Page

Send `get` request to `api/stocks/{itemKey}`

```json
{
    "name": "Folha Dupla Vermelha",
    "quantity": 5000,
    "value": 750,
    "error": false
}
```

### Get Customer Information values for Drilldown Page

Send `get` request to `api/customers/info({customerKey}`

```json
{
    "customerKey": "0004",
    "name": "Pingo Azedo",
    "taxId": "571689434",
    "email": "geral@pingoazedo.com",
    "telefone": "210114411",
    "country": "Portugal"
}
```

### Get Customer Orders values for Drilldown Page

Send `get` request to `api/customers/orders({customerKey}`

```json
{
    "orders": [
        {
            "orderId": "36f021e3-36d9-4698-af0f-088c5b06233b",
            "totalValue": 138.38,
            "date": "2019-01-18",
            "state": "Processed"
        },
        {
            "orderId": "f3d3ae79-4179-486a-828e-75ba5fa9bc78",
            "totalValue": 507.38,
            "date": "2019-12-13",
            "state": "Processed"
        },
        {
            "orderId": "b614c7c6-5e82-4854-a30d-c851af7b53a8",
            "totalValue": 381.3,
            "date": "2019-11-04",
            "state": "Processed"
        }
    ]
}
```

### Get Customer Sales values for Drilldown Page

Send `get` request to `api/customers/sales({customerKey}`

```json
{
    "sales": [
        {
            "invoiceId": "7495274f-663f-4705-912e-821fb6e36f93",
            "totalValue": 138.38,
            "date": "2019-10-01"
        },
        {
            "invoiceId": "44b92868-3962-43ca-ac74-de0d3cb2d52d",
            "totalValue": 381.3,
            "date": "2019-11-04"
        },
        {
            "invoiceId": "a65b209b-e27e-4350-8642-ed4ecfc23992",
            "totalValue": 507.38,
            "date": "2019-12-14"
        }
    ]
}
```

### Get Supplier Information values for Drilldown Page

Send `get` request to `api/purchases/suppliers/({supplierKey}`

```json
{
    "supplierId": "519951018",
    "supplierKey": "0024",
    "name": "The Navigator Company",
    "telephone": "234910600",
    "country": "Portugal"
}
```

### Get Supplier orders values for Drilldown Page

Send `get` request to `api/purchases/suppliers/orders/({supplierKey}`

```json
{
    "orders": [
        {
            "orderId": "282adc28-4888-442f-81c5-2405d558836d",
            "totalValue": 847.5,
            "date": "2019-12-14",
            "state": "Processed"
        },
        {
            "orderId": "9726dea2-d89c-4818-a9da-3d9b5951e4d5",
            "totalValue": 847.5,
            "date": "2019-12-14",
            "state": "Pending"
        },
        {
            "orderId": "a759e462-7007-46f7-954e-427e335d6e95",
            "totalValue": 847.5,
            "date": "2019-12-14",
            "state": "Pending"
        },
        {
            "orderId": "8edd642a-7b93-4577-a3bd-62ea998d7fce",
            "totalValue": 135.6,
            "date": "2019-11-15",
            "state": "Processed"
        },
        {
            "orderId": "c509f162-8637-493e-80b1-c5f57b6a6425",
            "totalValue": 847.5,
            "date": "2019-12-14",
            "state": "Pending"
        }
    ]
}
```

### Get Stock Item orders

Send `get` request to `/api/stocks/{itemKey}/orders`

Query Params: page, pageSize

```json
{
    "transactions": [
        {
            "id": "9563f0b8-4b46-48d4-b140-60b47937ef25",
            "product": "Folha Simples Cheiro a Menta",
            "customer": "MicroPreco",
            "state": "Processed",
            "quantity": 1500,
            "value": 239.85,
            "date": "2019-12-14"
        },
    ]
}
```

### Get Stock Item sales

Send `get` request to `/api/stocks/{itemKey}/sales`

Query Params: page, pageSize

```json
{
    "transactions": [
        {
            "id": "55403bed-b6df-4bae-b01a-16ff581d242e",
            "product": "Folha Simples Cheiro a Menta",
            "quantity": 1500,
            "value": 195,
            "date": "2019-12-14",
            "revenue": 239.85
        },
    ]
}
```

### Get Stock Item purchases

Send `get` request to `/api/stocks/{itemKey}/purchases`

Query Params: page, pageSize

```json
{
    "transactions": [
        {
            "id": "282adc28-4888-442f-81c5-2405d558836d",
            "product": "Folha Tripla",
            "supplier": "The Navigator Company",
            "state": "Processed",
            "quantity": 5000,
            "value": 395.5,
            "date": "2019-12-20"
        },
    ]
}
```