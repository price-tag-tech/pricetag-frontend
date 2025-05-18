const fs = require('fs');
const path = require('path');

// List of all files I will need for now.
const files = [
  // Common Components
  'src/components/common/SearchBar.tsx',
  'src/components/common/FilterDropdown.tsx',
  'src/components/common/PriceRangeSlider.tsx',
  'src/components/common/StarRating.tsx',
  'src/components/common/Button.tsx',
  'src/components/common/Input.tsx',
  'src/components/common/Card.tsx',
  
  // Product Components
  'src/components/features/products/ProductCard.tsx',
  'src/components/features/products/ProductGrid.tsx',
  'src/components/features/products/ProductDetail.tsx',
  'src/components/features/products/AddProductForm.tsx',
  'src/components/features/products/EditProductForm.tsx',
  
  // Store Components
  'src/components/features/stores/StoreCard.tsx',
  'src/components/features/stores/StoreGrid.tsx',
  'src/components/features/stores/StoreDetail.tsx',
  'src/components/features/stores/AddStoreForm.tsx',
  'src/components/features/stores/EditStoreForm.tsx',
  
  // Onboarding Components
  'src/components/features/onboarding/OnboardingSteps.tsx',
  'src/components/features/onboarding/BusinessSetupForm.tsx',
  'src/components/features/onboarding/SubscriptionSelection.tsx',
  
  // Dashboard Widgets
  'src/components/features/dashboard/widgets/SalesOverview.tsx',
  'src/components/features/dashboard/widgets/RecentOrders.tsx',
  'src/components/features/dashboard/widgets/TopProducts.tsx',
  'src/components/features/dashboard/widgets/ReferralStats.tsx',
  'src/components/features/dashboard/widgets/StorePerformance.tsx',
  
  // Dashboard Components
  'src/components/features/dashboard/DashboardHome.tsx',
  'src/components/features/dashboard/StoreManagement.tsx',
  'src/components/features/dashboard/ProductManagement.tsx',
  'src/components/features/dashboard/ReferralDashboard.tsx',
  'src/components/features/dashboard/Analytics.tsx',
  'src/components/features/dashboard/Settings.tsx',
  
  // Communication Components
  'src/components/features/messaging/ChatInterface.tsx',
  'src/components/features/messaging/MessageList.tsx',
  'src/components/features/messaging/MessageInput.tsx',
  
  // Review Components
  'src/components/features/reviews/ReviewForm.tsx',
  'src/components/features/reviews/ReviewList.tsx',
  
  // Pages
  'src/pages/HomePage.tsx',
  'src/pages/LoginPage.tsx',
  'src/pages/RegisterPage.tsx',
  'src/pages/BusinessDashboard.tsx',
  'src/pages/StorefrontPage.tsx',
  'src/pages/ProductListingPage.tsx',
  'src/pages/NotFoundPage.tsx',
  'src/pages/SearchResultsPage.tsx',
  'src/pages/CategoryPage.tsx',
  'src/pages/CheckoutPage.tsx',
  'src/pages/SubscriptionPage.tsx',
  'src/pages/ReferralProgramPage.tsx',
  'src/pages/UserProfilePage.tsx',
  
  // Services
  'src/services/authService.ts',
  'src/services/productService.ts',
  'src/services/storeService.ts',
  'src/services/searchService.ts',
  'src/services/subscriptionService.ts',
  'src/services/referralService.ts',
  'src/services/reviewService.ts',
  'src/services/analyticsService.ts',
  'src/services/messageService.ts',
  
  // Contexts
  'src/contexts/AuthContext.tsx',
  'src/contexts/CartContext.tsx',
  'src/contexts/SearchContext.tsx',
  'src/contexts/NotificationContext.tsx',
  
  // Hooks
  'src/hooks/useLocalStorage.ts',
  'src/hooks/useDebounce.ts',
  'src/hooks/useMediaQuery.ts',
  'src/hooks/useOnClickOutside.ts',
  
  // Layout Components
  'src/components/layout/MainLayout.tsx',
  'src/components/layout/Header.tsx',
  'src/components/layout/Footer.tsx',
  
  // Types
  'src/types/index.ts'
];

// Template content generator based on file type and name
function getTemplateContent(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const isComponent = filePath.includes('components/') && filePath.endsWith('.tsx');
  const isPage = filePath.includes('pages/') && filePath.endsWith('.tsx');
  const isService = filePath.includes('services/') && filePath.endsWith('.ts');
  const isContext = filePath.includes('contexts/') && filePath.endsWith('.tsx');
  const isHook = filePath.includes('hooks/') && filePath.endsWith('.ts');
  
  if (isComponent) {
    return `import React from 'react';

interface ${fileName}Props {
  // Define your props here
}

const ${fileName}: React.FC<${fileName}Props> = (props) => {
  return (
    <div>
      {/* Implement this component based on your Figma design */}
      <p>${fileName} Component</p>
    </div>
  );
};

export default ${fileName};
`;
  } else if (isPage) {
    return `import React from 'react';

const ${fileName}: React.FC = () => {
  return (
    <div>
      {/* Implement this page based on your Figma design */}
      <p>${fileName}</p>
    </div>
  );
};

export default ${fileName};
`;
  } else if (isService) {
    return `import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Implement service methods based on your API
export const exampleMethod = async () => {
  // Implementation based on your API
};
`;
  } else if (isContext) {
    const contextName = fileName.replace('Context', '');
    return `import React, { createContext, useContext, useState } from 'react';

interface ${contextName}ContextType {
  // Define your context type here
}

export const ${fileName} = createContext<${contextName}ContextType | undefined>(undefined);

export const ${contextName}Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Implement your context provider
  
  return (
    <${fileName}.Provider value={{}}>
      {children}
    </${fileName}.Provider>
  );
};

export const use${contextName} = () => {
  const context = useContext(${fileName});
  if (context === undefined) {
    throw new Error('use${contextName} must be used within a ${contextName}Provider');
  }
  return context;
};
`;
  } else if (isHook) {
    return `import { useState, useEffect } from 'react';

export const ${fileName} = () => {
  // Implement your custom hook
};
`;
  } else if (filePath === 'src/types/index.ts') {
    return `// Define your TypeScript interfaces here

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'business' | 'customer' | 'referrer';
  subscriptionPlan?: string;
}

export interface Business {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  storeCount: number;
}

export interface Store {
  id: string;
  name: string;
  businessId: string;
  description?: string;
  category: string;
  location?: string;
  productCount: number;
}

export interface Product {
  id: string;
  storeId: string;
  name: string;
  description?: string;
  price: number;
  discountPrice?: number;
  category: string;
  inStock: boolean;
  imageUrl?: string;
}

// Add other interfaces as needed
`;
  } else {
    return `// ${filePath}\n// Implement based on your requirements\n`;
  }
}

// Create files with template content
files.forEach(filePath => {
  const dirPath = path.dirname(filePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
  
  // Create file with template content if it doesn't exist
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, getTemplateContent(filePath));
    console.log(`Created file: ${filePath}`);
  } else {
    console.log(`File already exists, skipping: ${filePath}`);
  }
});

console.log('File generation complete!');