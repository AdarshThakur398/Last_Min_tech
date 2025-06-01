import Image from "next/image";
import Link from "next/link";

type CardProps = {
    name: string;
    id:string;
}

export default function Card({name,id}:CardProps) {
      const sanitizedName = name.toLowerCase().replace(/\s+/g, '-');
    return (
       <Link href={`/description/${id}`}>
      <div className="w-64 rounded-2xl border border-cyan-200 p-4 shadow-sm">
      <div className="relative">
        <div className="bg-cyan-50 rounded-xl p-4 flex justify-center items-center">
          
          <Image
  src={`/${sanitizedName}.png`}
  alt="jc"
  width={100}
  height={100}
/>

        </div>
        <button className="absolute right-2 bottom-2 border border-cyan-300 text-cyan-500 px-3 py-1 text-sm rounded-md font-semibold">
          ADD
        </button>
      </div>

      <div className="mt-4 space-y-1">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-500">(100% Natural & Farm Fresh)</p>
        <p className="text-sm text-gray-700 mt-1">100 g</p>
        <p className="text-sm text-gray-600">
          By <span className="text-cyan-700 font-medium">Nature&apos;s basket</span>
        </p>

        <div className="flex gap-2 mt-2 text-center justify-start text-sm text-gray-800">
          <div>
            <div className="font-bold">0 3</div>
            <div className="text-xs text-gray-400">hours</div>
          </div>
          <div>:</div>
          <div>
            <div className="font-bold">0 1</div>
            <div className="text-xs text-gray-400">minutes</div>
          </div>
          <div>:</div>
          <div>
            <div className="font-bold">2 3</div>
            <div className="text-xs text-gray-400">second</div>
          </div>
        </div>
        
        <p className="text-sm text-cyan-700 font-semibold mt-2">20% OFF</p>

        <div className="text-sm mt-1">
          <span className="text-gray-400 line-through mr-1">MRP ₹165</span>
          <span className="text-black font-bold">₹100</span>
        </div>
      </div>
    </div>
     </Link>
    );

}