angular.module('MagnusApp').component('home', {
    template:
            '<h1>Welcome to the Eye of Terra!</h1>' +
            '<div class="layout-2-col">' +
                '<div class="left-col">' +
                    '<h2>The Imperial Archives</h2>' +
                    '<p>Nestled alongside the great mountain walls of the Imperial Palace on Terra, this massive library stores all of mankinds progress from the onset of the 31st millennium.</p>' +

                    '<p>On this website we have narrowed that history down into these two links:</p>' +
                    '<a ui-sref="novels">Horus Heresy novels</a>' +
                    '<a ui-sref="primarchs">Primarchs</a></p>' +
                '</div>' +
                '<div class="right-col">' +
                    '<img src="images/home.jpg">' +
                '</div>' +
            '</div>',

  controller: function() {
    this.greeting = 'Terra';

    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'Terra') ? 'Terror' : (this.greeting == 'Terror') ? 'Horus' : 'Terra';
    }
  }
})
