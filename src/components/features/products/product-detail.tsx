import { useState } from "react";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const similarProducts = [
    {
      id: 1,
      name: "Nike Shoe",
      price: "36,900",
      oldPrice: "69,000",
      image: "/assets/products/product-1.png",
      store: "Prince G Shop",
    },
    {
      id: 2,
      name: "Blue Sneakers",
      price: "36,900",
      oldPrice: "69,000",
      image: "/assets/products/product-2.png",
      store: "Prince G Shop",
    },
    {
      id: 3,
      name: "White Trainers",
      price: "36,900",
      oldPrice: "69,000",
      image: "/assets/products/product-3.png",
      store: "Prince G Shop",
    },
    {
      id: 4,
      name: "Pink Runners",
      price: "36,900",
      oldPrice: "69,000",
      image: "/assets/products/product-4.png",
      store: "Prince G Shop",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-8 font-['Poppins']">
      {/* Product details grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: product images */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <img
            src="/assets/products/product-1.png"
            alt="Nike Shoe"
            className="rounded-xl border border-[#e7e7e9] h-[400pt] object-cover"
          />
          <div className="flex gap-3">
            {similarProducts.map(
              (product, i) => (
                <img
                  key={i}
                  src={product.image}
                  alt="Thumb"
                  className="w-16 h-16 rounded-lg border border-[#e7e7e9] object-cover cursor-pointer hover:border-[#1dbf73] transition"
                />
              )
            )}
          </div>
          <div className="flex justify-between items-center text-sm text-[#1f1f1f] mt-2">
            <p>
              Call store owner for enquiries:{" "}
              <span className="font-medium text-[#1dbf73]">
                08032454684
              </span>
            </p>
            <button className="text-[#6e6e6e] hover:text-[#1dbf73]">
              ♡ Save for later
            </button>
          </div>
        </div>

        {/* Center: product info */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-[#1f1f1f]">Nike Shoe</h1>
          <p className="text-sm text-[#4a4a4a]">
            Quality Blue color Nike shoe with a fancy Light blue printing
            indicator on the foot
          </p>
          <div className="text-sm text-[#6e6e6e]">
            <p>Product Code: 33309</p>
            <p>Category: Men Shoes</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#1dbf73]">₦36,900</p>
            <p className="line-through text-sm text-[#a0a0a0]">₦69,000</p>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <p className="text-sm text-[#6e6e6e]">Quantity:</p>
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 hover:bg-[#f5f5f5]"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 hover:bg-[#f5f5f5]"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3 mt-2">
            <button className="flex-1 h-11 bg-[#1dbf73] text-white rounded-md hover:bg-[#17a863] transition">
              Add to Cart
            </button>
            <button className="flex-1 h-11 bg-black text-white rounded-md hover:bg-[#333] transition">
              Proceed with Payment
            </button>
          </div>
        </div>

        {/* Right: delivery & seller info */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="border rounded-xl p-4 text-sm text-[#1f1f1f]">
            <h3 className="font-semibold mb-2">Delivery & Returns</h3>
            <ul className="list-disc list-inside text-[#4a4a4a] space-y-1">
              <li>Estimated delivery time: 1-9 business days</li>
              <li>Express delivery available</li>
              <li>Same-day delivery in some areas</li>
              <li>7-Day Return Policy</li>
              <li>Warranty info unavailable for this item</li>
            </ul>
          </div>

          <div className="border rounded-xl p-4 text-sm">
            <h3 className="font-semibold mb-2">Seller Information</h3>
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/avatar.png"
                alt="Seller"
                className="w-10 h-10 rounded-full object-cover border"
              />
              <div>
                <p className="text-sm font-medium">Prince G Shop</p>
                <p className="text-xs text-[#6e6e6e]">
                  Official store & good pricing
                </p>
              </div>
            </div>
            <p className="text-xs text-[#6e6e6e] mb-1">Number of Sales</p>
            <div className="w-full bg-[#f1f1f1] rounded-full h-2">
              <div className="bg-[#1dbf73] h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
            <p className="text-xs text-[#6e6e6e] mt-1">180.42K successful sales</p>
          </div>
        </div>
      </div>

      {/* Similar products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl overflow-hidden hover:shadow-md transition bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-[#1f1f1f] mb-1">
                  {product.name}
                </p>
                <p className="text-xs text-[#6e6e6e] mb-1">{product.store}</p>
                <p className="text-[#1dbf73] font-semibold">₦{product.price}</p>
                <p className="line-through text-xs text-[#a0a0a0]">
                  ₦{product.oldPrice}
                </p>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 h-9 border border-[#1f1f1f] text-xs rounded-md hover:bg-[#f5f5f5]">
                    Visit store
                  </button>
                  <button className="flex-1 h-9 bg-[#1dbf73] text-white text-xs rounded-md hover:bg-[#17a863]">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail