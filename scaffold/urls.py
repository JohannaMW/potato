from django.conf.urls import patterns, include, url
from rest_framework import routers
from scaffold import settings
from django.conf.urls.static import static

import session_csrf
session_csrf.monkeypatch()

from django.contrib import admin
admin.autodiscover()

from potato_blog.api.views import PostViewSet

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet, base_name='posts')

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'scaffold.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'potato_blog.views.home', name='home'),
    url(r'^_ah/', include('djangae.urls')),

    #api
    url(r'^api/', include(router.urls)), # Include router urls into our urlpatterns
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),


    # Note that by default this is also locked down with login:admin in app.yaml
    url(r'^admin/', include(admin.site.urls)),
)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)