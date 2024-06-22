import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { baseUrl } from "../config/config";
import useAuth from "../hooks/useAuth";

export default function CheckoutForm() {
  const data = useLoaderData();
  const { user } = useAuth();
  const token = localStorage.getItem("token");

  const [order, setOrder] = useState({
    name: "",
    email: user?.email,
    address: "",
    city: "",
    country: "",
    postalCode: "",
    p_name: data?.data?.name,
    p_price: data?.data?.price,
    p_id: data?.data?._id,
    p_image: data?.data?.image?.url,
  });

  const handleInput = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const makePayment = async () => {
    console.log(order);
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
    const response = await fetch(`${baseUrl}/pay/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ order }),
    });
    const session = await response.json();
    console.log(session);
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col-reverse md:flex-row justify-around gap-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold">Billing Details</h1>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 border border-gray-300"
              required
              onChange={handleInput}
              name="name"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300"
              onChange={handleInput}
              value={user?.email}
              readOnly
              name="email"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="p-2 border border-gray-300"
              onChange={handleInput}
              required
              name="address"
            />
            <input
              type="text"
              placeholder="City"
              className="p-2 border border-gray-300"
              onChange={handleInput}
              required
              name="city"
            />
            <input
              type="text"
              placeholder="Country"
              className="p-2 border border-gray-300"
              onChange={handleInput}
              required
              name="country"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="p-2 border border-gray-300"
              onChange={handleInput}
              required
              name="postalCode"
            />
            <button
              className="bg-blue-600 text-white p-2 rounded-md"
              onClick={makePayment}
            >
              Place Order
              <span className="ml-2">&#8594;</span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold">Order Summary</h1>
          <img
            src={data?.data?.image?.url}
            alt="dog"
            className="rounded-lg w-48"
          />
          <h2 className="text-3xl font-bold">{data?.data?.name}</h2>
          <p className="text-lg text-gray-500">
            <b className="text-blue-600">Price:</b> ${data?.data?.price}
          </p>
        </div>
      </div>
    </div>
  );
}
