function homeController($scope, PostFactory, $location){
    $scope.editing = false;
    $scope.more = false;
    $scope.recent = true;
    $scope.category = false;
    var currentPost;

    PostFactory.getPosts(function(response) {
        $scope.posts = response;
        console.log(response);
    });

    $scope.categories = [
        { label: 'Economy', value: 'Economy' },
        { label: 'Travel', value: 'Travel' },
        { label: 'Tech', value: 'Tech' },
        { label: 'Food', value: 'Food' },
        { label: 'Entertainment', value: 'Entertainment' }
    ];

    $scope.showMore = function(post) {
        $scope.currentPost = post;
        if ($scope.more === true) {
            $scope.more = false;
        } else {
            $scope.more = true
        }
    };

    $scope.createPost = function() {
        var data = {
            "title": $scope.postTitle,
            "author": $scope.postAuthor,
            "body": $scope.postBody,
            "category": $scope.postCategory.value
        };
        PostFactory.createPost(data, function(response) {
            $scope.tasks.push(response);
            $location.path('/')
        });
    };

    $scope.editingPost = function(post) {
        currentPost = post;
        $scope.post = post;
        if ($scope.editing === true) {
                $scope.editing = false;
        } else {
            $scope.editing = true
        }
    };

    $scope.editPost = function() {
        console.log(currentPost);
        var data = {
            "title": $scope.newPostTitle,
            "author": $scope.newPostAuthor,
            "body": $scope.newPostBody,
            "category": $scope.newPostCategory.value
        };
        PostFactory.editPost(currentPost, data, function(response) {
            $location.path('/')
        });
    };

    $scope.deletePost = function(post) {
        PostFactory.deletePost(post, function (response) {
            var index = $scope.posts.indexOf(post);
            $scope.posts.splice(index, 1);
            $location.path('/')
        })
    };

    $scope.showCategory = function(category) {
        $scope.selectedCategory = category;
        $scope.recent = false;
        $scope.category = true;
    }
}