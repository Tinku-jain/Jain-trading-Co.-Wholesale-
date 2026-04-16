import { useNavigate } from "react-router-dom";

export default function Checkout({ cart }) {
  const navigate = useNavigate();

  const handleOrder = () => {
    if (cart.length === 0) return;

    // 1️⃣ Get existing products
    const existingProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    // 2️⃣ Reduce stock
    const updatedProducts = existingProducts.map((prod) => {
      const orderedItem = cart.find(
        (item) => item.id === prod.id
      );

      if (orderedItem) {
        return {
          ...prod,
          stock:
            prod.stock - orderedItem.quantity >= 0
              ? prod.stock - orderedItem.quantity
              : 0,
        };
      }

      return prod;
    });

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    // 3️⃣ Save Order
   const newOrder = {
  id: Date.now(),
  items: cart,
  date: new Date().toLocaleString(),
  status: "Pending",
};

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    // 4️⃣ Clear Cart
    localStorage.removeItem("cart");

    // 5️⃣ Go to invoice
    navigate("/invoice");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Checkout</h1>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} × {item.quantity}
        </div>
      ))}

      <button onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}