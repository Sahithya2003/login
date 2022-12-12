
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import HttpResponse, render

from students.models import Student

# Create your views here.


@csrf_exempt
def student(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        student = Student(email=email, password=password)
        student.save()

    return render(request, 'index.html')
