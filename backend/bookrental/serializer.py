from rest_framework import serializers

from .models import Book, User
from rest_framework.serializers import SerializerMethodField
from django_filters import rest_framework as filters


class UserFilter(filters.FilterSet):
#     print("arai")
#     # email = filters.CharFilter(name="email", lookup_expr='contains')
#     password = filters.CharFilter(name="password", lookup_expr='contains')
#     print("bb")

    class Meta:
        model = User
#         # フィルタを列挙する。
#         # デフォルトの検索方法でいいなら、モデルフィールド名のフィルタを直接定義できる。
        fields = ['email', 'password']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ('id', 'fullName', 'email', 'password')
        fields = ('__all__')
        # extra_kwargs = {
        #   'id': {
        #     'read_only': False
        #   }
        # }


class BookSerializer(serializers.ModelSerializer):
    #user = UserSerializer(read_only=True)
    # retntalUser = serializers.PrimaryKeyRelatedField(queryset=User.objects.get(id=), required=True)
    UserData = SerializerMethodField()

    class Meta:
        model = Book
        fields = ('id', 'isbn13', 'title', 'status', 'smallThumbnail',
                  'Thumbnail', 'retntalUser', 'UserData')

    def get_UserData(self, obj):
         try:
            user_data = UserSerializer(User.objects.all().filter(id=obj.retntalUser.id), many=True).data
            return user_data
         except:
            user_data = None
            return user_data

    # def create(self, validated_date):
    #     validated_date['retntalUser'] = validated_date.get('user_uid', None)

    #     if validated_date['retntalUser'] is None:
    #         raise serializers.ValidationError("user not found.")

    #     del validated_date['user_uid']

    #     return Book.objects.create(**validated_date)

        # extra_kwargs = {
        #    'id': {
        #      'read_only': False
        #    }
        #  }
