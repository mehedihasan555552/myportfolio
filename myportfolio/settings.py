"""
Django settings for myportfolio project.

Generated by 'django-admin startproject' using Django 3.0.6.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'c7_8kttp@y=__wjezz#ru7_cxb65$u4jlop6h#-m-5#5%-7r+!'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['mehedi555552.pythonanywhere.com','*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'base',
    'crispy_forms',

     'contactform',



]

CONTACTFORM_RECIPIENTS = ['mehedihasan555552@gmail.com']

CRISPY_TEMPLATE_PACK = 'bootstrap4'

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',

    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'myportfolio.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'myportfolio.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

X_FRAME_OPTIONS = 'SAMEORIGIN'

# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/


STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATIC_URL = '/static/'

MEDIA_URL = '/images/'

STATICFILES_DIRS =[
   os.path.join(BASE_DIR,'static')
]

MEDIA_ROOT= os.path.join(BASE_DIR,'static/images')


# #SMTP Configuration
# EMAIL_BACKEND = 'sendgrid_backend.SendgridBackend'
# SENDGRID_API_KEY = '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'
# SENDGRID_SANDBOX_MODE_IN_DEBUG=False


#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

# # config/settings.py
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend' # new
# EMAIL_HOST = 'smtp.sendgrid.net' # new
# DEFAULT_FROM_EMAIL = 'mehedihasan555552@gmail.com'
# EMAIL_HOST_USER = 'apikey' # new
# EMAIL_HOST_PASSWORD = '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' # new
# EMAIL_PORT = 587 # new
# EMAIL_USE_TLS = True # new


# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
# EMAIL_HOST = 'smtp.gmail.com'
# EMAIL_USE_TLS = True
# EMAIL_PORT = 587
# EMAIL_HOST_USER = 'micelhussy0@gmail.com'
# EMAIL_HOST_PASSWORD = 'mehedi55555'


EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
ACCOUNT_ACTIVATION_DAYS=7
EMAIL_HOST='smtp.gmail.com'
EMAIL_USE_TLS=1
EMAIL_PORT=587
EMAIL_HOST_USER='micelhussy0@gmail.com'
EMAIL_HOST_PASSWORD='mehedi55555'
