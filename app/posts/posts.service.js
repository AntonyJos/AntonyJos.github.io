angular
    .module('codeTest')
    .service('postService', postService);

postService.$inject = ['$http', '$q']

function postService($http, $q) {

    var baseUrl = "https://jsonplaceholder.typicode.com/"

    var Baseheaders = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    function callAPI(requestmethod, requestUrl, requestData, successCallBack, errorCallBack) {
        $http({
            method: requestmethod,
            url: requestUrl,
            headers: Baseheaders,
            data: requestData
        }).then(function success(response) {
            console.log(response);
            if (response.status === 200) {
                successCallBack(response.data)
            }
        }, function error(response) {
            console.log(response);
        });
    }

    this.getPost = function () {
        var defered = $q.defer();
        var requestUrl = baseUrl + 'posts'
        var apiResponse = callAPI('GET', requestUrl, '', function success(responseData) {
            console.log(responseData);
            defered.resolve(responseData);
        }, function error(errorDetails) {

        });
        return defered.promise;
    }

}