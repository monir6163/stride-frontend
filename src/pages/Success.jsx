import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col justify-center items-center gap-4 h-screen">
        <div>
          <svg
            className="w-24 h-24 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Thank you for your order!</h1>
        <p>Your order is being processed and will be shipped soon.</p>
        <Link
          to="/"
          className="text-blue-500 text-xl font-bold rounded bg-white p-3 underline"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
