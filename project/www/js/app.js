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
        templateUrl: 'templates/tab-workTasks.html',
        controller: 'WorkTasksCtrl'
      }
    }
  })

  .state('tab.personelTasks', {
      url: '/personelTasks',
      views: {
        'tab-personelTasks': {
          templateUrl: 'templates/tab-personelTasks.html',
          controller: 'PersonelTasksCtrl'
        }
      }
    })

  .state('tab.addTask', {
    url: '/addTask',
    views: {
      'tab-addTask': {
        templateUrl: 'templates/tab-addTask.html',
        controller: 'addTaskCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/addTask');

});
