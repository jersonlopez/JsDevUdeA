// $log

angular.module('app',[]);

function controlador($scope,$log) {
 $scope.persona=""

$scope.saludar=function(nombre) {
  $log.debug(nombre)
  $log.debug($scope.persona)
}
}

function controlador2($scope,$log) {
  $scope.tareaActual={}


  $scope.tareas=[{
    tarea:'Estudiar angular',
    fecha:'/01/05/2017'
  }]

  $scope.anadir=function() {
      $scope.tareas.push($scope.tareaActual)
      $scope.tareaActual={}
  }

  $scope.borrar=function() {

  }


}

angular.module('app').controller('ctrl',controlador)
angular.module('app').controller('ctrl2',controlador2)
