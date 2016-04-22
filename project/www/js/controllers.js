angular.module('starter.controllers', [])

.controller('WorkTasksCtrl', function($scope , Task2 ) {
    $scope.data2 = Task2.data2;
})

.controller('PersonelTasksCtrl', function($scope , Task){
    $scope.data = Task.data;
    $scope.data = {
        showDelete: false
    };
    
    $scope.edit = function(task){
        alert('Edit Item: ' + task.id);
    };
    
    $scope.share = function(item){
        alert('Share Item : ' + task.id);
    };
    
    $scope.moveTask = function(task , fromTask , toTask) {
        $scope.tasks.splice(fromTask ,1);
        $scope.tasks.splice(toTask , 0 , task);
    };
    
    $scope.onItemDelete = 
        function(item){
        $scope.tasks.splice($scope.tasks.indexOf(task), 1);
    };
})
            
.controller('addTaskCtrl', function($scope , Task , Task2){
    var data = {
        newTask : ""
    };
    
    var data2 = {
        newTask2 : ""
    };
    
    function addTask(){
        Task.addTask(data.newTask);
        data.newTask = "";
    }
    
    function addTask2(){
        Task2.addTask2(data2.newTask2)
        data2.newTask2 = "";
    }
    
    $scope.data = data;
    $scope.addTask = addTask;
    $scope.data2 = data2;
    $scope.addTask2 = addTask2;
})
;