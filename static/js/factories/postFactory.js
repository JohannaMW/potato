potato_blog.factory('PostFactory', function($http) {
    return {
        getPosts: function(callback) {
            $http.get('/api/posts/' )
                .success(function(response) {
                    callback(response);
                }).error(function(error) {
                    console.log(error);
                });
        },
        deletePost: function (post, callback) {
            $http.delete('/api/posts/' + post.id)
                .success(function(response) {
                    callback(response);
                }).error(function(error) {
                    console.log(error);
                });
        },
        editPost: function (post, data, callback) {
            $http.put('/api/posts/' + post.id, data)
                .success(function (response) {
                    callback(response);
                }).error(function (error) {
                    console.log(error);
                });
        },
        createPost: function (data, callback) {
            $http.post('/api/posts/', data)
                .success(function(response) {
                    callback(response);
                }).error(function(error) {
                    console.log(error)
                });
        }
    }
});