from django.contrib import admin

# Register your models here.
from django.contrib import admin
from test_app.models import Question, Choice
admin.site.register(Question)
admin.site.register(Choice)
