import "./App.css";
import { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 4499,
      image: "https://m.media-amazon.com/images/I/41lArSiD5hL._AC_SY400_.jpg",
    },
    {
      id: 2,
      name: "Gaming Keyboard",
      category: "Electronics",
      price: 2999,
      image:
        "https://m.media-amazon.com/images/I/71QNTv2ZnEL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: 3,
      name: "Cotton T-Shirt",
      category: "Clothing",
      price: 799,
      image:
        "https://m.media-amazon.com/images/I/61H1HxfTAUL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 4,
      name: "Atomic Habits",
      category: "Books",
      price: 399,
      image:
        "https://m.media-amazon.com/images/I/817HaeblezL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: 5,
      name: "Cookware Set",
      category: "Home & Kitchen",
      price: 2499,
      image:
        "https://m.media-amazon.com/images/I/61KvzLY93+L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 6,
      name: "Football",
      category: "Sports",
      price: 999,
      image:
        "https://m.media-amazon.com/images/I/81pgKnRou9L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 7,
      name: "Remote Car",
      category: "Toys",
      price: 1499,
      image:
        "https://m.media-amazon.com/images/I/81faAd-wmTL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 1999,
      image:
        "https://m.media-amazon.com/images/I/61fcwiN+VpL._AC_UY327_FMwebp_QL65_.jpg",
    },
  ];
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  // const [input, setInput] = useState("");
  // const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  const filteredProducts = products.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <header className="info">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            className="logo-img"
          />
        </div>

        <div className="address">🌍 India</div>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Books</option>
          <option>Home & Kitchen</option>
          <option>Sports</option>
          <option>Toys</option>
        </select>

        <input
          type="text"
          placeholder="Search Products..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={() => setSearch(input)}>🔍</button>

        <div className="nav-account">
          <span>Hello, Sign In</span>
          <span>Account & Lists</span>
        </div>

        <div className="nav-account">
          <span>Returns</span>
          <span>& Orders</span>
        </div>

        <div className="cart" onClick={() => setShowCart(!showCart)}>
          🛒 Cart ({cart.length})
        </div>
      </header>

      {/* <nav className="nv">
        <div className="nav-item bold">☰ All</div>
        <div className="nav-item">Electronics</div>
        <div className="nav-item">Books</div>
        <div className="nav-item">Home & Kitchen</div>
        <div className="nav-item">Sports</div>
        <div className="nav-item">Toys</div>
        <div className="nav-item">Today's Deals</div>
        <div className="nav-item">Prime</div>
      </nav> */}

      <nav className="nv">
        <div className="nav-item bold" onClick={() => setCategory("All")}>
          ☰ All
        </div>

        <div className="nav-item" onClick={() => setCategory("Electronics")}>
          Electronics
        </div>

        <div className="nav-item" onClick={() => setCategory("Books")}>
          Books
        </div>

        <div className="nav-item" onClick={() => setCategory("Home & Kitchen")}>
          Home & Kitchen
        </div>

        <div className="nav-item" onClick={() => setCategory("Sports")}>
          Sports
        </div>

        <div className="nav-item" onClick={() => setCategory("Toys")}>
          Toys
        </div>

        <div className="nav-item">Today's Deals</div>

        <div className="nav-item">Prime</div>
      </nav>

      <div className="container">
        <div className="main-content">
          {/* <section className="banner">
            <img
              src="https://m.media-amazon.com/images/I/41lArSiD5hL._AC_SY400_.jpg"
              alt="Banner"
            />
          </section> */}
          <div className="banner">
            <div className="banner-text">
              <h1>Up to 60% Off</h1>
              <p>Electronics & Accessories</p>
              <button>Shop Now</button>
            </div>

            <div className="banner-image">
              <img src="https://m.media-amazon.com/images/I/41lArSiD5hL._AC_SY400_.jpg" alt="Banner Product" />
            </div>
          </div>

          <section className="products">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="card" key={product.id}>
                  <h3>{product.name}</h3>

                  <img src={product.image} alt={product.name} />

                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>

                  <p>
                    <strong>Price:</strong> ₹{product.price}
                  </p>

                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <h2>No Products Found</h2>
            )}
          </section>
        </div>

        <aside className="sidebar">
          <h2>
            <strong>Best Deals 🔥</strong>
          </h2>

          {products.slice(0, 3).map((deal) => (
            <div className="deal" key={deal.id}>
              <img src={deal.image} alt={deal.name} />

              <h4>{deal.name}</h4>

              <p>₹{deal.price}</p>
            </div>
          ))}
        </aside>

        {showCart && (
          <div className="cart-box">
            <div className="cart-header">
              <h2>Your Cart</h2>

              <button onClick={() => setShowCart(false)}>✖</button>
            </div>

            {cart.length === 0 ? (
              <p>Cart is Empty</p>
            ) : (
              <>
                {cart.map((item, index) => (
                  <div className="cart-item" key={index}>
                    <img src={item.image} alt={item.name} />

                    <div>
                      <p>{item.name}</p>
                      <p>₹{item.price}</p>
                    </div>
                  </div>
                ))}

                <hr />

                <h3>Total : ₹{total}</h3>
              </>
            )}
          </div>
        )}
      </div>

      <footer>
        <div
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back To Top
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Get to Know Us</h3>
            <a href="#">About Amazon</a>
            <a href="#">Careers</a>
            <a href="#">Press Releases</a>
            <a href="#">Amazon Science</a>
          </div>

          <div className="footer-column">
            <h3>Connect with Us</h3>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>

          <div className="footer-column">
            <h3>Make Money with Us</h3>
            <a href="#">Sell on Amazon</a>
            <a href="#">Become an Affiliate</a>
          </div>

          <div className="footer-column">
            <h3>Let Us Help You</h3>
            <a href="#">Your Account</a>
            <a href="#">Returns Centre</a>
            <a href="#">Help</a>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <div className="footer-logo">amazon</div>

          <p>© 2026 Amazon Clone | Created by Aryan</p>
        </div>
      </footer>
    </>
  );
}

export default App;
