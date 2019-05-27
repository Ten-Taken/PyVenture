# recipe_API_project

## About

A REST API built with Django, Docker. PosgreSQL is used for the database.

## Usage

### Testing

All tests can be found in the tests directory of the core module.

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
