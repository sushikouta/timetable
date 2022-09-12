function reload() {
    location.reload();
}

$(document).ready(function() {
    $('#classes').val(document.cookie.split("=")[document.cookie.split("=").indexOf("selected_class") + 1]) 
    $('#classes').change(function() {
        document.cookie = 'selected_class=' + $('#classes > option:selected').val() + ';';
        reload();
    });
});