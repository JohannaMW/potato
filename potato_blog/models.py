from django.db import models
from scaffold import settings
from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=120)
    bio = models.TextField()

    def __unicode__(self):
        return u"{}".format(self.name)


class Category(models.Model):
    name = models.CharField(max_length=120)


class Comment(models.Model):
    body = models.TextField(blank=True, null=True)
    title = models.CharField(max_length=120, blank=True, null=True)

    def __unicode__(self):
        return u"{}".format(self.text)


class Post(models.Model):
    created = models.DateField(auto_now_add=True)
    title = models.CharField(max_length=120)
    category = models.ForeignKey(Category, related_name='post')
    body = models.TextField()
    author = models.ForeignKey(Author, related_name='post')
    comment = models.ForeignKey(Comment, related_name='post', blank=True, null=True)

    def __unicode__(self):
        return u"{}".format(self.title)