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
				$scope.destList = $scope.list;

				$scope.update = function(){
					return $http.put(
						url,
						$scope.card
					);
				};

				function removeCardFromList(card, list){
					var cards = list.cards;
					cards.splice(
						cards.indexOf(card),
						1
					);
				}

				$scope.delete=function(){
					$http.delete(url).then(
						function(){
							removeCardFromList($scope.card, $scope.list);
						}
					);
				}; //END DELETE

				//debounce waits for a 500 or > millisecond input pause
				$scope.modelOptions = {debounce: 500};

				//function to move cards
				$scope.move = function() {
					if ($scope.destList === undefined){
						return;
					}
				$scope.card.list = $scope.destList.id;
				$scope.update().then(function(){
					{
						removeCardFromList($scope.card, $scope.list);
						$scope.destList.cards.push($scope.card);
					}
				});
			

			} //END MOVE FUNCTION

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