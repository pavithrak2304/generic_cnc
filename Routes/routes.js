const express = require('express');
const routes = express.Router();
const EmployeeController = require('../Controllers/Employeecontroller');

// Get method for listing employees
routes.get('/list/getEmployee', EmployeeController.getEmployee);

// Create new employee
routes.post('/list/createEmployee', EmployeeController.createEmployee);

// edit employee 
routes.patch('/list/editClients',EmployeeController.editEmployee);

//delete employee
routes.patch('list/deleteEmployee',EmployeeController.deleteEmployee)



module.exports = routes;






// const express = require('express')
// const routes = express.Router();
// const EmployeeController = require('../Controllers/Employeecontroller')

// //get method for list create API 
// // routes.get('/list/getEmployee', EmployeeController.getEmployee)

// // to get client's list , search , pagination 
// routes.get('/list/getEmployee', EmployeeController.getEmployee)


// // to create new Employee  
// routes.post('/list/createEmployee',EmployeeController.createEmployee)

// module.exports = routes;


 