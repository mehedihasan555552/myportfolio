from django.forms import ModelForm
from .models import *
from django import forms


class ContactForm(ModelForm):
  class Meta:
    model = Contact
    fields = ['name','email','message']
