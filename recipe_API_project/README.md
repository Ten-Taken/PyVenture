# recipe_API_project

## About

A REST API built with Django and Docker. PosgreSQL is used for the database.
Token authentication is implemented, allowing for shared authentication
across endpoints.

## Usage

### Testing

```console
foo@bar:~$ docker-compose run app sh -c "python manage.py test && flake8"
```

*flake8 is used for linting*

### Running

```console
foo@bar:~$ docker-compose up
```

Docker's internal address has been forwarded to localhost:8000

### Administration

A custom user model has been implemented, so an email is expected for the username.

To create a super user

```console
foo@bar:~$ docker-compose run app sh -c "python manage.py createsuperuser"
```

From there, all users can be managed from localhost:8000/admin


## API

### Create User

Used to create a new user.

**URL** : `api/user/create/`

**Method** : `POST`

**Request**

```json
{
    "email": "iloveauth@example.com",
    "password": "abcd1234",
    "name": "Fred"
}
```

**Response**

```json
{
    "email": "iloveauth@example.com",
    "name": "Fred"
}
```

### Retrieve Auth Token

Used to collect a Token for a registered User.

**URL** : `api/user/token/`

**Method** : `POST`

**Request**

```json
{
    "email": "iloveauth@example.com",
    "password": "abcd1234"
}
```

**Response**
```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```
