from rest_framework import routers
from .views import BookViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'users', UserViewSet)
