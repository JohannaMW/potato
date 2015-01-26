from rest_framework import serializers
from potato_blog.models import Post, Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment


class PostSerializer(serializers.ModelSerializer):
    comment = CommentSerializer(required=False, read_only=True)

    class Meta:
        model = Post