function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('show');
}

window.onload = function() {
    var myModal = new bootstrap.Modal(document.getElementById('contactModal'));
    myModal.show();
}

var modalCloseButton = document.querySelector('.btn-close');
modalCloseButton.addEventListener('click', function() {
    var myModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
    myModal.hide();
    window.location.href = "index.html"; 
});