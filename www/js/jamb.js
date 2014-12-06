angular.module('todo',['ionic'])

.config(function($stateProvider, $urlRouterProvider){
	
	$stateProvider
	.state('tab',{
		url:"/tab",
		abstract:true,
		templateUrl:"templates/tabs.html"
	})
	.state('tabs.home',{
		url:"/home/:itemId",
		views:{
			'home-tab':{
				templateUrl:"templates/home-tab.html",
				controller:'HomeTabCtrl'
			}
		}
	})
	.state('tabs.about',{
		url:"/about/:itemId",
		views:{
			'about-tab':{
				templateUrl:"templates/about-tab.html",
				controller:'AboutTabCtrl'
			}
		}
	})
	.state('tabs.contact',{
		url:"/contact",
		views:{
			'contact-tab':{
				templateUrl:"templates/contact-tab.html",
				controller:'ContactTabCtrl'
			}
		}
	});
	
	$urlRouterProvider.otherwise('/tab/home');
	
})

.controller('HomeTabCtrl', function($scope){

	$scope.items=[
	{{id:0}},
	{{id:1}},
	{{id:2}}
	];
	
})

.controller('AboutTabCtrl',function($scope){
	$scope.tasks=[
		{id:0,name:'tobias'},
		{id:1,name:'severino'}
	];
})

.controller('ContactTabCtrl',function($scope){
});