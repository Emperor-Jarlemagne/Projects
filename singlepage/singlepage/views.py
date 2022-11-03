from django.http import Http404, HttpResponse
from django.shortcuts import render

#create views here
def index(request):
    return render(request, "singlepage/index.html")

texts = ["Today is a grand day for our insect overlords, may the meek truly inherit what is left of this pitiful place. Goodbye inheritance, may this orb go softly into the glactic night.",
            "Text 2", "Door # 3"]

def section(request, num):
    if 1 <= num <= 3:
        return HttpResponse(texts[num - 1])
    else:
        raise Http404("No Such Section")