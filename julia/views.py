from django.shortcuts import render
# from julia.templates import mainpage
from julia import source
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
# Create your views here.


@csrf_exempt


def request_access(request):
    print('gone after this')
    if request.method == 'POST':
        print("hii")
        l = request.POST['data']
        print(l)
        viseme = source.viseme_index(l)
        print(viseme)
        return JsonResponse({'viseme': viseme})  # render(request,'mainpage.html',context={'viseme': viseme})
    return render(request, 'mainpage.html')
