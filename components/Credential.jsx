"use client";
import Input from "./Input"

export default function Credential(){
    return(
        
        <div>
            <div className="mb-4">
                <div className="w-full">
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        autoComplete="new-password"
                        onChange={(e) => `${set}`(e.target.value)}
                        className="w-full max-w-md px-4 py-3 text-white border-none rounded-lg placeholder-gray bg-hover focus:outline-none focus:ring-none text-12px"
                        required
                    />
                </div>
            </div>
            <div>
                <div className="w-full">
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        autoComplete="new-password"
                        onChange={(e) => `${set}`(e.target.value)}
                        className="w-full max-w-md px-4 py-3 text-white border-none rounded-lg placeholder-gray bg-hover focus:outline-none focus:ring-none text-12px"
                        required
                    />
                </div>
            </div>
            
            
       </div>
        
    )
}