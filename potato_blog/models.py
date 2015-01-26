from django.db import models
from scaffold import settings
from django.db import models


class Comment(models.Model):
    body = models.TextField(blank=True, null=True)
    title = models.CharField(max_length=120, blank=True, null=True)

    def __unicode__(self):
        return u"{}".format(self.text)


class Post(models.Model):
    created = models.DateField(auto_now_add=True)
    title = models.CharField(max_length=120)
    category = models.CharField(max_length=120)
    body = models.TextField()
    author = models.CharField(max_length=200)
    comment = models.ForeignKey(Comment, related_name='post', blank=True, null=True)

    def __unicode__(self):
        return u"{}".format(self.title)