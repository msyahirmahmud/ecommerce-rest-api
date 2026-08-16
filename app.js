/**
 * E-Commerce REST API Core Service Module
 */

class ECommerceService {
  constructor() {
    this.products = [
      { id: 1, name: "Developer Mechanical Keyboard", category: "Electronics", price: 129.99, stock: 45 },
      { id: 2, name: "Ergonomic Desk Chair", category: "Furniture", price: 299.00, stock: 12 },
      { id: 3, name: "Wireless Noise-Canceling Headphones", category: "Electronics", price: 199.50, stock: 30 },
      { id: 4, name: "Ultra-Wide Monitor 34-inch", category: "Electronics", price: 549.99, stock: 8 },
      { id: 5, name: "Adjustable Standing Desk", category: "Furniture", price: 420.00, stock: 15 }
    ];
    this.users = [
      { id: 1, email: "admin@example.com", password: "password123", token: "jwt-token-admin-secret" }
    ];
    this.carts = {}; // userId -> items
  }

  getProducts(category = null, page = 1, limit = 10) {
    let filtered = this.products;
    if (category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    const startIndex = (page - 1) * limit;
    const paginated = filtered.slice(startIndex, startIndex + limit);

    return {
      total: filtered.length,
      page,
      limit,
      totalPages: Math.ceil(filtered.length / limit),
      data: paginated
    };
  }

  getProductById(id) {
    return this.products.find(p => p.id === parseInt(id)) || null;
  }

  authenticateUser(email, password) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      return { token: user.token, email: user.email };
    }
    return null;
  }

  addToCart(userId, productId, quantity = 1) {
    const product = this.getProductById(productId);
    if (!product) throw new Error("Product not found");
    if (product.stock < quantity) throw new Error("Insufficient stock");

    if (!this.carts[userId]) this.carts[userId] = [];
    const item = this.carts[userId].find(i => i.productId === productId);
    if (item) {
      item.quantity += quantity;
    } else {
      this.carts[userId].push({ productId, name: product.name, price: product.price, quantity });
    }
    return this.carts[userId];
  }

  getCart(userId) {
    return this.carts[userId] || [];
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ECommerceService;
}
