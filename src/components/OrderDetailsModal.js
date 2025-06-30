import React from 'react';
import { formatCurrency } from '../service/DataFormatterService'; 

const OrderDetailsModal = ({ order, onClose }) => {
  if (!order || !order.details) {
    return null; 
  }

  const { details } = order;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-grey bg-opacity-50 ">
      <div className="bg-white rounded-lg w-3/4 max-w-4xl p-6 border border-gray-300">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 text-sm text-gray-700 mb-6">
          {/* Row 1 */}
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
              {details.dateAndTime}
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
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}; 

export default OrderDetailsModal;