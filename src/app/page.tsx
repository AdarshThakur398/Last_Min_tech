
import Card from "@/app/components/Card";

export default function Home() {
  const products = [
    { name: "Fresh Pear", id:"djk"},
    {name: "Apple",id:"ksfb"},
    {name:"Mango",id:"kjfb"},


  ];

  return (
    <main className="min-h-screen p-10 bg-white ">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          <Card key={product.id} name={product.name} id={product.id} />
        ))}
      </div>
    </main>
  );
}
