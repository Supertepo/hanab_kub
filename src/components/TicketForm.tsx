// src/components/TicketForm.tsx
import React, { useState } from 'react';

const TicketForm: React.FC = () => {
    const [quantity, setQuantity] = useState<number>(0);
    const pricePerTicket: number = 240; // Precio por boleto

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(e.target.value, 10));
    };

    const totalAmount: number = quantity * pricePerTicket;

    return (
        <div>
            <h2 className=''>Compra de Boletos</h2>
            <label>
                Cantidad de Boletos:
                <input
                    type="number"
                    min="0"
                    value={quantity}
                    onChange={handleQuantityChange}
                />
            </label>
            <p>Total a Pagar: ${totalAmount}</p>
        </div>
    );
};

export default TicketForm;
