(function () {
	'use strict';

	angular
		.module('scrumboard.demo')
		.controller('LoginController', 
			['$scope', '$http', '$location','Login', LoginController]);

	function LoginController ($scope, $http, $location, Login){
		$scope.login= function() {
			Login.login($scope.user) //delegated to Login service
			.then(function(){
				$location.url('/');
			},
			function(){
				$scope.login_error="Invalid username/password combination";
			});
		};

		//If already logged in, forward to home page
		if (Login.isLoggedIn()){
			$location.url('/');
		}
	}

}) ();