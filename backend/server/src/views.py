from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User, Group
from rest_framework import status, viewsets
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import UserSerializer, GroupSerializer, ProductSerializer

from .models import Product



class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]
    

    # https://testdriven.io/blog/drf-views-part-3/
    
    # @action(detail=True, methods=['post'])
    # def add_product(self, request, pk=None):


    # def create(self, request, *args, **kwargs):
    #     serializer = ProductSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save(serializer)
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     else:
    #         return Response(serializer.errors,
    #             status=status.HTTP_400_BAD_REQUEST)
    
    # def list(self, request):
    #     serializer = ProductSerializer(self.queryset, many=True)
    #     return Response(serializer.data)
    
    # def retrieve(self, request, pk):
    #     item = self.get_object()
    #     serializer = ProductSerializer(item)
    #     return Response(serializer.data)