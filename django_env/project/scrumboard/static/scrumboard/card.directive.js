(function(){
	'use strict';

	//Retrieves module, then adds a new directive to it
	angular.module('scrumboard.demo')
		.directive('scrumboardCard', CardDirective);

	function CardDirective() {
		return {
			templateUrl: '/static/scrumboard/card.html',
			restrict: 'E'
		};
	}
		/*
			E stands for Element
			This entire function basically maps itself onto an
			html tag <scrumboardCard></scrumboardCard>

			HOWEVER:
			the convention in angular is 
			<scrumboard-card></scrumboard-card>

			Such that using the tags insert the html from the template
			url
		*/

}) ();