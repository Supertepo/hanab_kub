import { useState } from 'react';

const TicketForm: React.FC = () => {
    const [quantity1, setQuantity1] = useState<number>(0);
    const TicketAdulto: number = 450; // Precio por boleto

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity1(parseInt(e.target.value, 10));
    };

    const incrementQuantity1 = () => {
        setQuantity1(quantity1 + 1);
    };

    const decrementQuantity1 = () => {
        setQuantity1(quantity1 - 1 < 0 ? 0 : quantity1 - 1);
    };

    const totalAmount: number = quantity1 * TicketAdulto;

    return (
        <div>
            <h2>Compra de Boletos</h2>
            <p>Cantidad de boletos</p>
            <div>
                <button onClick={decrementQuantity1} className="rounded dark:bg-teal-700 dark: text-gray-400 m-1 px-2.5 py-0.5">-</button>
                <input
                    type="number"
                    min="0"
                    value={quantity1}
                    onChange={handleQuantityChange}
                />
                <button onClick={incrementQuantity1} className="rounded dark:bg-teal-700 dark: text-gray-400 m-1 px-2.5 py-0.5">+</button>
            </div>
            <p>Total a Pagar: ${totalAmount}</p>
        </div>
    );
};

export default TicketForm;
