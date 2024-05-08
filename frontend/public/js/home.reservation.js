document.addEventListener("DOMContentLoaded", async function () {
    const reservationForm = document.getElementById('reservationForm');
    const submitBtn = document.getElementById('submitBtn');

    reservationForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Disable the submit button
        submitBtn.disabled = true;

        // Add loader HTML to the button
        submitBtn.innerHTML = `<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Submitting reservation...`;

        const formData = new FormData(reservationForm);
        const jsonObject = {};

        // Convert FormData to JSON
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });

        try {
            const response = await axios.post('/dashboard/restaurant/reservations/createReservation', jsonObject);

            const responseData = response.data;

            if (responseData.type === 'success') {
                console.log(responseData);
                const title = 'Reservation Success';
                const message = `
    <p>We're delighted to confirm that your reservation has been successfully submitted.</p>
    <p>You can expect to hear from us soon via either a phone call or an email, providing you with updates on your booking status.</p>
    <p>Thank you for choosing us.</p>
`;
                showModal(title, message);
                // ialert('success', responseData.message);

            } else {
                ialert('danger', responseData.message);
            }

        } catch (error) {
            ialert('danger', error.response.data.message);
        } finally {
            // Enable the submit button and restore its original content
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Submit reservation';
        }
    });
});
