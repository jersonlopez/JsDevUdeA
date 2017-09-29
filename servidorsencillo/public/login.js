

function cambiar(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET","http://localhost:8080/user",true);
    xhr.send();

    xhr.onreadystatechange = function(){
      console.log('Hola',xhr.responseText.usuario);
    }
}

cambiar();
