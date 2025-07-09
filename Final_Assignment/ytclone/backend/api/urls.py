from django.urls import path, include
from .views import register_user, login_user
from rest_framework.routers import DefaultRouter
from .views import VideoViewSet

router = DefaultRouter()
router.register(r'videos', VideoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/register/', register_user),
    path('auth/login/', login_user),
]
