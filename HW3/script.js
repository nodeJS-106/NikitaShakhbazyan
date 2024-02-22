function nakiani (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return console.log('nakiani'); 
    } else {
        return console.log('no nakiani'); 
    }
}

// nakiani(2012)


function calculator() {
    let num1 = parseInt(prompt("add firts number here"))
    let action = prompt('add action here : "+","-","*","/" ')
    let num2 = parseInt(prompt('add second number here'))
    let result;

    switch (action) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalidd perator';
    }

    return result;
}

// ნოუდში არ ეშვება პრომპტი და წესით ბრაუზერში უნდა იმუშავოს

function goodPassword(pass) {
    if (pass.length < 4) {
        return "It's useless";
    } else if (pass.length <= 6) {
        return "Weak";
    } else if (pass.length <= 8) {
        return "Ok but could be bettr";
    } else if (pass.length <= 16) {
        if (/^\d+$/.test(pass)) {
            return "Password cant contain only numbers";
        }
        return "Perfect!!";
    } else {
        return "Too long";
    }
}


