from django.urls import path,include
from . import views

from .views import successView

urlpatterns = [
    path('', views.index, name='index'),
    # path('contact/', contactView, name='contact'),
    path('success/', successView, name='success'),
    


    ]
