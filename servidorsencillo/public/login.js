

function cambiar(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET","http://localhost:8080/abc",true);
    xhr.send();

    xhr.onreadystatechange = function(){
      console.log('Hola',xhr.responseText.usuario);
    }
}

cambiar();
