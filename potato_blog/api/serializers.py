from rest_framework import serializers
from potato_blog.models import Author, Post, Comment, Category

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category


class PostSerializer(serializers.ModelSerializer):
    comment = CommentSerializer()
    author = AuthorSerializer()
    category = CategorySerializer()

    class Meta:
        model = Post