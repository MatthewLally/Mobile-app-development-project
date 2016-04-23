angular.module('starter.controllers', [])
//Adapted from http://ionicframework.com/docs/api/directive/ionReorderButton/
.controller('WorkTasksCtrl', function($scope , Task2 ) { //work tasks controller
    $scope.data2 = Task2.data2;
    $scope.moveTask2 = function (task2 , fromIndex , toIndex) //move task function
    {
        //Move the item in the array
        $scope.data2.tasks2.splice(fromIndex , 1); 
        $scope.data2.tasks2.splice(toIndex , 0 , task2)
    }
    
    //Adapted from http://stackoverflow.com/questions/32214519/how-to-add-remove-item-to-from-list-in-ionic
    $scope.removeTask2 = function (index) //remove task function
    {
        $scope.data2.tasks2.splice(index , 1); //removes the item clicked on
    }
})

//Adapted from http://ionicframework.com/docs/api/directive/ionReorderButton/
.controller('PersonelTasksCtrl', function($scope , Task){ //personel tasks controller
    $scope.data = Task.data;
    $scope.moveTask = function(task , fromIndex , toIndex) //move task fucntion
    {
        //Move the item in the array
        $scope.data.tasks.splice(fromIndex , 1);
        $scope.data.tasks.splice(toIndex , 0 , task)
    }
    
    //Adapted from http://stackoverflow.com/questions/32214519/how-to-add-remove-item-to-from-list-in-ionic
    $scope.removeTask = function (index)
    {
        $scope.data.tasks.splice(index , 1);
    }
})


            
.controller('addTaskCtrl', function($scope , Task , Task2){ //Add tasks controller
    var data = {
        newTask : "" //sets new task as blank 
    };
    
    var data2 = {
        newTask2 : ""
    };
    
    function addTask(){ //calls add task function 
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