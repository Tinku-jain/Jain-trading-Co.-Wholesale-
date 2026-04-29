import { useEffect, useState } from "react";
import "./Admin.css";

export default function Admin() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];
    const storedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setOrders(storedOrders);
    setProducts(storedProducts);
  }, []);

  const totalOrders = orders.length;

  const totalRevenue = orders.reduce((sum, order) => {
    return (
      sum +
      order.items.reduce(
        (s, item) =>
          s +
          item.originalPrice * item.quantity,
        0
      )
    );
  }, 0);

  const pendingOrders = orders.filter(
    (o) => o.status === "Pending"
  ).length;

  const deliveredOrders = orders.filter(
    (o) => o.status === "Delivered"
  ).length;

  const lowStock = products.filter(
    (p) => p.stock <= 5
  );

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      {/* DASHBOARD CARDS */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Orders</h3>
          <p>{totalOrders}</p>
        </div>

        <div className="card">
          <h3>Total Revenue</h3>
          <p>₹{totalRevenue}</p>
        </div>

        <div className="card">
          <h3>Pending Orders</h3>
          <p>{pendingOrders}</p>
        </div>

        <div className="card">
          <h3>Delivered Orders</h3>
          <p>{deliveredOrders}</p>
        </div>
      </div>

      {/* LOW STOCK SECTION */}
      <h2>Low Stock Alert</h2>

      {lowStock.length === 0 && (
        <p>No low stock products.</p>
      )}

      {lowStock.map((product) => (
        <div key={product.id} className="low-stock">
          {product.name} - Stock: {product.stock}
        </div>
      ))}
    </div>
  );
}