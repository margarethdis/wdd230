document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento del año actual
    var currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Obtener el elemento de la fecha de última modificación
    var lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});
