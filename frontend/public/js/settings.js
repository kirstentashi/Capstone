document.addEventListener("DOMContentLoaded", function () {
    const settingsForm = document.getElementById('settingsForm');

    settingsForm.addEventListener('submit', handleSettingsFormSubmit);
});

async function handleSettingsFormSubmit(event) {
    event.preventDefault();

    try {
        const formData = new FormData(settingsForm);
        const settingsData = convertFormDataToJson(formData);
        
        const response = await axios.post('/dashboard/settings/createSettings', settingsData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

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
    console.log(response);

    if (response.data.success) {
        itoast(response.data.message);
    } else {
        itoast(response.data.message, 'error');
    }
}
