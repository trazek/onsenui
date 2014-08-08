(function () {
    'use strict';



    var app = angular.module('myApp', ['onsen.directives']);

    app.controller("modalCtrl", function ($scope) {
        var nav = navigator;
        nav.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);

        function geolocationSuccess(position) {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
        }

        function geolocationError(error) {
            $scope.latitude = error.code;
            $scope.longitude = error.message;
        }

        ons.ready(function () {
            $scope.showModal = function () {
                modal.show();
            };
        });
    });

})();