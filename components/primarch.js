angular.module('MagnusApp').component('primarch', {
  bindings: { primarch: '<' },
  template:
            '<div class="breadcrumbs"><a ui-sref="primarchs">Primarchs</a> / {{$ctrl.primarch.name}}</div>' +
            '<img src="images/primarchs/primarch-{{$ctrl.primarch.id}}/primarch-{{$ctrl.primarch.id}}.jpg"' +
            '<div>Name: {{$ctrl.primarch.name}}</div>' +
            '<div>Alias: {{$ctrl.primarch.alias}}</div>' +
            '<div>Legion: {{$ctrl.primarch.legionNum}}</div>' +
            '<div>Legion Name: {{$ctrl.primarch.legionName}}</div>' +
            '<div>Homeworld: {{$ctrl.primarch.homeworld}}</div>' +
            '<div>Weapon of choice: {{$ctrl.primarch.weapon}}</div>' +
            '<a class="arrow prev" ui-sref="primarch({ primarchId: $ctrl.primarch.id - 0 - 1 })"></a>' +
            '<a class="arrow next" ui-sref="primarch({ primarchId: $ctrl.primarch.id - 0 + 1 })"></a>',


        controller: function() {

            console.log("hello");



        }
});
