from django.shortcuts import render,redirect
from django.contrib import messages
from . models import *
from . forms import *


# Create your views here.
def index(request):
    return render(request,'base/index.html')



def Contact(request):
    form = ContactForm()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
            messages.success(request,'Your Message Has been sent.')
    context = {'form':form}
    return render(request,'base/contact.html',context)
