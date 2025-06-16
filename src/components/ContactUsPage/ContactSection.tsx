import React, { useState } from 'react';
import Button from '../common/Button';
import contactSideImage from '../../assets/images/banner.svg'; 


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  issues: string;
}


const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  issues: '',
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData(initialFormData); 
  };

  return (
     <div className="bg-white pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl xl:max-w-5xl w-full space-y-8 md:space-y-0 md:flex md:space-x-20 items-stretch">
        {/* Left Column: Image */}
        <div className="hidden md:flex md:w-1/2 w-full items-center">
          <img
            src={contactSideImage}
            alt="Contact image" 
            className="w-full h-auto md:h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column: Form */}
        <div className="md:w-1/2 w-full flex flex-col p-4 md:p-0 md:pt-24">
          <h2 className="text-3xl font-bold text-gray-900">
            Get In touch
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            24/7 We will answer your questions and problems
          </p>

           <form onSubmit={handleSubmit} className="mt-8 space-y-2">
            <div className="flex flex-col sm:flex-row sm:space-x-4"> 
              {/* First Name */}
              <div className="w-full sm:w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1"> 
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              {/* Last Name */}
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0"> 
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1"> 
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> 
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1"> 
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            {/* Describe your issues */}
            <div>
              <label htmlFor="issues" className="block text-sm font-medium text-gray-700 mb-1"> 
                Describe your issues
              </label>
              <textarea
                id="issues"
                name="issues"
                rows={5}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={formData.issues}
                onChange={handleChange}
              />
            </div>
            
            {/* Send Button */}  
            <div>
              <Button
                type="submit"
                variant="secondary" 
                size="md"           
                fullWidth={true}    
                className="mt-6"
              >
                Send
              </Button>
            </div> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;