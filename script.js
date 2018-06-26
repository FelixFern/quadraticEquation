var a_val = 0;
var b_val = 0;
var c_val = 0;
var discriminant;
var total1;
var total2; 

function quadratic() {
    a_val = Number(document.getElementById('a_value').value);
    b_val = Number(document.getElementById('b_value').value);
    c_val = Number(document.getElementById('c_value').value);
    
    discriminant = Math.pow(b_val, 2) - (4 * a_val * c_val);
    if (discriminant > -1) {
        total1 = (-b_val + Math.sqrt(discriminant)) / (2*a_val);
        document.getElementById('x1').innerHTML = "x<sub>1</sub> = " + total1;

        total2 = (-b_val - Math.sqrt(discriminant)) / (2*a_val);
        document.getElementById('x2').innerHTML = "x<sub>2</sub> = " + total2;
    }
    else {
        document.getElementById('x1').innerHTML = "Discriminant = " + discriminant + ", "+ discriminant + " < -1 no value for x<sub>1</sub> and x<sub>2</sub>";
    }
}

