angular.module('MagnusApp').component('home', {
  template:  '<h1>Welcome to the Eye of {{$ctrl.greeting}}!</h1>' +
             '<button ng-click="$ctrl.toggleGreeting()">Toggle Title</button>' +
             '<p>The Horus Heresy</p>' +
             '<p>These Imperial archives focus on all gathered knowledge from the Horus Heresy, the galaxy-spanning civil war of mankind that would set the precedence for over 10,000 years of war and the Imperium of Man\'s current state in the Warhammer 40k universe.</p>',

  controller: function() {
    this.greeting = 'Terra';

    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'Terra') ? 'Terror' : (this.greeting == 'Terror') ? 'Horus' : 'Terra';
    }
  }
})
