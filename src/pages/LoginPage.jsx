import React from 'react';
import LoginForm from '../components/sections/login/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          

          <div className="hidden lg:block">
            <div className="relative">
        
              <div className="absolute inset-0 pointer-events-none overflow-visible">
            
                <div 
                  className="absolute rounded-full bg-[#FFE9EA]"
                  style={{
                    width: '484px',
                    height: '484px',
                    left: '58.4px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 1,
                    zIndex: 0
                  }}
                ></div>

                <div 
                  className="absolute rounded-full bg-[#FFE9EA]"
                  style={{
                    width: '77.39px',
                    height: '77.39px',
                    top: '11.96px',
                    left: '0px',
                    opacity: 1,
                    zIndex: 1
                  }}
                ></div>

                <div 
                  className="absolute rounded-full bg-[#FFE9EA]"
                  style={{
                    width: '30.25px',
                    height: '30.25px',
                    top: '247.66px',
                    left: '554.42px',
                    opacity: 1,
                    zIndex: 1
                  }}
                ></div>


                <div 
                  className="absolute rounded-full bg-[#977DF4]"
                  style={{
                    width: '18px',
                    height: '18px',
                    top: '10%',
                    right: '5%',
                    zIndex: 2
                  }}
                ></div>

                <div 
                  className="absolute rounded-full bg-[#977DF4]"
                  style={{
                    width: '15px',
                    height: '15px',
                    top: '55%',
                    left: '0%',
                    zIndex: 2
                  }}
                ></div>
              </div>

    
              <div className="relative z-10 text-center lg:text-left">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Welcome to <br />
                  <span className="text-blue-600">Bandage</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Sign in to access your personalized shopping experience
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Fast & Secure Checkout</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Track Your Orders</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Exclusive Deals & Offers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex justify-center lg:justify-end">
            <LoginForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;