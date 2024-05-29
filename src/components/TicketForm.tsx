// src/components/TicketForm.tsx
import React, { useState } from 'react';

const TicketForm: React.FC = () => {
    const [quantity, setQuantity] = useState<number>(0);
    const pricePerTicket: number = 650; // Precio por boleto

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(e.target.value, 10));
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(quantity - 1 < 0 ? 0 : quantity - 1);
    };

    const totalAmount: number = quantity * pricePerTicket;

    return (
        <div className="px-36 py-32">
            <h2>Compra de Boletos</h2>
            <p>Cantidad de boletos</p>
            <div>
                <button onClick={decrementQuantity} className="rounded dark:bg-teal-700 dark: text-gray-400 m-1 px-2.5 py-0.5">-</button>
                <input
                    type="number"
                    min="0"
                    value={quantity}
                    onChange={handleQuantityChange}
                />
                <button onClick={incrementQuantity} className="rounded dark:bg-teal-700 dark: text-gray-400 m-1 px-2.5 py-0.5">+</button>
            </div>
            <p>Total a Pagar: ${totalAmount}</p>
        </div>
    );
};

export default TicketForm;
