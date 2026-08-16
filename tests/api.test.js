const assert = require('assert');
const { test, describe } = require('node:test');
const ECommerceService = require('../app.js');

describe('E-Commerce REST API Unit Tests', () => {
  test('getProducts lists all catalog items', () => {
    const service = new ECommerceService();
    const products = service.getProducts();
    assert.strictEqual(products.length, 3);
  });

  test('applyPromoCode calculates discount total correctly', () => {
    const service = new ECommerceService();
    const res = service.applyPromoCode('SAVE20', 100.00);
    assert.strictEqual(res.discountAmount, 20.00);
    assert.strictEqual(res.total, 80.00);
  });

  test('getProducts filters by category', () => {
    const service = new ECommerceService();
    const electronics = service.getProducts('Electronics');
    assert.strictEqual(electronics.length, 2);
  });

  test('authenticateUser returns token for valid credentials', () => {
    const service = new ECommerceService();
    const res = service.authenticateUser('admin@example.com', 'password123');
    assert.notStrictEqual(res, null);
    assert.strictEqual(res.token, 'jwt-token-admin-secret');
  });

  test('addToCart manages cart items correctly', () => {
    const service = new ECommerceService();
    const cart = service.addToCart('user-1', 1, 2);
    assert.strictEqual(cart.length, 1);
    assert.strictEqual(cart[0].quantity, 2);
  });
});
