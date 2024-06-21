import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function AllOrders() {
  const { data } = useLoaderData();
  return (
    <div className="">
      {data?.length === 0 && <LoadingSpinner />}
      <h1 className="text-4xl  mb-10 font-bold">All Orders</h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                c Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                P Name
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order) => (
              <tr className="bg-white border-b" key={order?._id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {order?.name}
                </th>
                <td className="px-6 py-4">{order?.email}</td>
                <td className="px-6 py-4">{order?.address}</td>
                <td className="px-6 py-4">{order?.p_price}</td>
                <td className="px-6 py-4">{order?.p_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
