from django.urls import path

#from .views import ArticleListView, ArticleDetailView, ArticleCreateView, ArticleUpdateView, ArticleDeleteView


# urlpatterns = [
#    path('', ArticleListView.as_view()),
#    path('create/', ArticleCreateView.as_view()),
#    path('<pk>', ArticleDetailView.as_view()),
#    path('<pk>/update/', ArticleDetailView.as_view()),
#    path('<pk>/delete/', ArticleDetailView.as_view()),
#]  # URLs for pages


from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, base_name='articles')
urlpatterns = router.urls

