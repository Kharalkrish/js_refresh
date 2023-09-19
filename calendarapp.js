let date = new Date().getDay();

let day = "";
switch (date) {
    case 1:
        day = "sunday"
        break;
    case 2:
        day = "Monday"
        break;

    case 3:
        day = "tuesday"
        break;

    case 4:
        day = "wed"
        break;
    case 5:
        day = "thue"
        break;

    case 6:
        day = "friday"
        break;

    case 7:
        day = "sat"
        break;

    default:
        day = "you enter incorrect date";


    case 6:
        day = "sat"
        break;
}

console.log(day);