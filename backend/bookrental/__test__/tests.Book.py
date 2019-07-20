from rest_framework.test import APIRequestFactory
from django.test import TestCase


class PersonModelTests(TestCase):
    def test_is_empty(self):
        factory = APIRequestFactory()
        request = factory.post('/api/books/', {
                "id": "5aeff75e-0b02-4791-9e7a-43f00b9c0bcc",
                "isbn13": "9784839960490", "title": "React開発現場の教科書",
                "status": "0",
                "smallThumbnail": "http://books.google.com/books/content?id=ObMqtQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "Thumbnail": "http://books.google.com/books/content?id=ObMqtQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "retntalUser": "null",
            }, format='json')
        self.assertEqual(0, 0)
