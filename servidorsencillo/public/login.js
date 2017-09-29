function cambiar(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET","http://localhost:8080/users",true);
    xhr.send();

    xhr.onreadystatechange = function(){
      console.log(xhr.responseText);
    }
}

cambiar();
