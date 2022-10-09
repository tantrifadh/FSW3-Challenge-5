
# Car Management Dashboard
ERD
https://dbdiagram.io/d/6342de4ff0018a1c5fc60954 

# Endpoint

http://localhost:8000

Update Car = /edit-car/:id
Delete Car = /deleteCars/:id
Create Car = /create-car

### Example request body
  url: 'http://localhost:8000/api/v1/Cars/2',

Output Example

{
  "id":2,
  "name_car":"Avanza",
  "rent_cost":500000,
  "image_car":"image_car-1650577496689.png",
  "id_type":2,
  "createdAt":"2022-10-09T12:22:40.697Z",
  "updatedAt":"2022-10-09T12:22:40.697Z",
  "type_car":null
}

#### Example response body

  url: 'http://localhost:8000//api/v1/deleteCars/2',

Example Output
    "message": "Car deleted successfully"
