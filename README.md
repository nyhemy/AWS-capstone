# Garden Center Api with postgreSQL.

### Getting Started
* Running the following Docker command will stand up a basic postgres container that this project's properties yaml file is configured to connect to:
```
docker run -d -e POSTGRES_USER=user -e POSTGRES_PASSWORD=root --name myDb -p 5432:5432 postgres
```

### Data

* The DataLoader class in the __data__ package will load a few examples of each entity into the database after the service starts up.

### Running the Unit Tests

Make sure the java folder under test is marked as the Test Sources Root.
Right click on the java folder under test and click Run 'All Tests' or Run 'All Tests' with Coverage.


### Postman Collection
1. Open Postman.
2. On the top left-hand corner, click Import.
3. Select the tab for Import From Link, insert the url: https://www.getpostman.com/collections/8f0862bf6f89337498f5 and hit Import.
4. Items domain can be updated on it's own, or through the Order POSTs and PUTs
