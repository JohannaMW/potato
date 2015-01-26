potato_blog.directive('button', function() {
    return {
        restrict: 'E',
        compile: function(element, attributes) {
            element.addClass('btn btn-default');
            if (attributes.type == 'submit') {
                element.addClass('btn btn-default');
            }
            if (attributes.size) {
                element.addClass('btn-' + attributes.size);
            }
        }
    }
});