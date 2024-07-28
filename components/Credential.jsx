import Image from "next/image"
import Input from "./Input"

export default function Credential(){
    return(
        
        <div>
            <div className="mb-4">
                <Input type ="email" placeholder="Email" name="email"/>
            </div>
            
            <Input type ="password" placeholder="Password" name="password"/>
            
       </div>
        
    )
}