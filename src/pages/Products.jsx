import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

export default function Products({ addToCart }) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const products = {
    Namkeen: [
      { id: 1, name: "Masala Namkeen", price: 120 },
      { id: 2, name: "Aloo Bhujia", price: 150 },
      { id: 3, name: "Moong Dal", price: 140 },
    ],
    Biscuit: [
      { id: 4, name: "Cream Biscuit", price: 80 },
      { id: 5, name: "Marie Biscuit", price: 60 },
      { id: 6, name: "Chocolate Biscuit", price: 90 },
    ],
    Candy: [
      { id: 7, name: "Love Candy", price: 50 },
      { id: 8, name: "Fruit Roll", price: 45 },
      { id: 9, name: "Bubble Stick", price: 40 },
    ],
  };

  const allProducts = Object.values(products).flat();

  const displayProducts =
    activeCategory === "All"
      ? allProducts
      : products[activeCategory];

  const handleAdd = (item) => {
    const user = localStorage.getItem("currentUser");

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    addToCart({
      ...item,
      quantity: 1,
    });
  };

  return (
    <div className="products-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Categories</h3>

        {["All", "Namkeen", "Biscuit", "Candy"].map((cat) => (
          <button
            key={cat}
            className={
              activeCategory === cat ? "active" : ""
            }
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h1>Products</h1>

        <div className="products-grid">
          {displayProducts.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-img">
                {item.name}
              </div>

              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button onClick={() => handleAdd(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}