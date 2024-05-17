document.addEventListener("DOMContentLoaded", function () {
    const addItemForm = document.getElementById('addItemForm');

    addItemForm.addEventListener('submit', handleaddItemFormSubmit);
});

async function handleaddItemFormSubmit(event) {
    event.preventDefault();

    try {
        const formData = new FormData(addItemForm);
        const itemData = convertFormDataToJson(formData);
        console.log('Item Data:', itemData); // Add console log

        const response = await axios.post('/dashboard/restaurant/item/create', itemData, {
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
        const addItemModal = bootstrap.Modal.getInstance(document.getElementById('addItemModal'));
        addItemModal.hide();
        itoast(response.data.message);
    } else {
        itoast(response.data.message, 'error');
    }
}

