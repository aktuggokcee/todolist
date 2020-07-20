var app=angular.module("ToDoApp" , []);
app.controller("ToDoController" , function($scope)
{
    $scope.todos=[
        {"ad": "Begüm","isDone" :false},
        {"ad": "Esra","isDone" :false},
        {"ad": "Duygu","isDone" :false},
        {"ad": "Tolga","isDone" :false}
    ];
    $scope.NewToDo=function(){
        $scope.todos.push(
            {
                "ad":$scope.todo,
                "isDone":false,

            }
        );
        $scope.todo="";
    }
    $scope.DeleteTodos=function()
        {
            $scope.todos=$scope.todos.filter(function(item)
                {
                    return item.isDone;
                }
            );
        }
    
});