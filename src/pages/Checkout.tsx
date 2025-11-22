import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Checkout: React.FC = () => {
    const { items, cartTotal } = useCart();
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (items.length === 0 && !isSubmitted) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Your cart is empty</h2>
                <p>Add some plants to your cart to proceed to checkout.</p>
                <Link to="/shop">
                    <Button style={{ marginTop: '1rem' }}>Return to Shop</Button>
                </Link>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                <h2>Thank you for your order!</h2>
                <p>We've received your order and are preparing your plants for their new home.</p>
                <p>Order #{(Math.random() * 10000).toFixed(0)}</p>
                <Link to="/">
                    <Button style={{ marginTop: '2rem' }}>Back to Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container checkout-page" style={{ padding: '2rem 0' }}>
            <h1>Checkout</h1>

            <div className="checkout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                {/* Checkout Form */}
                <div className="checkout-form">
                    <h3>Shipping Information</h3>
                    <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input type="text" placeholder="First Name" required className="form-input" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="Last Name" required className="form-input" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            </div>
                            <input type="email" placeholder="Email Address" required className="form-input" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            <input type="text" placeholder="Address" required className="form-input" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem' }}>
                                <input type="text" placeholder="City" required className="form-input" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="State" required className="form-input" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="ZIP" required className="form-input" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            </div>

                            <h3 style={{ marginTop: '1rem' }}>Payment Details</h3>
                            <input type="text" placeholder="Card Number" required className="form-input" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input type="text" placeholder="MM/YY" required className="form-input" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="CVC" required className="form-input" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            </div>

                            <Button type="submit" size="lg" style={{ marginTop: '1rem', width: '100%' }}>
                                Place Order (${cartTotal.toFixed(2)})
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="order-summary" style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', height: 'fit-content' }}>
                    <h3>Order Summary</h3>
                    <div className="summary-items" style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {items.map(item => (
                            <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <div>
                                    <p style={{ fontWeight: 500, margin: 0 }}>{item.name}</p>
                                    <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>Qty: {item.quantity}</p>
                                    <p style={{ fontWeight: 500, margin: 0 }}>${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ borderTop: '1px solid #ddd', marginTop: '1.5rem', paddingTop: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '1rem' }}>
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
