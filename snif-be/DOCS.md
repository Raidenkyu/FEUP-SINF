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

### Get Invoice

Send `get` request to `/api/invoice`.

### Get Logged User

Send `get` request o `/api/users`

```json
{
    "_id": "<user_id>",
    "email": "<user_email>",
    "username": "<user_name>",
    "password": "<user_enrypted_password>",
    "role": "<user_role>",
    "__v": 0
}
```