import Trainer from "../models/Trainer";

const trainers = [
  new Trainer(
    1,
    "John Doe",
    "john@gmail.com",
    "9876543210",
    "React",
    "React, JavaScript, HTML, CSS"
  ),

  new Trainer(
    2,
    "Aathma",
    "aathma@gmail.com",
    "9876543211",
    ".NET",
    "C#, ASP.NET Core, SQL Server"
  ),

  new Trainer(
    3,
    "Apoorv",
    "apoorv@gmail.com",
    "9876543212",
    "Java",
    "Spring Boot, Hibernate, Microservices"
  ),

  new Trainer(
    4,
    "Elisa Smith",
    "elisa@gmail.com",
    "9876543213",
    "Python",
    "Python, Django, Flask"
  )
];

export default trainers;