import { Link } from "react-router-dom";

export default function Cancel() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col justify-center items-center gap-4 h-screen">
        <div>
          <svg
            className="w-24 h-24 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Your payment has been cancelled!</h1>
        <p>
          Your order has been cancelled. Please try again or contact us if you
          need help.
        </p>
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
