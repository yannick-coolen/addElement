// var car = ["Tesla", "Ferrari", "Lamborghini", "Audi"];

// for (var i = 0; i < car.length; i++) {
//     console.log(car[i])
// }

document.getElementById("addBtn").onclick = function() {add()};

function add() {
    var addElement = [];
    addElement.push(length+=1); 
    for(i = 0; i < addElement.length; i++) {
        document.getElementById("result").innerHTML += addElement + ": Hello." + "<br>"; 
    }
}