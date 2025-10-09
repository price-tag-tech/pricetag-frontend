const API_URL = `${process.env.REACT_APP_API_URL}/v1`;

export const myOrders = async () => {
  try {
    const token = localStorage.getItem("session");
    const response = await fetch(`${API_URL}/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const orders = await response.json();

    if (!response.ok) throw new Error("Failed to fetch orders");

    if (orders.data?.length > 0) {
      return {
        status: "success",
        code: 200,
        data: orders.data,
      };
    }
    return {
      status: "success",
      code: 404,
      message: "No orders found",
    };
  } catch (error: any) {
    return {
      status: "error",
      code: 500,
      message: error.message || "Internal server error",
    };
  }
};
