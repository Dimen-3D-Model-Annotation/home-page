import Image from "next/image"

export default function Logo(){
    return(
        <div>
        <div>
            <Image 
                src="../assets/images/logo.svg" 
                alt="Dimen Logo" 
                width={100} 
                height={100} 
                className="mx-auto mb-4" 
            />
        </div>
        <div>
            <h1 className="mb-2 text-2xl font-bold text-center text-white">Welcome to Dimen</h1>
        </div>
        </div>
    )
}