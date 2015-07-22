
 var alexApp = angular.module('alexApp',['ui.bootstrap','ui.router'])
 .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
 	
 	var home={
 		name: 'home',
 		url:'/home',
 		templateUrl: 'partials/partial-home.html',
 		controller: 'homeCtrl'
 	};
 	var popup={
 		name: 'popup',
 		url: '/popup',
 		templateUrl: 'partials/partial-popup.html',
 		controller: 'popupCtrl'
 	};
 	
 	$stateProvider.state(home);
 	$stateProvider.state(popup);
 	$urlRouterProvider.otherwise('/home');
 }]);