# from django.shortcuts import render,redirect
# from django.contrib import messages
# from . models import *
# from . forms import *


# # Create your views here.
# def index(request):
#     form = ContactForm()
#     if request.method == 'POST':
#         form = ContactForm(request.POST)
#         if form.is_valid():
#             form.save()
#             messages.success(request,'Your Message Has been sent.')
#             return redirect('index')

#     context = {'form':form}
#     return render(request,'base/index.html',context)




