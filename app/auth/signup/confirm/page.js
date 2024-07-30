"use client";

import {useState , useEffect } from 'react';
import Image from 'next/image'
import { CognitoUser } from 'amazon-cognito-identity-js';
import userPool from '@config/userPool';
import Link from 'next/link';
import { useRouter , useSearchParams } from 'next/navigation';
import Button from '@components/Button';
import axios from 'axios';


export default function Confirm(){

    const [code, setCode] = useState('');
    const router = useRouter();
    const [email, setEmail] = useState('');

  useEffect(() => {
    
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  
    
    const onSubmit = async (event) => {
        event.preventDefault();


        const user = new CognitoUser({
        Username: email,
        Pool: userPool,
        });

        user.confirmRegistration(code, true , async (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Call result: ' + result);
            try {
                
                const response = await axios.post('http://localhost:3500/api/users', { email, name: email });
                console.log('Response:', response);
        
                router.push('/auth/signin');
              } catch (error) {
                console.error('Error saving user to database', error);
              }
        }
        });
        
    };

    
    return(
        <div className="flex items-center justify-center h-screen bg-base">
        
      <div className="w-full max-w-sm">
        <div>
                <Image 
                    src="../../assets/images/logo.svg" 
                    alt="Dimen Logo" 
                    width={100} 
                    height={100} 
                    className="mx-auto mb-4" 
                />
            </div>
        <div>
            <h1 className="mb-2 text-2xl font-bold text-center text-white">Confirm your account</h1>
        </div>
        
        <div>
            <p className="mb-8 text-center text-12px text-gray">We have sent a code by email you registered with. Enter it below to confirm your account.
            </p>
        </div>
        
       
       <div>
        <form onSubmit={onSubmit} >
       
            <div className="mb-4">
                <div className="w-full">
                <input
                    type="code"
                    id="code"
                    placeholder='verfication code'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full max-w-md px-4 py-3 text-white border-none rounded-lg placeholder-gray bg-hover focus:outline-none focus:ring-none text-12px"
                    required
                    />
                </div>
            </div>
            
            <div className='mb-4'>
                <Button type="submit" text ="Confirm Account" />
            </div>
            
            
            </form>
        
            
       </div>

        
        <div className='mb-2'>
            
            <div className='flex justify-center gap-2 text-center'>
                <div>
                    <span className='text-gray text-12px'>Didn't receive a code?</span>
                    
                </div>   
                <div>
                    <Link href="/" className="text-theme1 text-12px">Send a new code
                    </Link>
                </div>
            </div>
            
        </div>
        
      </div>
    </div>
    );
}