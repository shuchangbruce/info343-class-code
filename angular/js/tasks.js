/* 
    script for the tasks.html file 
*/

angular.module('Tasks', [])
    .constant('taskKey', 'tasks')
    .controller('TasksController', function($scope, taskKey) {
        'use strict';

        //intialize tasks property on the scope to an empty array
        $scope.tasks = angular.fromJson(localStorage.getItem(taskKey)) || [];
        //initialize newTask to an empty objecet
        $scope.newTask = {};

        function saveTasks() {
            localStorage.setItem(taskKey, angular.toJson($scope.tasks));
        }

        //add a function to add newTask to the array
        $scope.addTask = function() {
            //push
            $scope.tasks.push($scope.newTask);
            saveTasks();
            $scope.newTask = {};
        };

        //function to toggle task donw
        $scope.toggleDone = function(task) {
            task.done = !task.done;
            saveTasks();
        }
    });

