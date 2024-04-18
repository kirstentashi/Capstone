document.addEventListener("DOMContentLoaded", function () {
    const addEmployeeForm = document.getElementById('addEmployeeForm');

    addEmployeeForm.addEventListener('submit', handleaddEmployeeFormSubmit);
});

async function handleaddEmployeeFormSubmit(event) {
    event.preventDefault();

    try {
        const formData = new FormData(addEmployeeForm);
        const employeeData = convertFormDataToJson(formData);
        console.log('Employee Data:', employeeData); // Add console log

        const response = await axios.post('/dashboard/users/employees/createEmployee', employeeData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Response:', response); // Add console log

        handleResponse(response);
    } catch (error) {
        console.error('Error:', error);
        // Display error toast if needed
        itoast('An error occurred. Please try again.', 'error');
    }
}

function convertFormDataToJson(formData) {
    const json = {};
    formData.forEach((value, key) => {
        json[key] = value;
    });
    return JSON.stringify(json);
}

function handleResponse(response) {
    console.log('Response Data:', response.data); // Add console log

    if (response.data.success) {
        // Close the modal
        const addEmployeeModal = bootstrap.Modal.getInstance(document.getElementById('addEmployeeModal'));
        addEmployeeModal.hide();
        itoast(response.data.message);
    } else {
        itoast(response.data.message, 'error');
    }
}

