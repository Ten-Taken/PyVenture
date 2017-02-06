// IIFE, stands for Immediately Invoked Function Expression. (uses Anonymous self-invoking function)
	//This is what creates the angular module
(function(){

	'use strict';

	angular.module('scrumboard.demo', [])
		.controller('ScrumboardController', ['$scope','$http',ScrumboardController]);

		// Angular CONTROLLER
	function ScrumboardController($scope, $http){

		// ANGULAR MODEL
		$scope.add = function(list,title){
			var card ={
				title: title
			};

			list.cards.push(card); //Push, array method
			//so, a card is created, and pushed into lists cards array
		};

		$scope.data = []; //Start with empty list

			//This is an asynchronous call to server
		$http.get('/scrumboard/lists').then(function(response){
			$scope.data = response.data; //This is assigning response to the empty list in JSON format.
		}); 


	}//END ScrumboardController
	

}());