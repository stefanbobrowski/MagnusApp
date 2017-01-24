var myApp = angular.module('MagnusApp', ['ui.router']);

// Routing states
myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    var states = [
        {
            name: 'home',
            url: '/home',
            component: 'home'
        },
        {
            name: 'primarchs',
            url: '/primarchs',
            component: 'primarchs',
            resolve: {
                primarchs: function(PrimarchsService) {
                    return PrimarchsService.getAllPrimarchs();
                }
            }
        },
        {
            name: 'primarch',
            url: '/primarch/{primarchId}',
            component: 'primarch',
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

    // Register states
    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});
