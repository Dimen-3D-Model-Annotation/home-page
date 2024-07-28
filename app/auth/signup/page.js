
import Button from '@components/Button';
import Input from '@components/Input';
import Logo from '@components/Logo';
import Google from '@components/Google';
import Image from 'next/image';
import Link from 'next/link';
import Credential from '@components/Credential';

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen bg-base">
        
      <div className="w-full max-w-sm">
        
        <Logo/>
        <div>
            <p className="mb-8 text-center text-gray">Register with your email or Google account.</p>
        </div>
        
        <div>
            <Google />
        </div>
       <div>
            <Credential/>
            
       </div>

        
        <div className='mb-2'>
            <div className='mb-4'>
                <Button type="submit" text ="Create Account" />
            </div>
            
            <div className='flex justify-center gap-2 text-center'>
                <div>
                    <span className='text-gray text-12px'>Already have an account?</span>
                    
                </div>   
                <div>
                    <Link href="./signin" className="text-theme1 text-12px">Sign In
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


