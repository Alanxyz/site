window.onscroll = function(){scrollFunction()};

function scrollFunction() {
    var button = document.getElementById('upbutton');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function up(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
