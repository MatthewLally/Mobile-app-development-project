angular.module('starter.services', [])

.factory('Task', function() {
    var data = {
        tasks: [
            {title: "Go shopping", added : new Date()}
            ,{title : "Meet John", added : new Date()}
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
            {title : "Attend Meeting", added : new Date()}
            ,{title : "Complete Project", added : new Date()}
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