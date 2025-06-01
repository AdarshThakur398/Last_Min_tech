import { products } from "@/app/data/products";

type Props = {
  params: {
    id: string;
  };
};

export default function DescriptionPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return <div className="p-4 text-red-500">Product not found.</div>;
return (
  <div className="transform scale-[0.85] origin-top-left p-4 grid grid-cols-2 gap-4 max-w-6xl mx-auto mt-8">

    <div className="flex flex-row gap-3">
      <div className="flex flex-col gap-2">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            className="w-12 h-12 object-contain rounded-md border cursor-pointer hover:border-cyan-500"
          />
        ))}
      </div>
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-72 h-72 object-contain rounded-xl border"
      />
    </div>

    <div className="flex flex-col gap-2 text-sm">
      <h1 className="text-2xl font-bold">{product.name}</h1>

      <div className="text-sm text-gray-500 line-through">MRP ₹{product.mrp}</div>
      <div className="text-lg font-bold text-black">₹{product.price}</div>
      <div className="text-cyan-700 font-medium">{product.discount}</div>

      <div className="mt-2 flex items-center gap-2 text-gray-800 font-medium text-xs">
        <div className="text-center">
          <div className="text-lg font-bold">03</div>
          <div className="text-[10px] text-gray-500">hrs</div>
        </div>
        <div>:</div>
        <div className="text-center">
          <div className="text-lg font-bold">01</div>
          <div className="text-[10px] text-gray-500">min</div>
        </div>
        <div>:</div>
        <div className="text-center">
          <div className="text-lg font-bold">23</div>
          <div className="text-[10px] text-gray-500">sec</div>
        </div>
      </div>

      <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
        {"⭐".repeat(Math.round(product.rating))}
        <span className="text-gray-700 ml-2">{product.rating}</span>
        <span className="text-gray-500 ml-2">{product.reviews} Reviews</span>
      </div>

      <p className="text-gray-700 mt-1 text-xs">{product.description}</p>

      <div className="flex gap-2 mt-2">
        {product.weightOptions.map((weight) => (
          <button
            key={weight}
            className="px-3 py-0.5 border rounded-full text-xs bg-cyan-100 text-cyan-700 font-medium hover:bg-cyan-200"
          >
            {weight}
          </button>
        ))}
      </div>

    
      <div className="mt-4 flex items-center gap-2">
        <p className="font-bold text-base">Total: ₹{product.price}</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 rounded text-sm font-semibold">
          ADD TO CART
        </button>
        <button className="border p-2 rounded text-gray-600 hover:text-red-500 text-sm">♡</button>
      </div>
    </div>

    
   <div className="col-span-2 max-w-7xl mx-auto mt-6 border-t pt-4 text-sm sm:text-base leading-relaxed">
  <div className="flex gap-5 border-b pb-2 text-sm sm:text-base">
    <button className="bg-green-200 text-green-800 px-2 py-0.5 rounded font-medium">Key Info</button>
    <button className="text-gray-600 px-2 py-0.5 rounded font-medium hover:text-black">Info</button>
    <button className="text-gray-600 px-2 py-0.5 rounded font-medium hover:text-black">Nature's Basket</button>
    <button className="text-orange-500 border border-orange-300 px-2 py-0.5 rounded">Visit store</button>
  </div>

  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div>
      <div className="mb-2">
        <span className="font-semibold text-base">Type:</span> Pear
      </div>
      <div className="mb-2">
        <span className="font-semibold text-base">Unit:</span> 1 pcs (350g)
      </div>
      <div className="mb-2">
        <span className="font-semibold text-base">Description:</span> Discover the joy of pairing pear with cheese, creating a sophisticated appetizer that balances sweet and savory flavors beautifully.
      </div>
      <div className="mb-2">
        <span className="font-semibold text-base">Fssai License:</span> 1111222333444556
      </div>
    </div>
  </div>
</div>

  </div>
);

}
