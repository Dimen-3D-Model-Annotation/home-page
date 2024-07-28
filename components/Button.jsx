export default function Button({text , type}) {
  return (
    <button type={type} className="w-full px-4 py-4 mt-4 font-semibold border rounded-lg text-12px text-gray bg-hover hover:bg-base border-gray">
             {text}
    </button>
  )
}

