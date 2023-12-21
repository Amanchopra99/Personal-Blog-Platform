# blog/admin.py
from django import forms
from django.contrib import admin
from .models import Post

class PostAdminForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = '__all__'

class PostAdmin(admin.ModelAdmin):
    form = PostAdminForm
    class Media:
        js = ('js/admin.js',)
