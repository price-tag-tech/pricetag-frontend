export interface Plan {
  acronym: string;
  name: string;
  description: string;
  price: string;
  priceSuffix: string;
  features: string[];
  isHighlighted: boolean; 
  buttonText: string;
}


export const pricingPlans: Plan[] = [
  {
    acronym: 'SSP',
    name: 'Starter Spark Plan',
    description: 'Business owners looking to test the platform\'s features before upgrading.',
    price: 'Free',
    priceSuffix: '',
    features: [
      '1 Business Store',
      '5 Product/Service Listings per Business',
      'No Business Listing', 
      'Basic Analytics',
      '100MB Storage Capacity',
    ],
    isHighlighted: true,
    buttonText: 'Subscribe',
  },
  {
    acronym: 'GBP',
    name: 'Growth Booster Plan',
    description: 'Businesses taking their first step into online selling and brand visibility.',
    price: '₦10,000',
    priceSuffix: '/year',
    features: [
      '2 Business Stores',
      '15 Product/Service Listings per Business',
      'Organic Business Listing',
      'Basic Analytics',
      '300MB Storage Capacity',
      '24/7 Chat Support',
    ],
    isHighlighted: false,
    buttonText: 'Subscribe',
  },
  {
    acronym: 'SAP',
    name: 'Sales Accelerator Plan',
    description: 'Businesses that require multiple storefronts and better analytics to scale operations.',
    price: '₦20,000',
    priceSuffix: '/year',
    features: [
      '6 Business Stores',
      '30 Product/Service Listings per Business',
      'Partial Business Listing',
      'Standard Analytics',
      '500MB Storage Capacity',
      'Featured Stores',
    ],
    isHighlighted: false,
    buttonText: 'Subscribe',
  },
   {
    acronym: 'MDP',
    name: 'Market Dominator Plan',
    description: 'Businesses that want premium exposure and advanced data-driven decision making tools.',
    price: '₦30,000',
    priceSuffix: '/year',
    features: [
      '10 Business Stores',
      '45 Product/Service Listings per Business',
      'Business Listed Before Top', 
      'Advanced Analytics',
      '750MB Storage Capacity',
      'Top Searches Promotion',
    ],
    isHighlighted: false,
    buttonText: 'Subscribe',
  },
  {
    acronym: 'UBAP',
    name: 'Ultimate Brand Authority Plan',
    description: 'High-growth businesses and established brands looking for maximum visibility and market dominance.',
    price: '₦40,000',
    priceSuffix: '/year',
    features: [
      '20 Business Stores',
      '60 Product/Service Listings per Business',
      'Top Business Listing',
      'Premium Analytics',
      '1.5GB Storage Capacity',
      'Under Other Option Ads',
    ],
    isHighlighted: false,
    buttonText: 'Subscribe',
  },
];