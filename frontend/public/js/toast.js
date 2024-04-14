function itoast(message) {
    // Select the existing toast container or create a new one if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        document.body.appendChild(toastContainer);
    }

    // Create the toast element
    const toast = document.createElement('div');
    toast.className = 'toast slide';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    const toastHeader = document.createElement('div');
    toastHeader.className = 'toast-header';

    const icon = document.createElement('i');
    icon.className = `bi bi-check-square-fill text-success me-2`;
    icon.style.fontSize = '24px';

    const strong = document.createElement('strong');
    strong.className = 'me-auto';
    strong.textContent = message;

    const small = document.createElement('small');
    small.textContent = 'Just now';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn-close';
    button.setAttribute('data-bs-dismiss', 'toast');
    button.setAttribute('aria-label', 'Close');

    // const toastBody = document.createElement('div');
    // toastBody.className = 'toast-body';
    // toastBody.textContent = message;

    toastHeader.appendChild(icon);
    toastHeader.appendChild(strong);
    toastHeader.appendChild(small);
    toastHeader.appendChild(button);

    toast.appendChild(toastHeader);
    // toast.appendChild(toastBody);

    toastContainer.appendChild(toast);

    const toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();

    // Add event listener for when the toast is about to be hidden
    toast.addEventListener('hide.bs.toast', function () {
        // Apply sliding animation when toast is being hidden
        toast.classList.remove('slide');
        toast.classList.add('slide-out');
    });

    // Remove the toast element from the DOM after animation completes
    toast.addEventListener('hidden.bs.toast', function () {
        toast.remove();
    });
}
