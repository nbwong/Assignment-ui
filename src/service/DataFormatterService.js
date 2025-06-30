export const formatCurrency = (amount) => {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "$N/A";
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  if (isNaN(date.getTime())) {
    return "Invalid Date/Time";
  }
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    calendar: "gregory",
  };
  return date.toLocaleString("en-US", options);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return 'Invalid Date'; 
  }
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    calendar: 'gregory'
  };
  return date.toLocaleDateString('en-US', options);
};