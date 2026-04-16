export default function Invoice() {
  const cart =
    JSON.parse(localStorage.getItem("orders"))?.slice(-1)[0]?.items || [];

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.originalPrice * item.quantity,
    0
  );

  const discount = cart.reduce((sum, item) => {
    if (item.quantity >= 10)
      return (
        sum +
        item.originalPrice *
          item.quantity *
          0.1
      );
    return sum;
  }, 0);

  const total = subtotal - discount;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Invoice</h1>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} × {item.quantity}
        </div>
      ))}

      <hr />
      <p>Subtotal: ₹{subtotal}</p>
      <p>Discount: -₹{discount}</p>
      <h2>Total: ₹{total}</h2>
    </div>
  );
}