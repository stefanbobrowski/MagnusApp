angular.module('MagnusApp').component('novel', {
  bindings: { novel: '<' },
  template:
        '<div class="breadcrumbs"><a ui-sref="novels">Novels</a> / {{$ctrl.novel.title}}</div>' +
        '<img src="images/novels/novel-{{$ctrl.novel.id}}/novel-{{$ctrl.novel.id}}.jpg"' +
        
        '<div>Title: {{$ctrl.novel.title}}</div>' +
        '<div>Subtitle: {{$ctrl.novel.subtitle}}</div>' +
        '<div>Author: {{$ctrl.novel.author}}</div>' +
        '<div>Release Date: {{$ctrl.novel.release}}</div>' +

        '<a class="arrow prev" ui-sref="novel({ novelId: $ctrl.novel.id - 0 - 1 })"></a>' +
        '<a class="arrow next" ui-sref="novel({ novelId: $ctrl.novel.id - 0 + 1 })"></a>'
});
