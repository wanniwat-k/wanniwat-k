
function getuser(){
var username = document.getElementById("user").value ;
var password = document.getElementById("pass").value ;


console.log(username);
console.log(password);

function checkspecialchar()
{
    let pattern = /!@#$%^&*()_+=-/
    result = pattern.test(username);
    console.log(result);

    if (result == true) {
        alert("Username cannot have special characters")
    } else {
        alert("Welcome to Milly world")
    }

    



}

checkspecialchar();

}

