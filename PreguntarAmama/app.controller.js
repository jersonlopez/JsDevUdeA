(function(){
  function controllerMama($scope, servirespuesta){
    //$scope.preguntas= ["Pregunta1","Pregunta2","Pregunta3","Pregunta4"]
    $scope.respuesta="";
    $scope.preguntas="";

    servirespuesta.getquestion().then((data)=>{
    $scope.preguntas=data.data;
    })

    $scope.preguntar= function(id) {
    servirespuesta.getAnswer(id).then((data)=>{
    $scope.respuesta=data.data.respuesta

    })

    }

    $scope.respuestas=["Respuesta1","Respuesta2","Respuesta3","Respuesta4"]

  }
  angular.module('app').controller('controllerMama', controllerMama)
})()
