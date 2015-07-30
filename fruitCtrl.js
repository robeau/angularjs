/**
 * Created by natalie on 7/30/2015.
 */
var app = angular.module('myApp',[]).controller('myCtrl', function($scope){
    $scope.fruits =  [{flavor: 'apple', price: .50},
        {flavor: 'lime', price: .80},
        {flavor: 'orange', price: .50},
        {flavor: 'lemon', price: .75},
        {flavor: 'strawberry', price: .90},
        {flavor: 'pineapple', price: 1.00}
    ];
});