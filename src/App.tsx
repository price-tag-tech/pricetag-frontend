import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Layout
import MainLayout from './components/layout/MainLayout';

// Import Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StorefrontPage from './pages/StorefrontPage';
import ProductListingPage from './pages/ProductListingPage';
import SearchResultsPage from './pages/SearchResultsPage';
import CategoryPage from './pages/CategoryPage';
import CheckoutPage from './pages/CheckoutPage';
import SubscriptionPage from './pages/SubscriptionPage';
import ReferralProgramPage from './pages/ReferralProgramPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import EmailVerification from './pages/EmailVerification';
import Stores from './pages/Stores';
import Affiliate from './pages/Affiliate';
import UserDashboard from './pages/dashboard/user/user-dashboard';
import DashboardLayout from './components/layout/dashboard/user-layout';
import OrdersAndPurchasesPage from './pages/dashboard/user/orders-and-purchases-page';
import NotificationsPage from './pages/dashboard/user/notifications-page';
import AffiliatePage from './pages/dashboard/affiliate';
import AffiliateWithdrawalPage from './pages/dashboard/affiliate/affiliate-withdrawal-page';
import ProfilePage from './pages/dashboard/profile';
import PasswordEdit from './pages/dashboard/profile/password-edit';
import ProfileLayout from './components/layout/dashboard/profile-layout';
import SocialProfiles from './pages/dashboard/profile/social-profiles';
import BankSettings from './pages/dashboard/profile/bank-settings';
import ContactUsPage from './pages/ContactUsPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import BusinessDashboard from './pages/dashboard/business/business-dashboard';
import BusinessLayout from './components/layout/dashboard/business-layout';
import ProductAndServicesPage from './pages/dashboard/business/products-and-services-page';
import OrdersPage from './pages/dashboard/business/orders-page';
import InventoryPage from './pages/dashboard/business/inventory-page';
import UploadProductPage from './pages/dashboard/business/upload-product-page';
import UploadSuccess from './pages/dashboard/business/upload-success';
import AddService from './pages/dashboard/business/add-service';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Public routes */}
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductListingPage />} />
          <Route path="products/search" element={<SearchResultsPage />} />
          <Route path="category/:categoryId" element={<CategoryPage />} />
          <Route path="store/:storeId" element={<StorefrontPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="subscription" element={<SubscriptionPage />} />
          <Route path="referral" element={<ReferralProgramPage />} />
          <Route path="profile" element={<UserProfilePage />} />
          <Route path="stores" element={<Stores />} />
          <Route path="become-agent" element={<Affiliate />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="terms-conditions" element={<TermsAndConditionsPage />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Dashboard routes */}
        <Route path="user">
          <Route element={<DashboardLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="orders-and-purchases" element={<OrdersAndPurchasesPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="affiliate">
              <Route index element={<AffiliatePage />} />
              <Route path="withdraw" element={<AffiliateWithdrawalPage />} />
            </Route>
            <Route path="profile" element={<ProfileLayout />}>
              <Route index element={<ProfilePage />} />
              <Route path="password" element={<PasswordEdit />} />
              <Route path="social-profiles" element={<SocialProfiles />} />
              <Route path="bank-settings" element={<BankSettings />} />
            </Route>
          </Route>
        </Route>
        <Route path="business">
          <Route element={<BusinessLayout />}>
            <Route index element={<BusinessDashboard />} />
            <Route path="products">
              <Route index element={<ProductAndServicesPage />} />
              <Route path='upload' element={<UploadProductPage />} />
              <Route path="upload-success" element={<UploadSuccess />} />
            </Route>
            <Route path="services">
              <Route path="add" element={<AddService />} />
            </Route>
            <Route path="orders" element={<OrdersPage />} />
            <Route path="inventory" element={<InventoryPage />} />
          </Route>
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="verification" element={<EmailVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
