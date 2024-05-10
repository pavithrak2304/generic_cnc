const { editEmployee } = require("../Controllers/Employeecontroller");
const { createEmployeeModel, getEmployeeList, editEmployeeModel } = require("../Models/Employeemodel");

const getClientService = async (limit, offset, status, search) => {
  try {
    if (search) {
      const value = await searchEmployee(limit, offset, status, search);
      return value;
    } else {
      const getUsers = await getEmployeeList(limit, offset, status); // Pass parameters if required
      return getUsers;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

const createEmployee = async (req) => {
  try {
//     const{employee_name,employee_code,employee_Gender,employee_DOB,employee_Age,employee_Marital_Status,employee_Father_name,employee_Dateofjoining,employee_WorkexperienceI, employee_WorkexperienceO
//       ,employee_Qualification,employee_UAN_no,employee_Esic_no,employee_PF_no,employee_Aadhar_no,employee_PAN_no,employee_Communication_add,
//       employee_Permanent_add,employee_Present_add, employee_Bank_Acc_no,employee_Phone_no,user_Date_of_resign,employee_prepared_by,emplyee_created_at,
//       employee_created_by,employee_updated_at,employee_updated_by,employee_status,employee_email_id,employee_classification,employee_salary } = req;

//    console.log(employee_name,employee_code,employee_Gender,employee_DOB,employee_Age,employee_Marital_Status,employee_Father_name,employee_Dateofjoining,employee_WorkexperienceI, employee_WorkexperienceO
//     ,employee_Qualification,employee_UAN_no,employee_Esic_no,employee_PF_no,employee_Aadhar_no,employee_PAN_no,employee_Communication_add,
//     employee_Permanent_add,employee_Present_add, employee_Bank_Acc_no,employee_Phone_no,user_Date_of_resign,employee_prepared_by,emplyee_created_at,
//     employee_created_by,employee_updated_at,employee_updated_by,employee_status,employee_email_id,employee_classification,employee_salary)

console.log(req, "body >>>>");
    const newEmployee = await createEmployeeModel(req);
    return newEmployee;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//edit 

const editEmployeeService = async (_id, clientData) => {
  try {
       const updatedEmployee = await editEmployeeModel(_id, clientData);
       console.log(">>>>>>",updatedEmployee);
       return updatedEmployee;
  } catch (error) {
      return error;
  }
};

async function deleteEmployee(employeeId) {
  try {
    const result = await employeeId.findByIdAndDelete(employeeId);
    return result;
  } catch (error) {
    throw new Error('Error deleting employee');
  }
};

module.exports = { getClientService, createEmployee, editEmployeeService,deleteEmployee};


// const { getEmployeeList, searchEmployee, createEmployeeModel } = require("../Models/Employeemodel");

// const getdata = async (req) => {
//     try {
//         console.log("****6777*****", req.query);
//         const showdata = await getEmployeeList();
//         return showdata;
//     } catch (Error) {
//         console.error(Error);
//         return Error;
//     }
// };

// const getClientService = async (limit, offset, status, search) => {
//     try {
//         console.log("get client service");
//         if (search) {
//             try {
//                 const value = await searchEmployee(limit, offset, status, search);
//                 return value;
//             } catch (Error) {
//                 console.error(Error);
//                 return Error;
//             }
//         } else {
//             console.log("at service to fetch list");
//             const getUsers = await getEmployeeList(); // Corrected function call
//             if (getUsers.length === 0) {
//                 return;
//             }
//             return getUsers;
//         }
//     } catch (Error) {
//         console.error(Error);
//         return Error;
//     }
// };

// const clientservice = async (employeeData) => {
//     try {
//         const newEmployee = await createEmployeeModel(employeeData); // Corrected function call
//         return newEmployee;
//     } catch (error) {
//         throw new Error('Could not create employee');
//     }
// };

// module.exports = { getdata, getClientService, clientservice };
