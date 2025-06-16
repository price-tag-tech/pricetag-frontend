import React from 'react';
import { FiMessageSquare, FiMapPin, FiPhone, FiMessageCircle } from 'react-icons/fi';


interface ContactCardProps {
  icon: React.ReactNode; 
  title: string;
  description: string;
  contactText: string;
  contactLink: string;
  linkType: 'mailto' | 'tel' | 'href';
}


const contactData: ContactCardProps[] = [
  {
    icon: <FiMessageCircle size={24} className="text-gray-700" />,
    title: 'Chat to sales',
    description: 'Speak to our friendly team.',
    contactText: 'info@pricetag.ng',
    contactLink: 'info@pricetag.ng',
    linkType: 'mailto',
  },
  {
    icon: <FiMessageSquare size={24} className="text-gray-700" />, 
    title: 'Chat to support',
    description: 'We are here to help.',
    contactText: 'support@pricetag.ng',
    contactLink: 'support@pricetag.ng',
    linkType: 'mailto',
  },
  {
    icon: <FiMapPin size={24} className="text-gray-700" />,
    title: 'Visit us',
    description: 'Visit our office Head Quarter.',
    contactText: 'View on google map',
    contactLink: 'https://maps.google.com/price-tag', 
    linkType: 'href',
  },
  {
    icon: <FiPhone size={24} className="text-gray-700" />,
    title: 'Call us',
    description: 'Mon-Fri from 8am - 5pm.',
    contactText: '09037494084',
    contactLink: '09037494084', 
    linkType: 'tel',
  },
];


const Card: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  contactText,
  contactLink,
  linkType,
}) => {
  const href =
    linkType === 'mailto'
      ? `mailto:${contactLink}`
      : linkType === 'tel'
      ? `tel:${contactLink}`
      : contactLink;

  return (
    <div className="bg-slate-100 p-6 rounded-xl shadow-lg flex flex-col items-start w-full hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4 p-3 border border-gray-300 rounded-lg">
        {icon} 
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <a
        href={href}
        target={linkType === 'href' ? '_blank' : undefined}
        rel={linkType === 'href' ? 'noopener noreferrer' : undefined}
        className="text-sm text-gray-800 hover:text-blue-700 underline font-medium"
      >
        {contactText}
      </a>
    </div>
  );
};


const ExpertTalkSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Talk to our experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contactData.map((cardInfo) => (
            <Card
              key={cardInfo.title}
              icon={cardInfo.icon}
              title={cardInfo.title}
              description={cardInfo.description}
              contactText={cardInfo.contactText}
              contactLink={cardInfo.contactLink}
              linkType={cardInfo.linkType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTalkSection;