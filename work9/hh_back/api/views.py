from rest_framework import serializers
from .models import Company, Vacancy
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


# Serializer using serializers.Serializer
class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=500)
    city = serializers.CharField(max_length=100)
    address = serializers.CharField(max_length=200)

class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=500)
    salary = serializers.DecimalField(max_digits=10, decimal_places=2)

# Serializer using serializers.ModelSerializer
class CompanyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']

class VacancyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary']


class CompanyListAPIView(APIView):
  def get(self, request):
    name = request.GET.get('name')
    if name:
      companies = Company.objects.filter(name__icontains=name)
    else:
      companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)


class CompanyDetailAPIView(APIView):
  def get(self, request, id):
    try:
      company = Company.objects.get(pk=id)
      serializer = CompanyModelSerializer(company)
      return Response(serializer.data)
    except Company.DoesNotExist:
      return Response({'error': 'Company does not exist'}, status=status.HTTP_404_NOT_FOUND)


class CompanyVacanciesAPIView(APIView):
  def get(self, request, id):
    try:
      company = Company.objects.get(pk=id)
      vacancies = company.vacancies.all()
      serializer = VacancySerializer(vacancies, many=True)
      return Response(serializer.data)
    except Company.DoesNotExist:
      return Response({'error': 'Company does not exist'}, status=status.HTTP_404_NOT_FOUND)


class VacancyListAPIView(APIView):
  def get(self, request):
    id = request.GET.get('id')
    if id:
      try:
        vacancy = Vacancy.objects.get(pk=id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
      except Vacancy.DoesNotExist:
        return Response({'error': 'Vacancy does not exist'}, status=status.HTTP_404_NOT_FOUND)
    else:
      vacancies = Vacancy.objects.all()
      serializer = VacancySerializer(vacancies, many=True)
      return Response(serializer.data)


class VacancyDetailAPIView(APIView):
  def get(self, request, id):
    try:
      vacancy = Vacancy.objects.get(pk=id)
      serializer = VacancyModelSerializer(vacancy)
      return Response(serializer.data)
    except Vacancy.DoesNotExist:
      return Response({'error': 'Vacancy does not exist'}, status=status.HTTP_404_NOT_FOUND)


class TopTenVacanciesAPIView(APIView):
  def get(self, request):
    top_ten_vacancies = Vacancy.objects.all()[:10]
    serializer = VacancyModelSerializer(top_ten_vacancies, many=True)
    return Response(serializer.data)
