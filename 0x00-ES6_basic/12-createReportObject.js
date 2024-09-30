export default function cretaeReportObject(employeesList) {
  return {
    allEmployees => ...employeesList,
    getNumberOfDepartments() => Object.keys(this.allEmployees).length;
  }
}
