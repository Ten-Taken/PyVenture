# recipe_API_project

## About

A REST API for storing and retrieving recipes, built with Django and Docker.
PosgreSQL is used for the database. Token authentication is implemented,
allowing for shared authentication across endpoints.  Filtering is
enabled on recipes, tags, and ingredients.  High test coverage as development
followed TDD methodology.

## Usage

### Testing

```console
foo@bar:~$ docker-compose run --rm app sh -c "python manage.py test && flake8"
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
foo@bar:~$ docker-compose run --rm app sh -c "python manage.py createsuperuser"
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

### Logged-In User Management

Allows a authenticated user to update their info.  

**URL** : `api/user/me/`

**Method** : `GET`, `PATCH`, `PUT`,


### Tags

For managing and retrieving tags

**URL** : `/api/recipe/tags/`

**Method** : `GET`, `POST`, `PATCH`, `PUT`,

**Response - GET**
```json
[
    {
        "id": 1,
        "name": "Vegan"
    },
    {
        "id": 2,
        "name": "Appetizer"
    }
]
```

### Ingredients

For managing and retrieving ingredients

**URL** : `/api/recipe/ingredients/`

**Method** : `GET`, `POST`, `PATCH`, `PUT`,

**Response - GET**
```json
[
    {
        "id": 3,
        "name": "Tumeric"
    },
    {
        "id": 2,
        "name": "Sugar"
    },
    {
        "id": 1,
        "name": "Cabbage"
    }
]
```

### Recipes

For managing and retrieving recipes

**URL** : `/api/recipe/recipes/`

**Method** : `GET`, `POST`, `PATCH`, `PUT`,

**Response - GET**
```json
[
    {
        "id": 1,
        "title": "Vegan Key Lime Pie",
        "ingredients": [
            4
        ],
        "tags": [
            1
        ],
        "time_minutes": 60,
        "price": "15.00",
        "link": ""
    }
]
```

Querying an individual recipe returns a detail view, with tags and ingredients serialized.

**URL** : /api/recipe/recipes/1/

```json
{
    "id": 1,
    "title": "Vegan Key Lime Pie",
    "ingredients": [
        {
            "id": 4,
            "name": "Limes"
        }
    ],
    "tags": [
        {
            "id": 1,
            "name": "Vegan"
        }
    ],
    "time_minutes": 60,
    "price": "15.00",
    "link": ""
}
```

Filtering recipes by Tag or Ingredient id's

**URL** : `/api/recipe/recipes/?ingredients=2`

**METHOD** : `GET`

```json
[
    {
        "id": 2,
        "title": "Sugared Cabbage Delight",
        "ingredients": [
            1,
            2
        ],
        "tags": [
            2
        ],
        "time_minutes": 2,
        "price": "5.00",
        "link": ""
    },
    {
        "id": 1,
        "title": "Vegan Key Lime Pie",
        "ingredients": [
            2,
            4
        ],
        "tags": [
            1
        ],
        "time_minutes": 35,
        "price": "15.00",
        "link": ""
    }
]
```

Adding an image to a recipe object.

**URL** : `/api/recipe/recipes/1/upload-image/`

**Method** : `POST`

```json
{
    "id": 1,
    "image": "http://localhost:8000/media/uploads/recipe/9d628166-98f0-4955-808f-91b040e71392.jpeg"
}
```
