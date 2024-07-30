"use client";

import Button from '@components/Button';
import Logo from '@components/Logo';
import Google from '@components/Google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import userPool from '@config/userPool';
import { CognitoUser , AuthenticationDetails } from 'amazon-cognito-identity-js';
import axios from 'axios';


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
    
        const user = new CognitoUser({
          Username: email,
          Pool: userPool,
        });
    
        const authDetails = new AuthenticationDetails({
          Username: email,
          Password: password,
        });
    
        user.authenticateUser(authDetails, {
          onSuccess: async (data) => {
            console.log("On Success: ", data);
            
            
            try {
              const response = await fetch(`http://localhost:3500/api/userId?email=${email}`);

              
              const result = await response.json();
              
              
              document.cookie = `userId=${result.userId}; path=/`;
              const userId = sessionStorage.getItem('userId');
              console.log(userId);

              
              router.push('http://localhost:3001/dashboard');
            } catch (error) {
              console.error("Error fetching user ID: ", error);
            }
          },
    
          onFailure: (err) => {
            console.error("On Failure: ", err);
          },
    
          newPasswordRequired: (data) => {
            console.log("New Password Required: ", data);
          }
        });
        
    
        
       
        
      };
    
    
        
    
    
  return (
    <div className="flex items-center justify-center h-screen bg-base">
        
      <div className="w-full max-w-sm">
        
        <Logo/>
        <div>
            <p className="mb-8 text-center text-gray">Login with your email or Google account.</p>
        </div>
        
        <div>
            <Google />
        </div>
       <div>
       <form onSubmit={onSubmit} >
       
            <div className="mb-4">
                <div className="w-full">
                    <input
                        type="email"
                        placeholder= "Email"
                        value={email}
                        autoComplete="new-password"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full max-w-md px-4 py-3 text-white border-none rounded-lg placeholder-gray bg-hover focus:outline-none focus:ring-none text-12px"
                        required
                    />
                </div>
            </div>
            <div>
                <div className="w-full">
                    <input
                        type="password"
                        placeholder= "Password"
                        value={password}
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full max-w-md px-4 py-3 text-white border-none rounded-lg placeholder-gray bg-hover focus:outline-none focus:ring-none text-12px"
                        required
                    />
                </div>
            </div>
            <Link 
                href="./" 
                className='font-semibold text-gray text-10px'
            >
                
                forgot password?
            </Link>
            <div className='mb-4'>
                <Button type="submit" text ="Login into your account" />
            </div>
            
       
       </form>
            
            
            
       </div>

        
        <div className='mb-2'>
            
            
            <div className='flex justify-center gap-2 text-center'>
                <div>
                    <span className='text-gray text-12px'>Need an account?</span>
                    
                </div>   
                <div>
                    <Link href="./signup" className="text-theme1 text-12px">Sign Up
                    </Link>
                </div>
            </div>
            
        </div>
        {/* <div className='text-center '>
            <span className='text-gray text-10px '>By clicking <span className='text-theme1'>"Create account"</span>  or <span className='text-theme1'>"Continue with Google"</span>, you agree to the Dimen TOS and Privacy Policy.
            </span>
        </div> */}
      </div>
    </div>
  );
}


