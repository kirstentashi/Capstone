function ialert(type, message) {
  const alertContainer = document.getElementById('formAlert');
  alertContainer.innerHTML = `
    <div class="alert alert-${type}" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  
  alertContainer.style.display = 'block';
}
