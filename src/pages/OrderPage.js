"use client";
import React, { useState, useEffect } from "react";
import SearchFilter from "../components/SearchFilter";
import OrdersTable from "../components/OrdersTable";
import MockApiService from "../service/MockApiService";

export default function OrderPage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [period, setPeriod] = useState("Transmission");
  const [statusFilter, setStatusFilter] = useState("Waiting");
  const [startDate, setStartDate] = useState("2021-01-01");
  const [endDate, setEndDate] = useState("2023-01-31");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const applyFilters = (ordersToFilter) => {
    console.log("Filtering orders...");

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const start = new Date(startDate);
    const end = new Date(endDate);

    const results = ordersToFilter.filter(
      (order) => {
        const orderDate = new Date(order.date);

        const isWithinDateRange =
          orderDate >=
            new Date(start.getFullYear(), start.getMonth(), start.getDate()) &&
          orderDate <=
            new Date(
              end.getFullYear(),
              end.getMonth(),
              end.getDate(),
              23,
              59,
              59,
              999
            );

        const isStatusMatch =
          statusFilter === "All" || order.status === statusFilter;

        const isPeriodMatch = true;

        const isSearchMatch =
          order.id.toLowerCase().includes(lowerCaseSearchTerm) ||
          order.description.toLowerCase().includes(lowerCaseSearchTerm) ||
          order.account.toLowerCase().includes(lowerCaseSearchTerm) ||
          order.symbol.toLowerCase().includes(lowerCaseSearchTerm) ||
          order.operation.toLowerCase().includes(lowerCaseSearchTerm) ||
          order.status.toLowerCase().includes(lowerCaseSearchTerm);

        return (
          isWithinDateRange && isStatusMatch && isPeriodMatch && isSearchMatch
        );
      }
    );
    setFilteredOrders(results);
  };

  const filterOrders = () => {
    applyFilters(allOrders);
  };

  useEffect(() => {
    setIsLoading(true);
    MockApiService.fetchOrders().then((data) => {
      console.log("Fetch Orders...");
      setAllOrders(data);
      applyFilters(data);
      setIsLoading(false);
    });
  }, []);

  const handleAccept = (orderId) => {
    console.log(`Order ${orderId} Accepted!`);
  };

  const handleReject = (orderId) => {
    console.log(`Order ${orderId} Rejected!`);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 font-inter">
      <div className="w-full mx-auto bg-white shadow-lg rounded-xl p-6">
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          period={period} 
          setPeriod={setPeriod}
          status={statusFilter}
          setStatus={setStatusFilter}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          filteredOrdersCount={filteredOrders.length}
          onSearchClick={filterOrders}
        />
        <OrdersTable
          orders={filteredOrders}
          expandedOrderId={expandedOrderId}
          setExpandedOrderId={setExpandedOrderId}
          handleAccept={handleAccept}
          handleReject={handleReject}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
