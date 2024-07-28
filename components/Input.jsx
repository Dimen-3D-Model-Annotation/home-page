export default function Input({type, placeholder , name}){
    return (
        <div className="w-full">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                autoComplete="new-password"
                className="w-full max-w-md px-4 py-3 text-white border-none rounded-lg placeholder-gray bg-hover focus:outline-none focus:ring-none text-12px"
            />
        </div>

      );

}