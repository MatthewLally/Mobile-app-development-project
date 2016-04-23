angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  .state('tab.workTasks', {
    url: '/workTasks',
    views: {
      'tab-workTasks': {
        templateUrl: 'templates/tab-workTasks.html', //sets the url
        controller: 'WorkTasksCtrl' //sets the controller
      }
    }
  })

  .state('tab.personelTasks', {
      url: '/personelTasks',
      views: {
        'tab-personelTasks': {
          templateUrl: 'templates/tab-personelTasks.html', //sets the url
          controller: 'PersonelTasksCtrl' //sets the controller
        }
      }
    })

  .state('tab.addTask', {
    url: '/addTask',
    views: {
      'tab-addTask': {
        templateUrl: 'templates/tab-addTask.html', //sets the url
        controller: 'addTaskCtrl' //sets the controller
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/addTask'); //If other tabs can not be found go to this one

});
