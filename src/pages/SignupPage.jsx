import React from 'react';
import SignupForm from '../components/sections/signup/SignupForm';

function SignupPage() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#2A7CC7] to-[#23A6F0] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Bandage</h1>
                    <p className="text-white/80">Create your account</p>
                </div>

            
                <SignupForm />
            </div>
        </div>
    );
}

export default SignupPage;