from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Video
from .serializers import VideoSerializer
from django.contrib.auth.models import User

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all().order_by('-uploaded_at')
    serializer_class = VideoSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=True, methods=['post'])
    def like(self, request, pk=None):
        video = self.get_object()
        video.likes.add(request.user)
        return Response({'status': 'liked'})

    @action(detail=True, methods=['post'])
    def watchlater(self, request, pk=None):
        video = self.get_object()
        video.watch_later.add(request.user)
        return Response({'status': 'added to watch later'})
