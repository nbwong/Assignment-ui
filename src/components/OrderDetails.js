"use client";
import React, { useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal"; 
import { formatCurrency, formatDateTime } from "../service/DataFormatterService.js"; 

const OrderDetails = ({ order, handleAccept, handleReject }) => {
  if (!order || !order.details) {
    return (
      <div className="text-gray-600 p-4">No order details to display.</div>
    );
  }

  const { details } = order;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-200">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4 border-b-2">
        <div className="flex pb-1">
          <h3 className="text-lg font-semibold text-gray-900 px-2">
            FIRST-NAME LAST-NAME ({order.account || "N/A"} -{" "}
            {order.accountType || "US Margin"})
          </h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors shadow-sm text-sm whitespace-nowrap"
          >
            Full review details ↗
          </button>
        </div>
        {isModalOpen && (
          <OrderDetailsModal
            order={order}
            onClose={() => setIsModalOpen(false)}
          />
        )}

        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleAccept(order.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md text-sm whitespace-nowrap"
          >
            ACCEPT
          </button>
          <button
            onClick={() => handleReject(order.id)}
            className="px-4 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-50 transition-colors shadow-md text-sm flex items-center whitespace-nowrap"
          >
            Reject
            <svg
              className="ml-1 -mr-1 h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 text-sm text-gray-700 mb-6">
        <div className="flex items-center">
          <p className="font-semibold w-1/2">Net Amount:</p>
          <p className="w-1/2 text-gray-900 font-bold">
            {formatCurrency(details.netAmount)}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold w-1/2">Price:</p>
          <p className="w-1/2 text-gray-900 font-bold">
            {details.priceDetails !== undefined && details.priceDetails !== null
              ? details.priceDetails.toFixed(2)
              : "N/A"}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold w-1/2">Exchange Rate:</p>
          <p className="w-1/2 text-gray-900 font-bold">
            {details.exchangeRate || "N/A"}
          </p>
        </div>

        <div className="flex items-center">
          <p className="font-semibold w-1/2">Reference Number:</p>
          <p className="w-1/2 text-gray-900">
            {details.referenceNumber || "N/A"}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold w-1/2">Date / Time:</p>
          <p className="w-1/2 text-gray-900">
            {formatDateTime(details.dateAndTime)}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold w-1/2">O/S Limit:</p>
          <p className="w-1/2 text-gray-900">{details.qisLimit || "N/A"}</p>
        </div>

        <div className="flex items-center">
          <p className="font-semibold w-1/2">Telephone:</p>
          <p className="w-1/2 text-gray-900">{details.telephone || "N/A"}</p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold w-1/2">User ID:</p>
          <p className="w-1/2 text-gray-900">{details.userID || "N/A"}</p>
        </div>
        <div></div>
      </div>

      {details.warnings && details.warnings.length > 0 && (
        <div className="mt-4 p-4 bg-gray-50 border border-yellow-300 rounded-md">
          <h4 className="font-semibold text-yellow-800 mb-2">Warning(s)</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {details.warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </div>
      )}

      {order.status === "Waiting" &&
        details.warnings &&
        details.warnings.length === 0 && (
          <div className="mt-6 flex space-x-4 justify-end hidden">
            <button
              onClick={() => handleAccept(order.id)}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-md"
            >
              Accept
            </button>
            <button
              onClick={() => handleReject(order.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
            >
              Reject
            </button>
          </div>
        )}
    </div>
  );
};

export default OrderDetails;
