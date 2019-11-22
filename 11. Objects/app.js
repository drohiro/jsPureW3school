// criando o objeto
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

// Monstrando objeto na tela  

function objeto () {
    document.getElementById("demo").innerHTML = 
    person.firstName + " " + person.lastName + " " + person.eyeColor + "A data de hoje é: " + Date();
}