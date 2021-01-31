from django import forms


class ContactForm(forms.Form):

    phone  = forms.CharField(widget=forms.TextInput(attrs={'size':122,'class':'form-control'}))

    email  = forms.EmailField(widget=forms.TextInput(attrs={'size':122,'class':'form-control'}))
#     #subject = forms.CharField(required=True ,widget=forms.TextInput(attrs={'size':122,'class':'form-control',}))
    comment  = forms.CharField(widget=forms.Textarea(attrs={'rows':15, 'cols':110}))
    next = forms.CharField(required=False, widget=forms.HiddenInput())

# class ContactForm(forms.Form):
#     email = forms.EmailField(
#                 label=_('Email'),
#                 widget=forms.TextInput(
#                     attrs={
#                         'placeholder': _('Your email address')
#                         }
#                     )
#                 )
#     phone = forms.CharField(
#                 label=_('Phone'),
#                 widget=forms.TextInput(
#                     attrs={
#                         'placeholder': _('+33...')
#                         }
#                     )
#                 )
#     comment = forms.CharField(
#                 label=_('Comment'),
#                 widget=forms.Textarea(
#                     attrs={
#                         'placeholder': _('Your message'),
#                         'rows': 8,
#                         'cols': 80
#                         }
#                     )
#                 )

#     next = forms.CharField(required=False, widget=forms.HiddenInput())
