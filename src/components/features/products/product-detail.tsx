import { HeartIcon, PhoneIcon, RefreshCcw, ShieldCheck, TruckIcon, Twitter } from "lucide-react";
import { useState } from "react";
import Button from "../../common/Button";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaWhatsapp } from 'react-icons/fa'
import { IconType } from "react-icons";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const WhatsappIcon = FaWhatsapp as IconType

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
    <div className="w-full px-4 sm:px-8 md:px-16 py-8">
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
          <div className=" mt-2">
            <p className="text-gray-500">
              Call store owner for enquiries:{" "}
              <span className="font-medium text-[#1dbf73]">
                08032454684
              </span>
            </p>
            <div className="flex gap-3">
              <div className="flex items-center gap-2">
                <HeartIcon className="h-7 w-7" />
                Save for later
              </div>

              <div className="p-3 rounded-xl border shadow">
                <Twitter className="h-7 w-7" />
              </div>
              <div className="p-3 rounded-xl border shadow">
                <PhoneIcon className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>

        {/* Center: product info */}
        <div className="lg:col-span-3 flex flex-col gap-4 ">
          <h1 className="text-2xl font-semibold text-[#1f1f1f]">
            Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot
          </h1>
          <div className="text-md grid gap-2 text-[#6e6e6e]">
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
            <Button variant="outline">
              Add to Cart
            </Button>
            <Button variant="secondary">
              Proceed with Payment
            </Button>
          </div>
        </div>
        {/* Center: product info */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-4 md:flex gap-3 md:flex-col items-center">
            {similarProducts.map(
              (product, i) => (
                <img
                  key={i}
                  src={product.image}
                  alt="Thumb"
                  className="w-20 md:w-36 h-20 md:h-36 rounded-2xl border border-[#e7e7e9] object-cover cursor-pointer hover:border-[#1dbf73] transition"
                />
              )
            )}
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="border rounded-xl p-4 px-6 md:px-10 text-sm text-[#1f1f1f] grid gap-4">
            <h3 className="font-semibold mb-2 text-2xl">Delivery & Returns</h3>
            <div className="flex flex-col gap-y-3">
              <div>
                <div className="flex items-center gap-3 my-2">
                  <span className="text-brand-600">
                    <TruckIcon />
                  </span>
                  <h5 className="text-lg font-semibold">Delivery</h5>
                </div>
                <ul className="list-none list-inside text-[#4a4a4a] space-y-3">
                  <li>Estimated delivery time: 1-9 business days</li>
                  <li>Express Delivery Available</li>
                  <li>
                    <b>For Same-Day-Delivery:</b>
                    {' '}Please place your order before 11AM
                  </li>
                  <li>
                    <b>Next-Day-Delivery:</b>
                    {' '}Orders placed after 11AM will be delivered the next day
                  </li>
                  <li>
                    <b>Note:</b>
                    {' '} Availability may vary by location
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 my-2">
                  <span className="text-brand-600">
                    <RefreshCcw />
                  </span>
                  <h5 className="text-lg font-semibold">Return Policy</h5>
                </div>

                <ul className="list-none list-inside text-[#4a4a4a] space-y-3">
                  <li>Guaranteed 7-Day Return Policy</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 my-2">
                  <span className="text-brand-600">
                    <ShieldCheck />
                  </span>
                  <h5 className="text-lg font-semibold">Warranty</h5>
                </div>

                <ul className="list-none list-inside text-[#4a4a4a] space-y-3">
                  <li>Warranty information unavailable for this item</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-4 text-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold mb-2">Seller Information</h3>
              <Button size="sm" variant="outline" className="p-2 text-xs">
                Visit Store
              </Button>

            </div>
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/assets/users/avatar-1.jpg"
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

            <div className="mt-2">
              <h3 className="text-md font-semibold mb-1">Number of Sales</h3>
              <div className="flex items-center gap-2 w-full">
                <div className="flex flex-col w-full md:w-1/2">
                  <h5 className="font-bold text-xl">
                    180.42K
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Successful sales
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <h4 className="font-light mb-2">
                    delivery rate
                  </h4>
                  <ProgressBar completed={80} height='20px' bgColor='#1DBF73' labelSize='13px' labelAlignment='left' customLabelStyles={{ paddingLeft: "20px" }} className='text-sm' />
                </div>


              </div>
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
                  <Button variant="outline">
                    Visit store
                  </Button>
                  <Button variant="secondary">
                    Add to cart
                  </Button>
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