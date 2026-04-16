import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>No Orders Found</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>My Orders</h1>

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Date:</strong> {order.date}</p>

          {order.items.map((item) => (
            <p key={item.id}>
              {item.name} × {item.quantity}
            </p>
          ))}

          <h3>Total: ₹{order.total}</h3>
        </div>
      ))}
    </div>
  );
}

export default Orders;