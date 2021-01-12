from django import forms


class ContactForm(forms.Form):
    Your_Email = forms.EmailField(required=True ,widget=forms.TextInput(attrs={'size':122,'class':'form-control'}))
    subject = forms.CharField(required=True ,widget=forms.TextInput(attrs={'size':122,'class':'form-control',}))
    message = forms.CharField(widget=forms.Textarea(attrs={'rows':15, 'cols':110}))