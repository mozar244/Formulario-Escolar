$(document).ready(function() {
    // Aguardar 3 segundos e depois esconder a splash screen
    setTimeout(function() {
        $('#splashScreen').fadeOut(1000, function() {
            $(this).remove(); // Remove o elemento da DOM após o fade-out
        });
    }, 3000); // Espera de 3 segundos antes de desaparecer
});
$(document).ready(function() {
    $("#menuButton").click(function() {
        $("#menuOptions").slideToggle(300);
    });
});
