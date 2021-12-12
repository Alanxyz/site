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
