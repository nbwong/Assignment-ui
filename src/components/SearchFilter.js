"use client";
import React from "react";
const SearchFilter = ({
  period,
  setPeriod,
  status,
  setStatus,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  filteredOrdersCount,
  onSearchClick,
}) => {
  return (
    <div className="mb-6 px-4 py-4 bg-white rounded-lg shadow-sm font-sans">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex-none pr-4">
          <h1 className="text-2xl font-bold text-gray-800">Search</h1>
          <p className="text-gray-700 text-sm">
            Search results : {filteredOrdersCount}
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap ml-auto">
          <div className="flex items-center space-x-2">
            <label
              htmlFor="period"
              className="text-sm font-medium text-blue-800 whitespace-nowrap"
            >
              Period
            </label>
            <div className="relative">
              <select
                id="period"
                className="block appearance-none w-auto bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[120px]"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option value="Transmission">Transmission</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <label
              htmlFor="status"
              className="text-sm font-medium text-blue-800 whitespace-nowrap"
            >
              Status
            </label>
            <div className="relative">
              <select
                id="status"
                className="block appearance-none w-auto bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[120px]"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Waiting">Waiting</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Pending">Pending</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <label
              htmlFor="startDate"
              className="text-sm font-medium text-blue-800 whitespace-nowrap"
            >
              From
            </label>
            <div className="relative">
              <input
                type="date"
                id="startDate"
                className="block w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <label
              htmlFor="endDate"
              className="text-sm font-medium text-blue-800 whitespace-nowrap"
            >
              To
            </label>
            <div className="relative">
              <input
                type="date"
                id="endDate"
                className="block w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <button
            className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition-colors flex-shrink-0 whitespace-nowrap"
            onClick={onSearchClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
