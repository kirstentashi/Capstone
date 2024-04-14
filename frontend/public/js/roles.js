document.addEventListener('DOMContentLoaded', function () {
    const addRoleButton = document.getElementById('addRoleButtonInModal');

    addRoleButton.addEventListener('click', async function () {
        const roleName = document.getElementById('roleName').value;
        const roleColor = document.getElementById('roleColor').value;

        // Collect permissions
        const rolePermissions = [];
        const checkboxes = document.querySelectorAll('#rolePermissions input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                rolePermissions.push(checkbox.value);
            }
        });

        try {
            const response = await fetch('/dashboard/create-role', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    roleName,
                    roleColor,
                    rolePermissions: rolePermissions.join(',')
                })
            });

            const responseData = await response.json();

            if (response.ok) {
                // Role created successfully
                console.log('Role created successfully:', responseData.role);

                // Close the modal
                const addRoleModal = bootstrap.Modal.getInstance(document.getElementById('addRoleModal'));
                addRoleModal.hide();
                itoast(responseData.message);
            } else {
                // Handle error responses, show error message or handle accordingly
                console.error('Failed to create role:', responseData.message);
                // Display error message
                ialert('danger', responseData.message);
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error creating role:', error);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const roleNames = document.querySelectorAll('.role-name');

    roleNames.forEach(function(roleName) {
        roleName.style.padding = '0 .5em';
        roleName.style.borderRadius = '0.5em';
    });
    

    roleNames.forEach(function(roleName) {
        const color = roleName.getAttribute('data-color');
        roleName.style.backgroundColor = color;
        // Optionally, you can set text color based on the background color
        roleName.style.color = getContrastColor(color);
    });

    // Function to get contrast color for text based on background color
    function getContrastColor(bgColor) {
        // Convert hex color to RGB
        const r = parseInt(bgColor.substring(1, 3), 16);
        const g = parseInt(bgColor.substring(3, 5), 16);
        const b = parseInt(bgColor.substring(5, 7), 16);

        // Calculate luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // Use white or black depending on luminance
        return luminance > 0.5 ? '#141414' : '#d3d3d3';
    }
});
