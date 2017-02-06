// IIFE, stands for Immediately Invoked Function Expression. (uses Anonymous self-invoking function)
	//This is what creates the angular module
(function(){

	'use strict';

	angular.module('scrumboard.demo', [])
		.controller('ScrumboardController', ['$scope',ScrumboardController]);

		// Angular CONTROLLER
	function ScrumboardController($scope){

		// ANGULAR MODEL
		$scope.add = function(list,title){
			var card ={
				title: title
			};

			list.cards.push(card); //Push, array method
			//so, a card is created, and pushed into lists cards array
		};


		$scope.data = [
			{
				name: 'Django demo',
				cards: [
					{
						title: 'Create Models'
					},
					{
						title: 'Create View'
					},
					{
						title: 'Migrate Database'
					},
				]
			},
			{
				name: 'Angular demo',
				cards: [
					{
						title: 'Write HTML'
					},
					{
						title: 'Write JavaScript'
					},

				]
			}

		];


	}//END ScrumboardController
	

}());