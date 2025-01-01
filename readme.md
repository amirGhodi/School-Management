# Steps to run

1. clone the repo
2. run npm i
3. run npm start


# Vercel URL 

https://school-management-e7zczrdzo-amir-ghodis-projects.vercel.app/

# Postman collection is attached for all the apis


## ALL THE API's CURL

curl --location 'http://localhost:3000/api/auth/register' \
--header 'Content-Type: application/json' \
--data '{
  "username": "AmirSuperAdmin",
  "password": "AmirSuperAdmin",
  "role": "superadmin"
}'


curl --location 'http://localhost:3000/api/auth/login' \
--header 'Content-Type: application/json' \
--data '{
  "username": "AmirSuperAdmin",
  "password": "AmirSuperAdmin"
}'


curl --location 'http://localhost:3000/api/schools' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzRjZDFjM2VhMzEwNmVmZTgzYzM0ZSIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzM1NzA3OTcwLCJleHAiOjE3MzU3MTE1NzB9.PUh73RXyOUBNWEtG4KGEcxu41yAmQQQOI8KRZocR7dk' \
--data '{
  "name": "Sample School",
  "address": "123 Main St",
  "phone": "123-456-7890"
}'


curl --location 'http://localhost:3000/api/schools' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzRjZDFjM2VhMzEwNmVmZTgzYzM0ZSIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzM1NzA3OTcwLCJleHAiOjE3MzU3MTE1NzB9.PUh73RXyOUBNWEtG4KGEcxu41yAmQQQOI8KRZocR7dk'


curl --location 'http://localhost:3000/api/schools/6774cd833ea3106efe83c351' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzRjZDFjM2VhMzEwNmVmZTgzYzM0ZSIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzM1NzA3OTcwLCJleHAiOjE3MzU3MTE1NzB9.PUh73RXyOUBNWEtG4KGEcxu41yAmQQQOI8KRZocR7dk'


curl --location --request PUT 'http://localhost:3000/api/schools/6774cd833ea3106efe83c351' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzRjZDFjM2VhMzEwNmVmZTgzYzM0ZSIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzM1NzA3OTcwLCJleHAiOjE3MzU3MTE1NzB9.PUh73RXyOUBNWEtG4KGEcxu41yAmQQQOI8KRZocR7dk' \
--data '{
  "name": "Updated School Name",
  "address": "456 Another St",
  "phone": "987-654-3210"
}'


curl --location --request DELETE 'http://localhost:3000/api/schools/6774cd833ea3106efe83c351' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzRjZDFjM2VhMzEwNmVmZTgzYzM0ZSIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzM1NzA3OTcwLCJleHAiOjE3MzU3MTE1NzB9.PUh73RXyOUBNWEtG4KGEcxu41yAmQQQOI8KRZocR7dk'


curl --location 'http://localhost:3000/api/classrooms' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzRjZWRmM2VhMzEwNmVmZTgzYzM1ZSIsInJvbGUiOiJzY2hvb2xhZG1pbiIsImlhdCI6MTczNTcwODQwMiwiZXhwIjoxNzM1NzEyMDAyfQ.pKtxcvE9L4Ja_fs3Qa1FCJ-z-LSQp0HvCvfAcooyg6s' \
--data '{
  "name": "Classroom A",
  "capacity": 30,
  "school": "676e9dd85482251ecabadfe0"
}'


curl --location 'http://localhost:3000/api/classrooms/6774d04fa9a9072b7b39b1ce' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmU5ZjEwNTQ4MjI1MWVjYWJhZGZlMiIsInJvbGUiOiJzY2hvb2xhZG1pbiIsImlhdCI6MTczNTMwMjk0MX0.ru10Aej1UFpHKEDwwH5XQbmd4dP9hI7woBThrijC6Og'


curl --location 'http://localhost:3000/api/classrooms/6774d02ca9a9072b7b39b1cc/class' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmU5ZjEwNTQ4MjI1MWVjYWJhZGZlMiIsInJvbGUiOiJzY2hvb2xhZG1pbiIsImlhdCI6MTczNTMwMjk0MX0.ru10Aej1UFpHKEDwwH5XQbmd4dP9hI7woBThrijC6Og'

curl --location --request DELETE 'http://localhost:3000/api/classrooms/6774d04fa9a9072b7b39b1ce' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmU5ZjEwNTQ4MjI1MWVjYWJhZGZlMiIsInJvbGUiOiJzY2hvb2xhZG1pbiIsImlhdCI6MTczNTMwMjk0MX0.ru10Aej1UFpHKEDwwH5XQbmd4dP9hI7woBThrijC6Og'

curl --location 'http://localhost:3000/api/students' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmU5ZjEwNTQ4MjI1MWVjYWJhZGZlMiIsInJvbGUiOiJzY2hvb2xhZG1pbiIsImlhdCI6MTczNTMwMjk0MX0.ru10Aej1UFpHKEDwwH5XQbmd4dP9hI7woBThrijC6Og' \
--data '{
  "name": "Student Name2",
  "age": 11,
  "classroom": "676e9f435482251ecabadfe5"
}'

curl --location 'http://localhost:3000/api/students/676e9f435482251ecabadfe5' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmU5ZjEwNTQ4MjI1MWVjYWJhZGZlMiIsInJvbGUiOiJzY2hvb2xhZG1pbiIsImlhdCI6MTczNTMwMjk0MX0.ru10Aej1UFpHKEDwwH5XQbmd4dP9hI7woBThrijC6Og'


curl --location 'http://localhost:3000/api/students/676ea41c84f917083cc63d75' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmU5ZjEwNTQ4MjI1MWVjYWJhZGZlMiIsInJvbGUiOiJzY2hvb2xhZG1pbiIsImlhdCI6MTczNTMwMjk0MX0.ru10Aej1UFpHKEDwwH5XQbmd4dP9hI7woBThrijC6Og'


curl --location 'http://localhost:3000/api/students/676e9f435482251ecabadfe5/studentDetails' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmU5ZjEwNTQ4MjI1MWVjYWJhZGZlMiIsInJvbGUiOiJzY2hvb2xhZG1pbiIsImlhdCI6MTczNTMwMjk0MX0.ru10Aej1UFpHKEDwwH5XQbmd4dP9hI7woBThrijC6Og'

curl --location --request PUT 'http://localhost:3000/api/students/676ea41c84f917083cc63d75' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmU5ZjEwNTQ4MjI1MWVjYWJhZGZlMiIsInJvbGUiOiJzY2hvb2xhZG1pbiIsImlhdCI6MTczNTMwMjk0MX0.ru10Aej1UFpHKEDwwH5XQbmd4dP9hI7woBThrijC6Og' \
--data '{
  "name": "Updated Student Name",
  "age": 11
}'


curl --location --request DELETE 'http://localhost:3000/api/students/676ea41c84f917083cc63d75' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmU5ZjEwNTQ4MjI1MWVjYWJhZGZlMiIsInJvbGUiOiJzY2hvb2xhZG1pbiIsImlhdCI6MTczNTMwMjk0MX0.ru10Aej1UFpHKEDwwH5XQbmd4dP9hI7woBThrijC6Og'