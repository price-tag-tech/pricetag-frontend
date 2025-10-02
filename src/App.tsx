import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Layout
import MainLayout from './components/layout/MainLayout';
import DashboardLayout from './components/layout/user/user-layout';
import AdminLayout from './components/layout/admin/admin-layout';
import BusinessLayout from './components/layout/business/business-layout';
import ProfileLayout from './components/layout/profile-layout';

// Import Pages
// public pages
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
import ContactUsPage from './pages/ContactUsPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PricingPage from './pages/PricingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// user dashboard
import UserDashboard from './pages/dashboard/user/user-dashboard';
import OrdersAndPurchasesPage from './pages/dashboard/user/orders-and-purchases-page';
import NotificationsPage from './pages/dashboard/user/notifications-page';
import AffiliatePage from './pages/dashboard/affiliate';
import AffiliateWithdrawalPage from './pages/dashboard/affiliate/affiliate-withdrawal-page';
import ProfilePage from './pages/dashboard/profile';
import PasswordEdit from './pages/dashboard/profile/password-edit';
import SocialProfiles from './pages/dashboard/profile/social-profiles';
import BankSettings from './pages/dashboard/profile/bank-settings';
import UserStores from './pages/dashboard/user/stores';

// business dashboard
import ProductAndServicesPage from './pages/dashboard/business/products-and-services-page';
import OrdersPage from './pages/dashboard/business/orders-page';
import InventoryPage from './pages/dashboard/business/inventory-page';
import UploadProductPage from './pages/dashboard/business/upload-product-page';
import AddStorePage from './pages/dashboard/business/add-store-page';
import AddServicePage from './pages/dashboard/business/add-service-page';
import SuccessPage from './pages/dashboard/business/success-page';
import BusinessDashboard from './pages/dashboard/business/business-dashboard';

// admin dashboard
import UsersManagementPage from './pages/dashboard/admin/users-managment';
import AdminManagement from './pages/dashboard/admin/admin-management';
import BroadcastCentre from './pages/dashboard/admin/broadcast-centre';
import NewBroadcast from './pages/dashboard/admin/new-broadcast';
import PlatformSettings from './pages/dashboard/admin/platform-settings';
import ActivityLogs from './pages/dashboard/admin/activity-logs';
import ReportsAnalytics from './pages/dashboard/admin/report-and-analytics';
import SuperAdminDashboard from './pages/dashboard/admin/superadmin-dashboard';
// user registration admin
import NewUsersRequest from './pages/dashboard/admin/new-users-requests';
import ProfileViewPage from './pages/dashboard/admin/profile-view-page';
import PendingKYCsPage from './pages/dashboard/admin/pending-kycs-page';
import SingleKycReviewPage from './pages/dashboard/admin/single-kyc-review';
import BusinessVerificationPage from './pages/dashboard/admin/business-verification-page';
import BusinessVerificationListPage from './pages/dashboard/admin/business-verification-list';
import EmailsAndReminders from './pages/dashboard/admin/email-and-reminders';
import SingleReminder from './pages/dashboard/admin/single-reminder';
import NewReminderPage from './pages/dashboard/admin/send-reminder-page';
// support admin
import SupportTickets from './pages/dashboard/admin/support-tickets';
import SingleTicketPage from './pages/dashboard/admin/single-ticket-page';
import Messages from './pages/dashboard/admin/messages';
import MessageThread from './pages/dashboard/admin/message-thread';
import ReviewsPage from './pages/dashboard/admin/reviews';
import SatisfactionReportsPage from './pages/dashboard/admin/satisfaction-report';
// finance admin
import PayoutRequests from './pages/dashboard/admin/payouts-request';
import SinglePayoutRequest from './pages/dashboard/admin/single-payout';
import AffiliateManagement from './pages/dashboard/admin/affiliate-management';
import SingleAffiliate from './pages/dashboard/admin/single-affiliate';
import RevenueOverview from './pages/dashboard/admin/revenue-overview';
import ExpensesManagement from './pages/dashboard/admin/expenses-management';
import PaymentGateways from './pages/dashboard/admin/payment-gateways';
import { ToastContainer } from 'react-toastify';

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
          <Route path="pricing" element={<PricingPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Dashboard routes */}
        <Route path="user">
          <Route element={<DashboardLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="stores" element={<UserStores />} />
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
            </Route>
            <Route path="services">
              <Route path="add" element={<AddServicePage />} />
            </Route>
            <Route path="store">
              <Route path="add" element={<AddStorePage />} />
            </Route>
            <Route path="orders" element={<OrdersPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="success" element={<SuccessPage />} />
          </Route>
        </Route>

        <Route path="admin">
          <Route element={<AdminLayout />}>
            {/* super admin routes */}
            <Route index element={<SuperAdminDashboard />} />
            <Route path='users' element={<UsersManagementPage />} />
            <Route path="user/:id" element={<ProfileViewPage />} />
            <Route path='admins' element={<AdminManagement />} />
            <Route path='broadcast' element={<BroadcastCentre />} />
            <Route path='broadcast/new' element={<NewBroadcast />} />
            <Route path='logs' element={<ActivityLogs />} />
            <Route path='reports' element={<ReportsAnalytics />} />

            {/* settings group */}
            <Route path="settings">
              <Route path="platform" element={<PlatformSettings />} />
            </Route>

            {/* new-user-registration admin routes */}
            <Route path="users/requests" element={<NewUsersRequest />} />
            <Route path='kycs' element={<PendingKYCsPage />} />
            <Route path='kyc/:id' element={<SingleKycReviewPage />} />
            <Route path="businesses" element={<BusinessVerificationListPage />} />
            <Route path="businesses/:id" element={<BusinessVerificationPage />} />
            <Route path="reminders" element={<EmailsAndReminders />} />
            <Route path="reminder/new" element={<NewReminderPage />} />
            <Route path="reminder/:id" element={<SingleReminder />} />

            {/* support admin routes */}
            <Route path="tickets" element={<SupportTickets />} />
            <Route path="ticket/:id" element={<SingleTicketPage />} />
            <Route path="messages" element={<Messages />} />
            <Route path="message/:id" element={<MessageThread />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="satisfaction" element={<SatisfactionReportsPage />} />

            {/* finance admin routes */}
            <Route path="payouts" element={<PayoutRequests />} />
            <Route path="payout/:id" element={<SinglePayoutRequest />} />
            <Route path="affiliate" element={<AffiliateManagement />} />
            <Route path="affiliate/:id" element={<SingleAffiliate />} />
            <Route path="revenue" element={<RevenueOverview />} />
            <Route path="expenses" element={<ExpensesManagement />} />
            <Route path="gateways" element={<PaymentGateways />} />
          </Route>
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="verification" element={<EmailVerification />} />
      </Routes>

      <ToastContainer />
    </Router>
  );
}

export default App;

// comment to trigger git tracking