let employees = []; // Array to store employee data

        function addEmployee() {
            const eid = document.getElementById("eid").value;
            const ename = document.getElementById("ename").value;
            const salary = document.getElementById("salary").value;
            const role = document.getElementById("role").value;
            const doj = document.getElementById("doj").value;

            if (eid && ename && salary && role && doj) { // Basic validation
                const newEmployee = { eid, ename, salary, role, doj };
                employees.push(newEmployee);
                renderTable();
                document.getElementById("employeeForm").reset(); // Clear the form
            } else {
                alert("Please fill in all fields.");
            }
        }

        function renderTable() {
            const tableBody = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
            tableBody.innerHTML = ""; // Clear existing rows

            employees.forEach(employee => {
                const row = tableBody.insertRow();
                const eidCell = row.insertCell();
                const enameCell = row.insertCell();
                const salaryCell = row.insertCell();
                const roleCell = row.insertCell();
                const dojCell = row.insertCell();
                const actionsCell = row.insertCell();

                eidCell.textContent = employee.eid;
                enameCell.textContent = employee.ename;
                salaryCell.textContent = employee.salary;
                roleCell.textContent = employee.role;
                dojCell.textContent = employee.doj;

                const editButton = document.createElement("button");
                editButton.textContent = "Edit";
                editButton.classList.add("edit-btn");
                editButton.onclick = () => editEmployee(employee.eid); // Pass eid for edit
                actionsCell.appendChild(editButton);

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.classList.add("delete-btn");
                deleteButton.onclick = () => deleteEmployee(employee.eid); // Pass eid for delete
                actionsCell.appendChild(deleteButton);
            });
        }


        function editEmployee(eid) {
            // Find the employee in the array
            const index = employees.findIndex(emp => emp.eid === eid);
            if (index !== -1) {
                const employee = employees[index];
                // Populate the form fields with the employee's data
                document.getElementById("eid").value = employee.eid;
                document.getElementById("ename").value = employee.ename;
                document.getElementById("salary").value = employee.salary;
                document.getElementById("role").value = employee.role;
                document.getElementById("doj").value = employee.doj;

                // Change the button to "Update"
                const addButton = document.querySelector("#employeeForm button");
                addButton.textContent = "Update";
                addButton.onclick = () => updateEmployee(index);  //Pass the index of the employee to update function
            }
        }

        function updateEmployee(index) {
            const eid = document.getElementById("eid").value;
            const ename = document.getElementById("ename").value;
            const salary = document.getElementById("salary").value;
            const role = document.getElementById("role").value;
            const doj = document.getElementById("doj").value;

            if (eid && ename && salary && role && doj) {
                employees[index] = { eid, ename, salary, role, doj };
                renderTable();
                document.getElementById("employeeForm").reset();
                const addButton = document.querySelector("#employeeForm button");
                addButton.textContent = "Add Employee";
                addButton.onclick = addEmployee;
            } else {
                alert("Please fill in all fields.");
            }
        }

        function deleteEmployee(eid) {
            employees = employees.filter(emp => emp.eid !== eid);
            renderTable();
        }

