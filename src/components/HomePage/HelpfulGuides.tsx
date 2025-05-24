import React from 'react';


interface GuideItemData {
  id: string;
  imageUrl: string;
  altText: string;
  description: string;
  
}


const sampleGuides: GuideItemData[] = [
  {
    id: '1',
    imageUrl: 'face.jpg',
    altText: 'Guide on using a smartwatch effectively.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    imageUrl: '',
    altText: 'Guide on understanding mobile analytics.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    imageUrl: '',
    altText: 'Guide on boosting productivity with a laptop.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '4',
    imageUrl: '',
    altText: 'Guide on immersive VR experiences.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const HelpfulGuides: React.FC = () => {
  

  return (
    <div className="bg-white py-12 md:py-16 font-['Poppins']"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8 md:mb-12">
          Helpful guides to boost your growth
        </h2>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {sampleGuides.map((guide) => (
            <div
              key={guide.id}
              className="flex flex-col" 

            >
              <img
                src={guide.imageUrl}
                alt={guide.altText}
                className="w-full h-auto aspect-[4/3] object-cover rounded-md shadow-sm"
              />
              <p className="mt-3 text-sm text-gray-600">
                {guide.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpfulGuides;