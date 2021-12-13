// Define all
const date = new Date();

// Festivity Update
if(date.getMonth() == 11){
    document.title = document.title + ' | Christmas'
} else if(date.getMonth() == 9) {
    document.title = document.title + ' | Halloween'
} else if(date.getMonth() == 11 && date.getDay() == 30){
    document.title = document.title + ' | Happy New Year'
}

// Function
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
