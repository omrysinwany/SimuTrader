from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StockViewSet, TransactionViewSet, StockList, RegisterView, LoginView, UserProfileView, WatchlistViewSet

router = DefaultRouter()
router.register(r'stocks', StockViewSet)
# router.register(r'users', UserProfileView)
router.register(r'transactions', TransactionViewSet)
router.register(r'watchlist', WatchlistViewSet, basename='watchlist')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/stocklist/', StockList.as_view(), name='stock-list'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('stocks/')
]
