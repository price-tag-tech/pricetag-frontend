import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Layout
import MainLayout from './components/layout/MainLayout';

// Import Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BusinessDashboard from './pages/BusinessDashboard';
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
import UserDashboard from './pages/dashboard/user-dashboard.tsx';
import DashboardLayout from './components/layout/dashboard/dashboard-layout';
import OrdersAndPurchasesPage from './pages/dashboard/orders-and-purchases-page';
import NotificationsPage from './pages/dashboard/notifications-page';
import AffiliatePage from './pages/dashboard/affiliate';
import AffiliateWithdrawalPage from './pages/dashboard/affiliate/affiliate-withdrawal-page';
import ProfilePage from './pages/dashboard/profile';
import PasswordEdit from './pages/dashboard/profile/password-edit';
import ProfileLayout from './components/layout/dashboard/profile-layout';
import SocialProfiles from './pages/dashboard/profile/social-profiles';
import BankSettings from './pages/dashboard/profile/bank-settings';

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

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Dashboard routes */}
        <Route element={<DashboardLayout />}>
          <Route path="dashboard/*" element={<BusinessDashboard />} />
          <Route path="user">
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

        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="verification" element={<EmailVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
