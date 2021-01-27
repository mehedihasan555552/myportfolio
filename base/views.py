from django.shortcuts import render


from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import *
from django.contrib import messages



from django.conf import settings
from django.contrib import messages
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import BadHeaderError, EmailMessage
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm
from django.utils.translation import ugettext as _
from django.template.loader import render_to_string

# Create your views here.
def index(request):
    form = ContactForm(request.POST or None)
    if form.is_valid():
        email = form.cleaned_data['email']
        phone = form.cleaned_data['phone']
        comment = form.cleaned_data['comment']
        next = form.cleaned_data['next']

        site = get_current_site(request)

        tpl = getattr(settings, 'CONTACTFORM_MSG_TEMPLATE', 'contactform/message.txt'),
        message = render_to_string(tpl, {
            'site': site,
            'email': email,
            'phone': phone,
            'comment': comment})

        recipients = settings.CONTACTFORM_RECIPIENTS
        try:
            email = EmailMessage(
                    getattr(settings, 'CONTACTFORM_SUBJECT', _('New message')),
                    message,
                    getattr(settings, 'CONTACTFORM_FROM_EMAIL', settings.DEFAULT_FROM_EMAIL),
                    recipients,
                    reply_to=[email])
            email.send(fail_silently=False)
        except BadHeaderError:
             return HttpResponse('Invalid header found.')


        messages.success(request, _('Your message has been sent.'), extra_tags='contactform')

        if next != '':
            return redirect(next)

        use_thanks_page = getattr(settings, 'CONTACTFORM_USE_THANKS_PAGE', True)
        if use_thanks_page:
            #messages.success(request,'Success! Thank you for your message. ')

            return redirect('index')
    return render(request,'base/index.html', {'form': form})


# def contactView(request):
#     if request.method == 'GET':
#         form = ContactForm()
#     else:
#         form = ContactForm(request.POST)
#         if form.is_valid():
#             subject = form.cleaned_data['subject']
#             from_email = form.cleaned_data['from_email']
#             message = form.cleaned_data['message']
#             try:
#                 send_mail(subject, message, from_email, ['admin@example.com'])
#             except BadHeaderError:
#                 return HttpResponse('Invalid header found.')
#             return redirect('success')
#     return render(request, "base/index.html", {'form': form})

def successView(request):
    return HttpResponse('Success! Thank you for your message.')
