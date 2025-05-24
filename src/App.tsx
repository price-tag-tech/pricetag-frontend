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
          
          {/* Dashboard routes */}
          <Route path="dashboard/*" element={<BusinessDashboard />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="verification" element={<EmailVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
