

angular
	.module("codeTest", ['ngRoute']);

angular
	.module("codeTest")
	.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "app/posts/posts.html",
				controller: "postController as postVm"	
			})
	});
