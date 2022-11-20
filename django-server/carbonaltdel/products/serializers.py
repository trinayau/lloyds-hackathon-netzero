from rest_framework import serializers
from .models import Category, Product
from django.db.models import Min

class ProductSerializer(serializers.ModelSerializer):
    emission_calculated = serializers.SerializerMethodField('_emission_calculated')

    def _emission_calculated(self, product_object):
        weight = getattr(product_object, "weight")
        if weight:
            return weight * product_object.offset

    class Meta:
        model = Product
        fields = ['id', 'category', 'name', 'supplier', 'slug', 'price', 'weight', 'offset', 'date_added','emission_calculated']

class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    minimum_product_price = serializers.SerializerMethodField('_minimum_product_price')
    minimum_offset_price = serializers.SerializerMethodField('_minimum_offset_price')

    def _minimum_product_price(self, category_object):
        return category_object.products.aggregate(Min('price'))['price__min']

    def _minimum_offset_price(self, category_object):
        return category_object.products.aggregate(Min('offset'))['offset__min']
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'description','image_url','products', 'minimum_product_price', 'minimum_offset_price')

