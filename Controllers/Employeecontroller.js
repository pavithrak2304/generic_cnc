const EmployeeService = require('../services/Employeeservice');

const getEmployee = async (req, res) => {
  try {
    let result;
    if (req.query.limit && req.query.offset) {
      const { limit, offset, status, search } = req.query;
      result = await EmployeeService.getClientService(limit, offset, status, search);
    } else {
      result = await EmployeeService.getClientService(); // No limit or offset provided
    }
    if (result !== undefined && result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).send("No records found");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error: " + error.message);
  }
};


const createEmployee = async (req, res) => {
  try {
    console.log(req, ">>>>>")
    const createdEmployee = await EmployeeService.createEmployee(req.body);
    res.status(201).json(createdEmployee); // Send response with created employee data
  } catch (error) {
    console.error(error);
    res.status(400).send("Unexpected Error: could not create " + error.message);
  }
};

// Controller.js
const editEmployee = async (req, res) => {
  console.log("#####");
  try {
    const { _id } = req.query; // Extract _id from query parameters
    console.log(_id);
    const {
      employee_name,
     
       employee_code,
        employee_Gender,
        employee_DOB,
        employee_Age,
        employee_Marital_Status,
        employee_Father_name,
        employee_Dateofjoining,
        employee_WorkexperienceI,
        employee_WorkexperienceO,
        employee_Qualification,
        employee_UAN_no,
        employee_Esic_no,
        employee_PF_no,
        employee_Aadhar_no,
        employee_PAN_no,
        employee_Communication_add,
        employee_Permanent_add,
        employee_Present_add,
        employee_Bank_Acc_no,
        employee_Phone_no,
        user_Date_of_resign,
        employee_prepared_by,
        employee_created_at,
        employee_created_by,
        employee_updated_at,
        employee_updated_by,
        employee_status,
        employee_email_id,
        employee_classification,
        employee_salary 
      } = req.body;

      const editEmployeeServiceResult = await EmployeeService.editEmployeeService(_id, req.body);
      
      res.status(200).send(editEmployeeServiceResult);
  } catch (Error) {
      res.status(400).send("Error editing client: " + Error);
  }
};

//view employee API
const viewEmployee = async (req, res) => {
  try{

      const {_id} = req.query
      console.log("params view employee"+ _id);
      const viewEmployeeService = await service.viewEmployee(_id) 
      res.status(200).send("view Employees "+ viewEmployeeService)

  }catch(Error){

      res.status(400).send("Error in viewing Employees "+ Error)

  }
};
async function deleteEmployee(req, res) {
  const { employeeId } = req.params;
  try {
    const result = await EmployeeService.deleteEmployee(employeeId);
    res.status(200).json({ message: 'Employee deleted successfully', data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





module.exports = {
  getEmployee,
  createEmployee,
  editEmployee,
  viewEmployee,
  deleteEmployee


};





// const EmployeeService = require('../services/Employeeservice')
// // const { Employeeservice } = require("../services/Employeeservice");

// const getEmployee = async (req, res) => {
//   console.log("controller executed", req.query);
//   try {
//     let result;
//     if (req.query.limit && req.query.offset) {
//       const { limit, offset, status,search  } = req.query;
//       console.log(limit, offset, status, " for view list");
//       result = await EmployeeService.getClientService(limit, offset, status, search);
//     } else {
//       result = await EmployeeService.getClientService( limit, offset, status,search);
//     }
//     console.log("Result:", result);
//     if (result.length > 0) {
//       res.status(200).json(result);
//     } else {
//       res.status(404).send("No records found");
//     }
//   } catch (error) {
//     console.log("Error:", error);
//     res.status(500).send("Internal Server Error: " + error);
//   }
// };

// //to create a employee

// const createEmployee = async (req, res) => {
//   try {
//     const clientservice = await EmployeeService.clientservice(req); // Corrected function call
//     res.status(200).send("Employee list created successfully " + clientservice);
//   } catch (Error) {
//     console.log(Error);
//     res.status(400).send("Unexpected Error: could not create " + Error);
//   }
// };






// module.exports = {
//   getEmployee,
//   createEmployee
// };










// // const service = require('../services/Employeeservice') 



// // const EmployeeController = {
// //     async createClient(req, res){
// //     try
// //     {
// //         const employeeservice = await service.createService(req.body)     
// //         res.status(200).send("Client list created successfully "+ clientservice)
// //     }
// //     catch(Error)
// //     {
// //         console.log(Error);
// //         res.status(400).send("Unexpected Error : could not create "+ Error) ;
// //         // throw Error;
// //     }

// //     },
// //     async viewEmployee(req,res){
// //         try{
// //             const {limit, offset,status} = req.query;
// //                 console.log(limit+offset+status+" for view list");
// //                 if(limit==undefined || offset ==undefined){
// //                     res.status(400).send("Bad Request to server : undefined")
// //                     return;
// //                 }
// //                 else{
// //                     console.log("at controller");
// //                     const clientservice = await service.getClientService(req)
// //                     if(clientservice){
// //                         res.status(200).send(clientservice);
// //                     }
// //                     else{
// //                         res.status(400).send("no records found");
// //                     }
// //             }
// //         }catch(Error){
// //             res.status(400).send("Unexpected Error : no records found "+Error);
// //         }
// //     },

// //     async getEmployee(req,res){
// //         try{
// //             const {client_id} = req.query;
// //             console.log(client_id);
// //             const objNum = '661e0178c79fab699c3733eb';
// //             console.log(typeof _id + "sp");
// //             const getclientService = await service.getSpecificClient(client_id)
// //             res.status(200).send("requested data "+getclientService)

// //         }catch(Error){
// //             console.error(Error);
// //             res.status(400).send(Error+" failed")
// //         }
// //     },
// // }
    
// // module.exports = EmployeeController;


// // // const service = require('../services/Employeeservice') 

// // const { EmployeeService } = require("../services/Employeeservice");



// // const  Employeecontroller = {
// //     async getEmployee(req, res) {
// //         try {
// //             console.log("getemployee function");
// //             // res.send("")
// //             res.send("im success response");
// //             // const Employeeservice = await service.createService(req.body)     
// //             // res.status(200).send("Employee list created successfully "+ Employeeservice)
// //         }
// //         catch (Error) {
// //             console.log(Error);
// //             res.status(400).send("Error : could not create a Employee " + Error);

// //         }
// //     },

// //     async viewEmployee(req,res){
// //         try{
// //             const {limit, offset,status} = req.query;
// //                 console.log(limit+offset+status+" for view list");
// //                 if(limit==undefined || offset ==undefined){
// //                     res.status(400).send("Bad Request to server : undefined")
// //                     return;
// //                 }
// //                 else{
// //                     console.log("at controller");
// //                     const Employeeservice = await EmployeeService.getEmployeeService(req)
// //                     if(Employeeservice){
// //                         res.status(200).send(Employeeservice);
// //                     }
// //                     else{
// //                         res.status(400).send("no records found");
// //                     }
// //             }
// //         }catch(Error){
// //             res.status(400).send("Unexpected Error : no records found "+Error);
// //         }
// //     },

// // }

// // module.exports = {Employeecontroller};