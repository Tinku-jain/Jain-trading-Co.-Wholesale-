import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail({ addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product Not Found</h2>;
  }

  return (
    <div style={styles.page}>
      <img src={product.image} alt={product.name} style={styles.image} />

      <div style={styles.info}>
        <h1>{product.name}</h1>
        <p>Category: {product.category}</p>
        <h2>₹{product.price}</h2>

        <button
          style={styles.button}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    gap: "40px",
    padding: "40px",
    maxWidth: "900px",
    margin: "auto",
  },
  image: {
    width: "400px",
    height: "300px",
    objectFit: "cover",
  },
  info: {
    flex: 1,
  },
  button: {
    marginTop: "20px",
    padding: "12px 25px",
    background: "#d4af37",
    border: "none",
    cursor: "pointer",
  },
};

export default ProductDetail;