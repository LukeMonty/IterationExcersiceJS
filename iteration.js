
function iterate() {
    
    let number = +document.getElementById("numberToIterate").value;
    console.log(number);
    while (number != 1) {
        let br = document.createElement("br");
        if (number % 3 == 0){
            let n = document.createTextNode(number+ " divide by 3");
            document.getElementById("list").appendChild(n);
            document.getElementById("list").appendChild(br);
            number = number / 3;
        }
        else if (number % 3 == 1){
            let n = document.createTextNode(number + " - 1");
            document.getElementById("list").appendChild(n);
            document.getElementById("list").appendChild(br);
            number = number - 1;
        }
        else if (number % 3 == 2){
            let n = document.createTextNode(number + " + 1");
            document.getElementById("list").appendChild(n);
            document.getElementById("list").appendChild(br);
            number = +number + 1;
        }
        let n = document.createTextNode(number);
        
    }
}
