angular.module('MagnusApp').service('PrimarchsService', function($http) {
  var service = {
    getAllPrimarchs: function() {
      return $http.get('data/primarchs.json', { cache: true }).then(function(resp) {
        return resp.data;
      });
    },

    getPrimarch: function(id) {
      function primarchMatchesParam(primarch) {
        return primarch.id === id;
      }

      return service.getAllPrimarchs().then(function (primarchs) {
        return primarchs.find(primarchMatchesParam)
      });
    }
  }

  return service;
})
