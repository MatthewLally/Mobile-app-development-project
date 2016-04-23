angular.module('starter.services', [])

.factory('Task', function() {
    var data = {
        tasks: [
            {title: "Buy Milk", added : new Date()}
            ,{title : "Feed Dog", added : new Date()}
        ]
    };
    
    function addTask(title){
        data.tasks.push({title : title, added : new Date()});
    }
    
    return {
        data : data
        , addTask : addTask
    }
})

.factory('Task2', function(){
    var data2 = {
        tasks2: [
            {title : "Attend meeting", added : new Date()}
            ,{title : "Complete project", added : new Date()}
        ]
    };
    
    function addTask2(title){
        data2.tasks2.push({title : title, added : new Date()});
    }
    
    return {
        data2 : data2
        , addTask2 : addTask2
    };
});