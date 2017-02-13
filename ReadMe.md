#PyVenture

About
---------------

I'm currently teaching myself Python syntax and the django web framework. This repository will host some of
my efforts with both while getting up to speed.  Python is not a language I was exposed to in school, but has remained
a huge curiosity for me ever since using it for tool-scripting in Autodesk Maya.

programs
-----------------

In the programs directory I'm working on primarily small shell programs while familiarizing myself with the Python language
and data structures.


django_env
----------------------

In this directory I've built a complete web application using Django v1.9, Django REST, AngularJS, and SQLite3.
The django_env directory is a virtual environment, and the application root level begins in the '/project' directory.

While doing this, I was following along with a Pluralsight course taught by [Reindert-Jan Ekker](https://nl.linkedin.com/in/rjekker). The final project was to build a Scrum Board application that a team can use.

The application implements authentication and view routing.

Here are some screenshots


**GUI for the application**

This is the user interface.  Cards belong to Lists. CRUD operations are performed via http 
non-blocking server calls, allowing for data manipulation to be stored instantly and 
without any page reload. A 500 millisecond timeout is set on user input to prevent
unnecessary network traffic.   

![App GUI](/images/django9screen.png?raw=true)


**Authentication and Session**
This shows server status of http requests. Angular serves the correct view after
credentials are authenticated through a custom auth app in django.

Invalid credentials
![login failure](images/django6screen.png?raw=true)

Successful POST
![login success](images/django7screen.png?raw=true)


**Managing Data**

This is a quick view of table data through a web GUI of the sqlite3 database.
![database](images/django9screen.png?raw=true)


**Card Class API**

This shows django's admin interface serving JSON from one of the model classes 
for the database.

![JSON API](/images/django1screen.png?raw=true)