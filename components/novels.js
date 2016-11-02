angular.module('MagnusApp').component('novels', {
  bindings: { novels: '<' },

  template: '<h1>Novels</h1>' +
            '<ul>' +
            '  <li ng-repeat="novel in $ctrl.novels">' +
            '    <a ui-sref="novel({ novelId: novel.id })">' +
            '      {{novel.id}} - {{novel.title}}' +
            '    </a>' +
            '  </li>' +
            '</ul>'
})
