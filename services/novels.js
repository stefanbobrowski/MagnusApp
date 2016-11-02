angular.module('MagnusApp').service('NovelsService', function($http) {
  var service = {
    getAllNovels: function() {
      return $http.get('data/novels.json', { cache: true }).then(function(resp) {
        return resp.data;
      });
    },

    getNovel: function(id) {
      function novelMatchesParam(novel) {
        return novel.id === id;
      }

      return service.getAllNovels().then(function (novels) {
        return novels.find(novelMatchesParam)
      });
    }
  }

  return service;
})
