# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import uuid as uuid_lib


class User(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid_lib.uuid4, editable=False)
    fullName = models.CharField(max_length=100)
    email = models.EmailField(null=True, unique=True)
    password = models.CharField(max_length=20)

    # def __str__(self):
    #     return self.user

    def __repr__(self):
        # 主キーとnameを表示させて見やすくする
        return "{}".format(self.fullName)

    __str__ = __repr__  # __str__にも同じ関数を適用


class Book(models.Model):
    STATUS_RETURN = "0"
    STATUS_LEND = "1"
    STATUS_SET = (
        (STATUS_RETURN, "返却"),
        (STATUS_LEND, "貸出"),
    )
    id = models.UUIDField(
        primary_key=True, default=uuid_lib.uuid4, editable=False)
    isbn13 = models.CharField(max_length=13)
    title = models.TextField()
    status = models.CharField(
        choices=STATUS_SET, default=STATUS_RETURN, max_length=1)
    smallThumbnail = models.TextField()
    Thumbnail = models.TextField()
    retntalUser = models.ForeignKey(
        User, related_name='books', on_delete=models.SET_NULL, null=True)
