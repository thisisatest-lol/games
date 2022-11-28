// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('#selectbox').select2();
    $("#changebutton").click(function() {
        var selected = $('#combo :selected').text()
        window.top.postMessage("set"+selected, '*')
    })
});
