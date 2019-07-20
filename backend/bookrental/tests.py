# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# from django.test import TestCase

# Create your tests here.

from django.test import TestCase

from rest_framework.test import APIClient


class PersonModelTests(TestCase):
    def test_is_empty(self):
        client = APIClient()
        response = client.post('/api/books/', {
                "id": "5aeff75e-0b02-4791-9e7a-43f00b9c0bcc",
                "isbn13": "9784839960490", "title": "React開発現場の",
                "status": "0",
                "smallThumbnail": "http://books.google.com/books/content?id=ObMqtQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "Thumbnail": "http://books.google.com/books/content?id=ObMqtQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            },
            format='json')
        print(response.status_code)
        assert response.status_code == 201
        # response = client.get('/api/books/5aeff75e-0b02-4791-9e7a-43f00b9c0bcc/')
        response = self.client.get('/api/books/')
        print(response.data)


    #     response = client.put(
    #         '/api/books/5aeff75e-0b02-4791-9e7a-43f00b9c0bcc/',
    #         {
    #                "isbn13": "9784839960490",
    # "title": "React開発現場の教科書",
    # "status": "0",
    # "smallThumbnail": "http://books.google.com/books/content?id=ObMqtQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    # "Thumbnail": "http://books.google.com/books/content?id=ObMqtQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
 
    #             },
    #         format='json')
    #     print(response.status_code)
    #     assert response.status_code == 201
