var myModule = angular.module('myApp',['ngResource','ui']);
  myModule.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('/main', {templateUrl: 'tpl/main.html', controller: GridCtrl});
    $routeProvider.when('/edit', {templateUrl: 'tpl/edit.html', controller: EditCtrl});
    $routeProvider.when('/page/:page', {templateUrl: 'tpl/main.html', controller: GridCtrl});
    $routeProvider.when('/sentence', {templateUrl: 'tpl/sentence.html', controller: SentenceCtrl});
    $routeProvider.when('/sentence/:page', {templateUrl: 'tpl/sentence.html', controller: SentenceCtrl});
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);

myModule.factory('wordService', function ($resource) {
    return $resource('data/words.json', {}, {
      get: {method:'GET', isArray:true}
    });
  });

myModule.factory('sentenceService', function(){
    var sentenceImpl = {};
    sentenceImpl.entries = [];
    sentenceImpl.grid = {x:"3", y:"3"};
    sentenceImpl.add = function(word){
      this.entries.push(word.text);
    }
    sentenceImpl.clear = function(){
      this.entries = [];
    }

    return sentenceImpl;
});

myModule.factory('editService', function(){
    var editImpl = {};

    editImpl.grid = {x:"3", y:"3"};

    return editImpl;
});

