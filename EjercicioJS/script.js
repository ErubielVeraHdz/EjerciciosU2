document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nombre = document.getElementById('nombre').value.trim();
    let apellidos = document.getElementById('apellidos').value.trim();
    let edad = document.getElementById('edad').value;
    
    let isValid = true;
    
    // Validar nombre
    if (nombre === '') {
        document.getElementById('errorNombre').textContent = 'El nombre no puede estar vacío';
        isValid = false;
    } else {
        document.getElementById('errorNombre').textContent = '';
    }
    
    // Validar apellidos
    if (apellidos === '') {
        document.getElementById('errorApellidos').textContent = 'Los apellidos no pueden estar vacíos';
        isValid = false;
    } else {
        document.getElementById('errorApellidos').textContent = '';
    }
    
    // Validar edad
    if (isNaN(edad) || edad <= 0) {
        document.getElementById('errorEdad').textContent = 'La edad debe ser mayor a 0';
        isValid = false;
    } else {
        document.getElementById('errorEdad').textContent = '';
    }
    
    if (isValid) {
        mostrarInformacion(nombre, apellidos, edad);
    }
});

function mostrarInformacion(nombre, apellidos, edad) {
    let infoContainer = document.getElementById('infoContainer');
    let userInfo = document.getElementById('userInfo');
    
    userInfo.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Edad:</strong> ${edad}</p>
    `;
    
    infoContainer.style.display = 'block';
}

document.getElementById('cerrar').addEventListener('click', function() {
    document.getElementById('infoContainer').style.display = 'none';
    document.getElementById('registroForm').reset();
    document.getElementById('nombre').focus();
});