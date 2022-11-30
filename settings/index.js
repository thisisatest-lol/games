// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('#selectbox').select2();
    $("#changebutton").click(function() {
        var selected = $("#selectbox").val()
        window.top.postMessage(`set${selected}`, '*')
    })
});
