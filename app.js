var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var input = document.getElementById('email');
var button = document.querySelector('.btn');

var errorMessage = document.querySelector('.error-message');
var errorImage = document.querySelector('.error-image');
function isEmailAddress(str) {




    return str.match(pattern);

}



button.onclick = function () {
    var result = isEmailAddress(input.value);
    if (!result) {
        errorMessage.style.display = "block";
        errorImage.style.display = "inline";
    } else {
        errorMessage.style.display = "none";
        errorImage.style.display = "none";
    }
}