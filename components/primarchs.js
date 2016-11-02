angular.module('MagnusApp').component('primarchs', {
  bindings: { primarchs: '<' },

  template: '<h1>Primarchs</h1>' +
            '<ul>' +
            '  <li ng-repeat="primarch in $ctrl.primarchs">' +
            '    <a ui-sref="primarch({ primarchId: primarch.id })">' +
            '      {{primarch.legionNum}} - {{primarch.name}}' +
            '    </a>' +
            '  </li>' +
            '</ul>'
})
