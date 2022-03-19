
function copyToClipboard(){
    var copy = document.getElementById("copyThis");
    navigator.clipboard.writeText(copy.value);
    alert("The text has been copied");
}