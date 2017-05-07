(function() {
  function servirespuesta($http,server) {

    this.getquestion= function() {
      return $http.get(server+"preguntas");
    }

    this.getAnswer=function (id) {
       return $http.get(server+"preguntas/"+id);
    }
  }
  angular.module("app").service("servirespuesta",servirespuesta)
})()
