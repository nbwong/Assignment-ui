import React from "react";
import OrderDetails from "./OrderDetails";
import { formatDate, formatDateTime } from "../service/DataFormatterService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

const OrdersTable = ({
  orders,
  expandedOrderId,
  setExpandedOrderId,
  handleAccept,
  handleReject,
  isLoading,
}) => {
  const handleRowClick = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full divide-y-2 divide-blue-200">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider rounded-tl-lg"
            >
              <span className="sr-only">Expand</span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider"
            >
              Account
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider"
            >
              Operation
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider"
            >
              Symbol
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider hidden md:table-cell"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider hidden md:table-cell"
            >
              Qty
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider hidden md:table-cell"
            >
              Filled Qty
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider hidden md:table-cell"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider hidden md:table-cell"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider hidden md:table-cell"
            >
              Expiration
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider hidden md:table-cell"
            >
              No. Ref.
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider rounded-tr-lg hidden md:table-cell"
            >
              Ext. Ref.
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.length > 0 ? (
            orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleRowClick(order.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {expandedOrderId === order.id ? (
                      <svg
                        className="w-4 h-4 transform rotate-90 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 font-semibold">
                    {order.account}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {order.operation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {order.symbol}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 hidden md:table-cell">
                    {order.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 hidden md:table-cell">
                    {order.qty}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 hidden md:table-cell">
                    {order.filledQty}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 hidden md:table-cell">
                    {order.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center">
                      {order.status === "Waiting" && (
                        <FontAwesomeIcon
                          icon={faHourglassHalf}
                          className="mr-2 text-blue-500"
                          aria-hidden="true"
                        />
                      )}
                      {order.status === "Accepted" && (
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="mr-2 text-green-500"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`px-2 inline-flex text-xs text-gray-700 leading-5 font-semibold rounded-full`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 hidden md:table-cell">
                    {formatDateTime(order.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 hidden md:table-cell">
                    {formatDateTime(order.expiration)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 hidden md:table-cell">
                    {order.noRef}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 hidden md:table-cell">
                    {order.extRef}
                  </td>
                </tr>
                {expandedOrderId === order.id && (
                  <tr>
                    <td
                      colSpan="13"
                      className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                    >
                      <OrderDetails
                        order={order}
                        handleAccept={handleAccept}
                        handleReject={handleReject}
                      />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : isLoading ? (
            <tr>
              <td colSpan="13" className="px-6 py-8 text-center text-gray-500">
                Loading orders...
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="13" className="px-6 py-8 text-center text-gray-500">
                No orders found matching your criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
