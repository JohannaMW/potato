from rest_framework import viewsets
from potato_blog.api.serializers import PostSerializer
from potato_blog.models import Post

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
