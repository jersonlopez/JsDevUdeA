angular.module('app',[])
	.controller('holacontroller', function ($scope) {
		// body...
		$scope.saludo="hola chachos";

		$scope.objeto={
			nombre: "Jerson",
			edad: 19
			};

		$scope.saludeme=function(){
			alert("hola chachos "+$scope.objeto.nombre);
		}

		$scope.arreglo=[{
			nombre: "Jerson",
			edad: 19
			},{
			nombre: "Gamba",
			edad: 22
			},{
			nombre: "Daniel",
			edad: 21
			},{
			nombre: "Seco",
			edad: 21
			},{
			nombre: "Martin",
			edad: 21
			}]
	})