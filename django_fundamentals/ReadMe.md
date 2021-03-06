# About

This project uses the Django 1.11 LTS

## Project

The project is a web application for playing Tic Tac Toe.
I'm following along with a refresher course found at [this location](https://app.pluralsight.com/library/courses/django-fundamentals-update/table-of-contents "Django Fundamentals") .  

Building out the project to completion is not a priority 
at the moment. I'm mainly using this to go through env setup
for the latest LTS.

### Resources

1. [Django](https://www.djangoproject.com/ "Django Community")
2. [pgAdmin](https://www.pgadmin.org/ "pgAdmin")
3. [PostGres for Mac env](https://postgresapp.com/ "postgresapp")
4. [Python Editors](https://wiki.python.org/moin/PythonEditors "Python Editors")
5. [Python](python.org "Python")
6. [Postman](https://www.getpostman.com/ "Postman")

### Django Setup

__Python and a virtual environment__

1. Install Python 3. (Py3 has venv package by default. Py2 does not)
2. Then `$ python3 -m venv django-env` where 'django-env' is the name of the environment directory.
3. Activate the virtual environment with `$ . django-env/bin/activate`
4. To exit the environment run `$ deactivate`

__Django__

6. Make sure the virtual env is active before installing packages. (Otherwise they are global)
7. Then `$ pip install django`
8. You can specify a version with `$ pip install django==1.x` etc. (Otherwise latest LTS)  

### Creating a Django project

1. Activate environment `$ . django-env/bin/activate `
2. Create new project `$ django-admin startproject tictactoe`
3. cd into the project `$ cd tictactoe/`
3. Launch dev server (localhost:8000) `$ python manage.py runserver`  

*manage.py* is invoked to handle most admin commands in the shell
*sqlite3*  packaged db for the dev environment
*tictactoe* (Varies) this is the project directory created with `startproject`

**Optional** : PyCharm can launch a dev server from the GUI