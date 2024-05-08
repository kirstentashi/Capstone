function showModal(title, message) {
    // Create the modal backdrop
    const modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'modal-backdrop fade show';
    document.body.appendChild(modalBackdrop);

    // Create the modal dialog
    const modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog';
    modalDialog.setAttribute('role', 'document');

    // Create the modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create the modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    const modalTitle = document.createElement('h5');
    modalTitle.className = 'modal-title';
    modalTitle.textContent = title;
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    // Create the modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = message;

    // Assemble modal elements
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalDialog.appendChild(modalContent);

    // Create the modal
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.appendChild(modalDialog);

    // Show the modal
    $(modal).modal('show');

    // Remove the modal and backdrop when modal is hidden
    $(modal).on('hidden.bs.modal', function () {
        modal.remove();
        modalBackdrop.remove();
    });
}
  