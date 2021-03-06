// IIFE, stands for Immediately Invoked Function Expression. (uses Anonymous self-invoking function)
	//This is what creates the angular module
(function(){

	'use strict';

	angular.module('scrumboard.demo', ['ngRoute'])
		.controller('ScrumboardController', 
			['$scope','$http','$location','Login',ScrumboardController]);

		// Angular CONTROLLER
	function ScrumboardController($scope, $http,$location, Login){

		// ANGULAR MODEL
		$scope.add = function(list,title){
			var card ={
				list: list.id,
				title: title
			};

			$http.post('/scrumboard/cards/', card)
			.then(function(response){
				list.cards.push(response.card);
			},
				//Error handler, second argument of then method
				function(){
					alert('Could not create card');
				});

			/*
			list.cards.push(card);  
				-- Push, array method
				-- so, a card is created, and pushed into lists cards array
			*/
		};

		Login.redirectIfNotLoggedIn();

		$scope.logout = Login.logout;

		$scope.data = []; //Start with empty list

			//This is an asynchronous call to server
		$http.get('/scrumboard/lists/').then(function(response){
			$scope.data = response.data; //This is assigning response to the empty list in JSON format.
		}); 

		$scope.sortBy = 'story_points';
		$scope.reverse = true;
		$scope.showFilters=false;

	}//END ScrumboardController
	


}());