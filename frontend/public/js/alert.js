function ialert(type, message) {
  const alertContainer = document.getElementById('ialert');

  const alertHTML = `
      <div class="alert alert-${type} alert-dismissible" role="alert">
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  `;
  alertContainer.innerHTML = alertHTML;
  alertContainer.style.display = 'block';
}
