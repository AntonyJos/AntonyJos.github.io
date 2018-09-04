
angular
    .module('codeTest')
    .controller('postController', postController);

    postController.$inject = ['$scope', 'postService', 'orderByFilter'];

function postController($scope, postService, orderBy) {
    var vm = this;
    vm.posts = [];
    vm.sortByProperty = '';
    vm.ascendOrder = false;

    vm.retrievePosts = function () {
        postService.getPost().then(function(posts){
            vm.posts = posts
            console.log(vm.posts);
        });
    }

    vm.retrievePosts();

    vm.setSortProperty = function(sortBy){
        if(vm.sortByProperty === sortBy){
            vm.ascendOrder = !vm.ascendOrder;
        } else {
            vm.sortByProperty = sortBy;
            vm.ascendOrder = false;
        }
        vm.posts = orderBy(vm.posts, vm.sortByProperty, vm.ascendOrder)
    }
}
