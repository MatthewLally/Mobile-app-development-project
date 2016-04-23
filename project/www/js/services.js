angular.module('starter.services', [])

.factory('Task', function() { //sets up a factory called task
    var data = { //creates a variable named data
        tasks: [
            {title: "Buy Milk", added : new Date()} //data to be added to tasks
            ,{title : "Feed Dog", added : new Date()}
        ]
    };
    
    function addTask(title){
        data.tasks.push({title : title, added : new Date()}); //function for adding more tasks
    }
    
    return { //returns data 
        data : data
        , addTask : addTask
    }
})

.factory('Task2', function(){ //sets up the second factory
    var data2 = { //creates second variable
        tasks2: [
            {title : "Attend meeting", added : new Date()} //data to be added
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