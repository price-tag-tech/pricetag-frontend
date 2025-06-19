import React from 'react';


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
    icon: <svg width="22" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.66797 8.33333C6.66797 7.8731 7.04107 7.5 7.5013 7.5H12.5013C12.9615 7.5 13.3346 7.8731 13.3346 8.33333C13.3346 8.79357 12.9615 9.16667 12.5013 9.16667H7.5013C7.04107 9.16667 6.66797 8.79357 6.66797 8.33333Z" fill="#1F1F1F"/>
          <path d="M7.5013 10.8333C7.04107 10.8333 6.66797 11.2064 6.66797 11.6667C6.66797 12.1269 7.04107 12.5 7.5013 12.5H10.8346C11.2949 12.5 11.668 12.1269 11.668 11.6667C11.668 11.2064 11.2949 10.8333 10.8346 10.8333H7.5013Z" fill="#1F1F1F"/>
          <path d="M1.6741e-05 10C1.6741e-05 4.47715 4.47718 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C8.17732 20 6.46648 19.5117 4.99363 18.6583L1.09688 19.9572C0.803617 20.055 0.480334 19.9823 0.257034 19.7687C0.0337502 19.5548 -0.0528334 19.235 0.0320832 18.9377L1.2181 14.7867C0.441333 13.3643 1.6741e-05 11.7326 1.6741e-05 10ZM10 1.66667C5.39765 1.66667 1.66668 5.39763 1.66668 10C1.66668 11.5551 2.09188 13.0084 2.83188 14.2528C2.9492 14.45 2.97995 14.687 2.9169 14.9077L2.06865 17.8765L4.8323 16.9553C5.06998 16.876 5.33072 16.908 5.54227 17.0422C6.8309 17.8598 8.35888 18.3333 10 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 10C18.3333 5.39763 14.6023 1.66667 10 1.66667Z" fill="#1F1F1F"/>
          </svg>,
    title: 'Chat to sales',
    description: 'Speak to our friendly team.',
    contactText: 'info@pricetag.ng',
    contactLink: 'info@pricetag.ng',
    linkType: 'mailto',
  },
  {
    icon: <svg width="22" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 16.1894V20L4.515 19.0802L9.277 16.1894H14C15.103 16.1894 16 15.2818 16 14.1657V6.07102C16 4.95497 15.103 4.04735 14 4.04735H2C0.897 4.04735 0 4.95497 0 6.07102V14.1657C0 15.2818 0.897 16.1894 2 16.1894H3ZM2 6.07102H14V14.1657H8.723L5 16.4262V14.1657H2V6.07102Z" fill="#1F1F1F"/>
          <path d="M18 0H6C4.897 0 4 0.907619 4 2.02368H16C17.103 2.02368 18 2.9313 18 4.04735V12.1421C19.103 12.1421 20 11.2344 20 10.1184V2.02368C20 0.907619 19.103 0 18 0Z" fill="#1F1F1F"/>
          </svg>,
    title: 'Chat to support',
    description: 'We are here to help.',
    contactText: 'support@pricetag.ng',
    contactLink: 'support@pricetag.ng',
    linkType: 'mailto',
  },
  {
    icon: <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 14.6865C13.0711 14.6865 14.75 13.0153 14.75 10.9537C14.75 8.89218 13.0711 7.22095 11 7.22095C8.92893 7.22095 7.25 8.89218 7.25 10.9537C7.25 13.0153 8.92893 14.6865 11 14.6865Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.0712 17.9926L12.7675 23.272C12.2987 23.7382 11.6632 24 11.0006 24C10.338 24 9.70252 23.7382 9.23375 23.272L3.92875 17.9926C2.53028 16.6005 1.57792 14.8268 1.19211 12.8959C0.806304 10.965 1.00437 8.96358 1.76126 7.14473C2.51815 5.32588 3.79987 3.77129 5.44435 2.67754C7.08883 1.58379 9.02221 1 11 1C12.9778 1 14.9112 1.58379 16.5556 2.67754C18.2001 3.77129 19.4819 5.32588 20.2387 7.14473C20.9956 8.96358 21.1937 10.965 20.8079 12.8959C20.4221 14.8268 19.4697 16.6005 18.0712 17.9926Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>,
    title: 'Visit us',
    description: 'Visit our office Head Quarter.',
    contactText: 'View on google map',
    contactLink: 'https://maps.google.com/price-tag', 
    linkType: 'href',
  },
  {
    icon: <svg width="22" height="25" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.9803 7.54236C1.61286 5.07844 3.32236 2.85991 5.93589 2.04684C6.89841 1.74741 7.92389 2.26131 8.27693 3.22007L9.11489 5.49513C9.39062 6.24393 9.19192 7.08803 8.61262 7.62856L6.12051 9.95378C5.87091 10.1867 5.76014 10.5373 5.82801 10.8747L5.85019 10.9772C5.86397 11.0384 5.88422 11.1249 5.9115 11.2331C5.96616 11.4495 6.04936 11.7536 6.16573 12.1157C6.39739 12.8361 6.76672 13.8049 7.31624 14.7731C7.86576 15.7413 8.50599 16.551 9.00345 17.1153C9.25353 17.3989 9.47092 17.6242 9.62768 17.7805C9.70616 17.8587 9.76978 17.9198 9.815 17.9626L9.89232 18.0344C10.1457 18.2629 10.4984 18.3395 10.8214 18.2361L14.0471 17.2033C14.797 16.9633 15.615 17.2103 16.1146 17.8276L17.6407 19.7132C18.2758 20.4981 18.2012 21.6501 17.4703 22.3434C15.4705 24.2399 12.7211 24.6283 10.8072 23.0641C8.96219 21.556 6.79082 19.3151 4.97694 16.1433C3.15883 12.964 2.33567 9.92544 1.9803 7.54236ZM7.84773 11.0037L9.91594 9.07394C11.0745 7.99288 11.472 6.30465 10.9205 4.80706L10.0825 2.532C9.37201 0.602837 7.30872 -0.4312 5.37201 0.171301C2.1277 1.18059 -0.47728 4.13988 0.0739821 7.83656C0.458962 10.4181 1.3494 13.7006 3.31031 17.1294C5.26326 20.5444 7.60401 22.962 9.59953 24.5929C12.4675 26.9371 16.298 26.1365 18.785 23.7779C20.2611 22.378 20.4119 20.0516 19.1293 18.4667L17.6032 16.5811C16.6039 15.3464 14.9679 14.8524 13.4682 15.3325L10.7911 16.1896C10.6882 16.082 10.5689 15.9533 10.4388 15.8057C9.99894 15.3069 9.44875 14.6077 8.986 13.7924C8.52335 12.9772 8.20318 12.1429 7.99832 11.506C7.93777 11.3177 7.88783 11.1482 7.84773 11.0037Z" fill="#1F1F1F"/>
          </svg>,
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