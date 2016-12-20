//Definir aplicacion angular js
var angularAplication = angular.module('angularAplication', ['ngRoute']);

//Configurar Rutas de la Aplicacion
angularAplication.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/ejemplo-modelo', { 
		templateUrl: 'views/ejemplo-modelo.html',
	}).
	when('/ejemplo-controladores', {
		templateUrl: 'views/ejemplo-controladores.html',
	}).
	when('/ejemplo-manipular-etiquetas', {
		templateUrl: 'views/ejemplo-manipular-etiquetas.html',
	}).
	when('/ejemplo-colecciones', {
		templateUrl: 'views/ejemplo-colecciones.html',
	}).
	when('/ejemplo-ajax', {
		templateUrl: 'views/ejemplo-ajax.html',
	}).
	when('/ejemplo-observadores', {
		templateUrl: 'views/ejemplo-observadores.html',
	}).
	otherwise({
		redirectTo: '/',
		templateUrl: 'views/bienvenido.html',
	});
}]);

angularAplication.controller('cambioDolarController', ['$scope', function($scope){

	//Variables Iniciales
	$scope.precioTasa = 630;

	//Etiquetas dentro del controlador
	$scope.cantidadDolar = 1;

	//Metodos Controlador
	$scope.getMensajeAyuda = function(){
		$scope.mensajeAyuda = 'Inserte la cantidad de dolares que desee cambiar y conocer el calculo en bolivares';
	};
}]);

angularAplication.controller('cambioEuroController', ['$scope', function($scope){

	//Variables Iniciales
	$scope.precioTasa = 1250;

	//Etiquetas dentro del controlador
	$scope.cantidadEuro = 1;

	//Metodos Controlador
	$scope.getMensajeAyuda = function(){
		$scope.mensajeAyuda = 'Inserte la cantidad de euros que desee cambiar y conocer el calculo en bolivares';
	};
}]);

angularAplication.controller('tasaCambioController', ['$scope', function($scope){

	//Coleccion de objetos para tasas de cambios disponible en la aplicacion
	$scope.tasasCambio = [
		{ nombre: "Dolar", descripcion: "Moneda usada por los estados unidos, influye en muchos paises como referencia" },
		{ nombre: "Euro", descripcion: "Moneda usada por la mayoria de paises europeos, es usada como referencia" }
	];

	//Eventos Controlador
	$scope.eventoClick = function(){
		$scope.eventoUsuario = 'Click';
	};

	$scope.eventoDobleClick = function(){
		$scope.eventoUsuario = 'Doble Click';
	};

	$scope.eventoMouseLeave = function(){
		$scope.eventoUsuario = 'Mouse Leave';
	};

	$scope.eventoMouseEnter = function(){
		$scope.eventoUsuario = 'Mouse Enter';
	};
}]);

angularAplication.controller('contactoController', ['$scope', function($scope){
	
	//Coleccion de objetos para tasas de cambios disponible en la aplicacion
	$scope.contactos = [
		{ nombre: 'Central', numero: '0424-2394301'},
		{ nombre: 'Oficinas Este', numero: '0414-9290401'},
		{ nombre: 'Soporte Usuario', numero: '0412-1294301'},
		{ nombre: 'Sede Administrativa', numero: '0424-2394971'},
		{ nombre: 'Soporte 1', numero: '0416-2344301'},
		{ nombre: 'Soporte 2', numero: '0426-2494301'},
		{ nombre: 'Soporte 3', numero: '0424-2994309'},
	];

	//Eventos Controlador
	$scope.eventoClick = function(){
		$scope.eventoUsuario = 'Click';
	};
}]);

angularAplication.controller('estilosController', ['$scope', function($scope){
	
	//Asignar Estilos
	$scope.cambiarEstilos = function(){
		$scope.estiloModificado = { "background-color" : "#ddd" };
	};

	$scope.agregarClase = function(){
		$scope.tituloEspecial = "titleModify";
	};
}]);

angularAplication.controller('manipularDOMController', ['$scope', function($scope){

	$scope.visibilidadMensaje = false;

	$scope.visualizarMensaje = function(){
		$scope.visibilidadMensaje = true;
	};

	$scope.ocultarMensaje = function(){
		$scope.visibilidadMensaje = false;
	}
}]);

angularAplication.controller('ejemploAjaxController', ['$scope', '$http', function($scope, $http){
	
	$scope.posts = [];
	$scope.newPost = {};

	//Load Posts

	$http.get('https://jsonplaceholder.typicode.com/posts')
	.success(function(data){
		$scope.posts = data;
	})
	.error(function(err){
		console.log(err);
	});

	$scope.addRequestPost = function(){
		$http.post('https://jsonplaceholder.typicode.com/posts', {
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		})
		.success(function(data, status, headers, config){
			console.log(data);

			$scope.posts.push(data);
			$scope.newPost = {};
		})
		.error(function(error, status, headers, config){
			console.log(error);
		});
	};
}]);

angularAplication.controller('observadorController', ['$scope', function($scope){

	$scope.errorMinimo = false;


}]);
