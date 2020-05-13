from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from micro_logistics_app.models import *
from micro_logistics_app.serializers import *


class RegisterView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = NewUserSerializer


class DogView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = DogSerializer
