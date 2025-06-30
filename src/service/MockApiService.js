import mockOrders from "../data/MockOrders";

const MockApiService = {
  fetchOrders: () => {
    return Promise.resolve(mockOrders);
  },
};

export default MockApiService;