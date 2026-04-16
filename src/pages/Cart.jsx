import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, increaseQty, decreaseQty, removeItem }) {

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/login");
    }
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div>
        <h2>Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {/* baaki cart UI */}
    </div>
  );
}

export default Cart;