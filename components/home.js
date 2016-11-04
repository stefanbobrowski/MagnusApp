angular.module('MagnusApp').component('home', {
    template:
            '<h1>Welcome to the Eye of {{$ctrl.greeting}}!</h1>' +
            '<button ng-click="$ctrl.toggleGreeting()">Toggle Title</button>' +
            '<div class="layout-2-col">' +
                '<div class="left-col">' +

                    '<h2>The Imperial Archives</h2>' +

                    '<p>This vast library, located inside the heart of the Imperial Palace on Terra, functions to preserve and catalog all of mankind\'s history. It even houses technological relics salvaged from the Dark Age of Technology</p>' +

                    '<p>As humanity enters The Great Crusade, the Emperor of Mankind\'s grand initiative to reuinite humanity and spread the Imperial Truth throughout the galaxy, these archives will continue to grow.</p>' +

                    '<p>Remembrancers have been tasked by the Emperor himself to record the triumphs of Imperial forces as they reconquer the stars. Their findings are sent here, to the Imperial Archives, where all can witness the glory of His legions and their respective primarchs.</p>' +

                    '<p>Your access level includes the <a ui-sref="primarchs">Primarchs</a> and <a ui-sref="novels">Horus Heresy novels</a>. Enjoy your stay.</p>' +

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
