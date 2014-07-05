angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
        $scope.model = {
            isAll: true,
            isOpera: false,
            isOperette: false,
            isDrama: false,
            isFiction: false,
            isPorno: false,
            isStuff: false,
            showPorno: false
        }
        
        
        
        $scope.clickAll = function () {
            $scope.model.isOpera = false;
            $scope.model.isOperette = false;
            $scope.model.isDrama = false;
            $scope.model.isFiction = false;
            $scope.model.isPorno = false;
            $scope.model.isStuff = false;
        }
        
        $scope.clickAny = function () {
            $scope.model.isAll = false;
        }
        
        $scope.doSearch = function () {
            if ($scope.model.isPorno) {
                $scope.model.showPorno = true;
            }
    
        };
        
        $scope.hidePorno = function() {
            $scope.model.showPorno = false;
        }
    }]);
    
// var openDataBayApp = angular.module('openDataBayApp', [])
// .controller('OpenDataController', ["$scope", function ($scope) {
//
//
//     $scope.showPorno = false;
//
//     $scope.disableOthers = function() {
//         alert("bla");
//         $scope.isOpera = false;
//         $scope.isOperette = false;
//         $scope.isDrama = false;
//         $scope.isFiction = false;
//         $scope.isPorno = false;
//         $scope.isStuff = false;
//
//     }
//
//     $scope.doSearch = function() {
//         alert("hallo");
//         if ($scope.isPorno) {
//             $scope.showPorno = true;
//         }
//     };
// }]);