import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [enquiries, setEnquiries] = useState([]);

  const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersRes, enquiriesRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
            headers: {
              Authorization: `Bearer ${adminInfo.token}`
            }
          }),
          fetch(`${import.meta.env.VITE_API_URL}/api/enquiries`, {
            headers: {
              Authorization: `Bearer ${adminInfo.token}`
            }
          })
        ]);

        const ordersData = await ordersRes.json();
        const enquiriesData = await enquiriesRes.json();

        setOrders(ordersData);
        setEnquiries(enquiriesData);
      } catch (error) {
        console.log(error);
      }
    };

    if (adminInfo?.token) {
      fetchData();
    }
  }, [adminInfo]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}
          >
            <p><strong>Name:</strong> {order.customerName}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Total:</strong> ₹{order.totalAmount}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </div>
        ))
      )}

      <h2>Enquiries</h2>
      {enquiries.length === 0 ? (
        <p>No enquiries found</p>
      ) : (
        enquiries.map((enquiry) => (
          <div
            key={enquiry._id}
            style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}
          >
            <p><strong>Name:</strong> {enquiry.name}</p>
            <p><strong>Email:</strong> {enquiry.email}</p>
            <p><strong>Phone:</strong> {enquiry.phone}</p>
            <p><strong>Message:</strong> {enquiry.message}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;