function homeController($scope, PostFactory, $location){
    $scope.editing = false;
    var currentPost;

    PostFactory.getPosts(function(response) {
        $scope.posts = response.posts;
        console.log(response.posts);
    });

    $http.get('/api/categories/')
        .success(function(response) {
            console.log(response);
            $scope.categories = response;
        }).error(function(error) {
            console.log(error);
      });

    $scope.createPost = function() {
        var data = {
            "title": $scope.newTaskTitle,
            "due": $scope.newTaskDue,
            "description": $scope.newTaskDescription,
            "owner": userId
        };
        TaskFactory.createTask(data, function(response) {
            $scope.tasks.push(response);
            $location.path('/')
        });
    };

    $scope.editingTask = function(task) {
        currentTask = task;
        if ($scope.editing === true) {
                $scope.editing = false;
        } else {
            $scope.editing = true
        }
    };

    $scope.editTask = function() {
        var data = {
            "title": $scope.taskTitle,
            "due": $scope.taskDue,
            "description": $scope.taskDescription,
            "owner": userId
        };
        TaskFactory.editTask(currentTask, data, function(response) {
            $location.path('/')
        });
    };

    $scope.deleteTask = function(task) {
        TaskFactory.deleteTask(task, function (response) {
            var index = $scope.tasks.indexOf(task);
            $scope.tasks.splice(index, 1);
            $location.path('/')
        })
    }
}