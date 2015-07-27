Angular
==============

# Estudo do framework
<body ng-app="estudoAngularApp">
## Dependency Injection
```console
angular.module('estudoAngularApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]
```
## Controllers
```console
angular.module('estudoAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
```
## Filters
```console
angular.module('estudoAngularApp')
  .filter('wordwrap', function () {
   return "filter"
  };
});
```
## Bower
Gerenciando dependências

# Estudos do Karma para testes
- Jasmine
- Karma Mocks
- PhantomJS
Configurando o Karma.conf.js
