# -*- coding: utf-8 -*-
# from __future__ import unicode_literals

# from django.shortcuts import render

# Create your views here.

# from rest_framework import filters
from rest_framework import viewsets

from .models import Book, User
from .serializer import BookSerializer
from .serializer import UserSerializer
from .serializer import UserFilter


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    # filter_backends = (filters.OrderingFilter,)
    # ordering_fields = ('title')


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_class = UserFilter
