const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
  // Define your schema properties
  employee_name: { type: String, required: true },
  employee_code: { type: String, required: true },
  employee_Gender: { type: String, enum: ['Male', 'Female'], default: 'Male' },
   employee_DOB: { type: Date },
   employee_Age: { type: Number, required: true },
   employee_Marital_Status: { type: String },
    //  employee_Father_name: { type: String },
  //   employee_Dateofjoining: { type: Date },
  //   employee_WorkexperienceI: { type: String },
  //   employee_WorkexperienceO: { type: String },
  //   employee_Qualification: { type: String },
  //   employee_UAN_no: { type: Number, required: true },
  //   employee_Esic_no: { type: Number, required: true },
  //   employee_PF_no: { type: Number, required: true },
  //   employee_Aadhar_no: { type: String, required: true },
  //   employee_PAN_no: { type: String, required: true },
  //   employee_Communication_add: { type: String },
  //   employee_Permanent_add: { type: String },
  //   employee_Present_add: { type: String },
  //   employee_Bank_Acc_no: { type: String },
  //   employee_Phone_no: { type: Number, required: true },
  //   user_Date_of_resign: { type: Date },
  //   employee_prepared_by: { type: String },
  //   emplyee_created_at: { type: Date, default: Date.now },
  //   employee_created_by: { type: String, default: "admin_user", required: true },
  //   employee_updated_at: { type: Date, default: Date.now },
  //   employee_updated_by: { type: String, default: "admin_user", required: true },
  //   employee_status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  //   // employee_email_id: { type: String, required: true },
  //   employee_classification: { type: String, enum: ['staff', 'labour'], default: 'staff' },
  //   employee_salary: { type: Number },
 
});

const EmployeeModel = mongoose.model('bs_users', listSchema);

const createEmployeeModel = async (data) => {
  try {
    const newEmployee = new EmployeeModel(data);
    return await newEmployee.save();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getEmployeeList = async (limit, offset, status) => {
  try {
    // Implement logic to fetch employee list
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const searchEmployee = async (limit, offset, status, search) => {
  try {
    // Implement search logic
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//edit 

const editEmployeeModel = async(_id, clientData)=>{
  try {
      // Assuming clientmodels.findOneAndUpdate returns a promise
      console.log(_id, clientData);
      console.log("model pg");
      const sol = await EmployeeModel.findOneAndUpdate({ _id: _id }, { $set: clientData },{new:true});
      console.log("sol>>>>>>>>>>>>>>>>>--130",sol);
      return sol;
  } catch(Error) {
      return Error;
  } 
}
const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  // other fields...
});




module.exports = { createEmployeeModel, getEmployeeList, searchEmployee,editEmployeeModel,employeeSchema };



// const mongoose = require('mongoose');

// const listSchema = new mongoose.Schema({
//     employee_name: { type: String, required: true },
//     employee_code: { type: String, required: true },
//     employee_Gender: { type: String, enum: ['Male', 'Female'], default: 'Male' },
//     employee_DOB: { type: Date },
//     employee_Age: { type: Number, required: true },
//     employee_Marital_Status: { type: String },
//     employee_Father_name: { type: String },
//     employee_Dateofjoining: { type: Date },
//     employee_WorkexperienceI: { type: String },
//     employee_WorkexperienceO: { type: String },
//     employee_Qualification: { type: String },
//     employee_UAN_no: { type: Number, required: true },
//     employee_Esic_no: { type: Number, required: true },
//     employee_PF_no: { type: Number, required: true },
//     employee_Aadhar_no: { type: String, required: true },
//     employee_PAN_no: { type: String, required: true },
//     employee_Communication_add: { type: String },
//     employee_Permanent_add: { type: String },
//     employee_Present_add: { type: String },
//     employee_Bank_Acc_no: { type: String },
//     employee_Phone_no: { type: Number, required: true },
//     user_Date_of_resign: { type: Date },
//     employee_prepared_by: { type: String },
//     emplyee_created_at: { type: Date, default: Date.now },
//     employee_created_by: { type: String, default: "admin_user", required: true },
//     employee_updated_at: { type: Date, default: Date.now },
//     employee_updated_by: { type: String, default: "admin_user", required: true },
//     employee_status: { type: String, enum: ['active', 'inactive'], default: 'active' },
//     employee_email_id: { type: String, required: true },
//     employee_classification: { type: String, enum: ['staff', 'labour'], default: 'staff' },
//     employee_salary: { type: Number },
// })

// // to create a new employee list.
// const employeemodels = mongoose.model('bs_users', listSchema)

// // client list table

// const getEmployeeList = async () => {
//     try {
//         console.log("in to employee get list");
//         const getemployees = await employeemodels.find()
//         console.log("getemployees", getemployees);
//         return getemployees;
//     }
//     catch (Error) {
//         console.error(Error);
//         throw Error;
//     }
// }
// // to search employee list with name and id 
// const searchEmployee = async (limit, offset, status, search) => {
//     try {
//         console.log("search employee Req in service" + search);
//         const searchRegex = new RegExp(search, 'i');
//         const searchResNo = await employeemodels.find({
//             $or: [
//                 // {_id : searchRegex},
//                 { employee_name: searchRegex }
//             ]
//         })

//         return searchResNo
//     }
//     catch (Error) {
//         console.error(Error);
//         return Error;
//     }
// }

// const createEmployeeModel = async (data) => {
//     try {
//         const latestEmployee = await employeemodels.findOne({}, {}, { sort: { 'employee_id': -1 } });
//         const newemployeeId = latestEmployee ? latestEmployee.employee_id + 1 : 1; // Increment the last ID or start at 1
//         data.employee_id = newemployeeId;
//         const newEmployee = new employeemodels(data)
//         const savedclient = await newEmployee.save()
//         return savedclient;
//     }
//     catch (error) {
//         console.log(error);
//         throw Error;
//     }
// }
// module.exports = { employeemodels, getEmployeeList, searchEmployee, createEmployeeModel };
