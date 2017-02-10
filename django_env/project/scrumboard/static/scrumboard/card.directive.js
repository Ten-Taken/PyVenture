(function(){
	'use strict';

	//Retrieves module, then adds a new directive to it
	angular.module('scrumboard.demo')
		.directive('scrumboardCard', CardDirective);

	function CardDirective() {
		return {
			templateUrl: '/static/scrumboard/card.html',
			restrict: 'E',
			controller: ['$scope', '$http', function($scope,$http){
				var url = '/scrumboard/cards/' + $scope.card.id + '/';

				$scope.update = function(){
					$http.put(
						url,
						$scope.card
					);
				};

				$scope.delete=function(){
					$http.delete(url).then(function(){
						var cards = $scope.list.cards;
						cards.splice(cards.indexOf($scope.card), 1
							);
					}
					);
				};
				//debounce waits for a 500 or > millisecond input pause
				$scope.modelOptions = {debounce: 500};
			}]
		};
	}
		/*
			E stands for Element
			A would make the directive an attribute instead
			This entire function basically maps itself onto an
			html tag <scrumboardCard></scrumboardCard>

			HOWEVER:
			the convention in angular is 
			<scrumboard-card></scrumboard-card>

			Such that using the tags insert the html from the template
			url
		*/

}) ();