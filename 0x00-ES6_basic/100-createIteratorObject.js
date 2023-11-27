export default function createIteratorObject(report) {
	  let currentDepartmentIndex = 0;
	  let currentEmployeeIndex = 0;
	  const departments = Object.keys(report.allEmployees);

	  return {
		      [Symbol.iterator]: function* () {
			            while (currentDepartmentIndex < departments.length) {
					            const currentDepartment = departments[currentDepartmentIndex];
					            const employeesInDepartment = report.allEmployees[currentDepartment];

					            if (currentEmployeeIndex < employeesInDepartment.length) {
							              yield employeesInDepartment[currentEmployeeIndex];
							              currentEmployeeIndex++;
							            } else {
									              currentDepartmentIndex++;
									              currentEmployeeIndex = 0;
									            }
					          }
			          },
		    };
}
