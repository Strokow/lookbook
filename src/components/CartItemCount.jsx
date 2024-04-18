import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

function CartItemCount() {
    const { user } = useAuth();
    const [cartItemCount, setCartItemCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/carts/${user?.message}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch cart item count');
                }
            
                const data = await response.json();
                console.log(data);
                setCartItemCount(data.totalCount);
                setTotalPrice(data.totalPrice);
            } catch (error) {
                console.error('Error fetching cart item count:', error);
            }
        };

        fetchData();
    }, [user?.message]);

    return (
        <div>{cartItemCount} pcs / {totalPrice.toFixed(2)} €</div>     
    );
}

export default CartItemCount;