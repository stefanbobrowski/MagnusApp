var myApp = angular.module('MagnusApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  // An array of state definitions
  var states = [
    {
      name: 'home',
      url: '/home',
      // Using component: instead of template:
      component: 'home'
    },
    {
      name: 'primarchs',
      url: '/primarchs',
      component: 'primarchs',
      // This state defines a 'people' resolve
      // It delegates to the PeopleService to HTTP fetch (async)
      // The people component receives this via its `bindings: `
      resolve: {
        primarchs: function(PrimarchsService) {
          return PrimarchsService.getAllPrimarchs();
        }
      }
    },
    {
      name: 'primarch',
      // This state takes a URL parameter called personId
      url: '/primarchs/{primarchId}',
      component: 'primarch',
      // This state defines a 'primarch' resolve
      // It delegates to the PeopleService, passing the personId parameter
      resolve: {
        primarch: function(PrimarchsService, $transition$) {
          return PrimarchsService.getPrimarch($transition$.params().primarchId);
        }
      }
    },
    {
      name: 'novels',
      url: '/novels',
      component: 'novels',
      resolve: {
        novels: function(NovelsService) {
          return NovelsService.getAllNovels();
        }
      }
    },

    {
      name: 'novel',
      url: '/novels/{novelId}',
      component: 'novel',
      resolve: {
        novel: function(NovelsService, $transition$) {
          return NovelsService.getNovel($transition$.params().novelId);
        }
      }
    }
  ]

  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});

// To account for plunker embeds timing out, preload the async data
// myApp.run(function($http) {
//   $http.get('data/primarchs.json', { cache: true });
// });
