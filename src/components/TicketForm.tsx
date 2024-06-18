import { useState } from "react";
import jsPDF from "jspdf";

const TicketForm: React.FC = () => {
  const [quantityAdulto, setQuantityAdulto] = useState<number>(0);
  const TicketAdulto: number = 499.99;

  const [quantityMenor, setQuantityMenor] = useState<number>(0);
  const TicketMenor: number = 399.99;

  const [quantityVIP, setQuantityVIP] = useState<number>(0);
  const TicketVIP: number = 899.99;

  const [quantityVIPMenor, setQuantityVIPMenor] = useState<number>(0);
  const TicketVIPMenor: number = 699.99;

  const [quantityMembresia, setQuantityMembresia] = useState<number>(0);
  const Membresia: number = 999.99;

  const [quantityMembresiaAlimentos, setQuantityMembresiaAlimentos] =
    useState<number>(0);
  const MembresiaAlimentos: number = 1299.99;

  const [fecha, setFecha] = useState<string>("");

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setQuantity: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(Math.min(Math.max(value, 0), 8));
  };

  const incrementQuantity = (
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setQuantity(Math.min(quantity + 1, 8));
  };

  const decrementQuantity = (
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setQuantity(Math.max(quantity - 1, 0));
  };
  const totalAdulto: number = parseFloat(
    (quantityAdulto * TicketAdulto).toFixed(2)
  );
  const totalMenor: number = parseFloat(
    (quantityMenor * TicketMenor).toFixed(2)
  );
  const totalVIP: number = parseFloat((quantityVIP * TicketVIP).toFixed(2));
  const totalVIPMenor: number = parseFloat(
    (quantityVIPMenor * TicketVIPMenor).toFixed(2)
  );
  const totalMembresia: number = parseFloat(
    (quantityMembresia * Membresia).toFixed(2)
  );
  const totalMembresiaAlimentos: number = parseFloat(
    (quantityMembresiaAlimentos * MembresiaAlimentos).toFixed(2)
  );

  const totalAmount: number = parseFloat(
    (
      totalAdulto +
      totalMenor +
      totalVIP +
      totalVIPMenor +
      totalMembresia +
      totalMembresiaAlimentos
    ).toFixed(2)
  );

  const handleConfirmPurchase = () => {
    if (!fecha) {
      alert("Por favor, selecciona una fecha.");
      return;
    }

    const doc = new jsPDF();
    doc.text("Reservacion", 20, 10);
    doc.setFont("times", "italic");
    doc.text(`Fecha de reservacion: ${fecha}`, 20, 20);
    doc.text("Cantidad", 20, 30);
    if (quantityAdulto !== 0) {
      doc.text(`${quantityAdulto} Boletos de adulto`, 20, 40);
      doc.text(`${totalAdulto}`, 150, 40);
    }
    if (quantityMenor !== 0) {
      doc.text(`${quantityMenor} Boletos de menor`, 20, 50);
      doc.text(`${totalMenor}`, 150, 50);
    }
    if (quantityVIP !== 0) {
      doc.text(`${quantityVIP} Boletos VIP`, 20, 60);
      doc.text(`${totalVIP}`, 150, 60);
    }
    if (quantityVIPMenor !== 0) {
      doc.text(`${quantityVIPMenor} Boletos VIP Menor`, 20, 70);
      doc.text(`${totalVIPMenor}`, 150, 70);
    }
    if (quantityMembresia !== 0) {
      doc.text(`${quantityMembresia} Membresias`, 20, 80);
      doc.text(`${totalMembresia}`, 150, 80);
    }
    if (quantityMembresia !== 0) {
      doc.text(`${quantityMembresiaAlimentos} Membresias de alimentos`, 20, 90);
      doc.text(`${totalMembresiaAlimentos}`, 150, 90);
    }
    doc.text(`Total: $${totalAmount}`, 130, 100);
    doc.save("compra.pdf");
    alert("Reservacion confirmada. Generando PDF...");
  };

  return (
    <div className="max-w-max mx-auto">
      <h2 className="text-center">Compra de Boletos</h2>
      <div className="relative max-w-sm">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          type="date"
          className="bg-teal-50 borde border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-teal-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-4">
        {/* Repeat the ticket input sections for each ticket type */}
        {/* Ticket Adulto */}
        <div className="dark:bg-black/20 rounded-lg p-4">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gary-900 text-center">
            Cantidad de boletos Adulto
          </p>
          <div className="relative flex items-center">
            <button
              onClick={() =>
                decrementQuantity(quantityAdulto, setQuantityAdulto)
              }
              className="rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              min="0"
              max="8"
              value={quantityAdulto}
              onChange={(e) => handleQuantityChange(e, setQuantityAdulto)}
              className=" border-x-0 h-11 text-center w-full py-2.5 text-gray-900 text-sm block dark:bg-teal-700 dark:text-white"
            />
            <button
              onClick={() =>
                incrementQuantity(quantityAdulto, setQuantityAdulto)
              }
              className="rounded-e-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Repeat for other ticket types */}
        <div className="dark:bg-black/20 rounded-lg p-4">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gary-900">
            Cantidad de boletos Menor
          </p>
          <div className="relative flex items-center">
            <button
              onClick={() => decrementQuantity(quantityMenor, setQuantityMenor)}
              className="rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              min="0"
              max="8"
              value={quantityMenor}
              onChange={(e) => handleQuantityChange(e, setQuantityMenor)}
              className=" border-x-0 h-11 text-center w-full py-2.5 text-gray-900 text-sm block dark:bg-teal-700 dark:text-white"
            />
            <button
              onClick={() => incrementQuantity(quantityMenor, setQuantityMenor)}
              className="rounded-e-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Ticket VIP */}
        <div className="dark:bg-black/20 rounded-lg p-4">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gary-900">
            Cantidad de boletos VIP
          </p>
          <div className="relative flex items-center">
            <button
              onClick={() => decrementQuantity(quantityVIP, setQuantityVIP)}
              className="rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              min="0"
              max="8"
              value={quantityVIP}
              onChange={(e) => handleQuantityChange(e, setQuantityVIP)}
              className=" border-x-0 h-11 text-center w-full py-2.5 text-gray-900 text-sm block dark:bg-teal-700 dark:text-white"
            />
            <button
              onClick={() => incrementQuantity(quantityVIP, setQuantityVIP)}
              className="rounded-e-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Ticket VIP Menor */}
        <div className="dark:bg-black/20 rounded-lg p-4">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gary-900">
            Cantidad de boletos VIP Menor
          </p>
          <div className="relative flex items-center">
            <button
              onClick={() =>
                decrementQuantity(quantityVIPMenor, setQuantityVIPMenor)
              }
              className="rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              min="0"
              max="8"
              value={quantityVIPMenor}
              onChange={(e) => handleQuantityChange(e, setQuantityVIPMenor)}
              className=" border-x-0 h-11 text-center w-full py-2.5 text-gray-900 text-sm block dark:bg-teal-700 dark:text-white"
            />
            <button
              onClick={() =>
                incrementQuantity(quantityVIPMenor, setQuantityVIPMenor)
              }
              className="rounded-e-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Membresia alimentos*/}
        <div className="dark:bg-black/20 rounded-lg p-4">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gary-900">
            Membresia
          </p>
          <div className="relative flex items-center">
            <button
              onClick={() =>
                decrementQuantity(quantityMembresia, setQuantityMembresia)
              }
              className="rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              min="0"
              max="8"
              value={quantityMembresia}
              onChange={(e) => handleQuantityChange(e, setQuantityMembresia)}
              className=" border-x-0 h-11 text-center w-full py-2.5 text-gray-900 text-sm block dark:bg-teal-700 dark:text-white"
            />
            <button
              onClick={() =>
                incrementQuantity(quantityMembresia, setQuantityMembresia)
              }
              className="rounded-e-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="dark:bg-black/20 rounded-lg p-4">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gary-900">
            Membresia de alimentos
          </p>
          <div className="relative flex items-center">
            <button
              onClick={() =>
                decrementQuantity(
                  quantityMembresiaAlimentos,
                  setQuantityMembresiaAlimentos
                )
              }
              className="rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              min="0"
              max="8"
              value={quantityMembresiaAlimentos}
              onChange={(e) =>
                handleQuantityChange(e, setQuantityMembresiaAlimentos)
              }
              className=" border-x-0 h-11 text-center w-full py-2.5 text-gray-900 text-sm block dark:bg-teal-700 dark:text-white"
            />
            <button
              onClick={() =>
                incrementQuantity(
                  quantityMembresiaAlimentos,
                  setQuantityMembresiaAlimentos
                )
              }
              className="rounded-e-lg p-3 h-11 focus:ring-2 focus:outline-none dark:bg-teal-700 dark:border-gray-600"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="grid gap-2 place-content-center">
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">
          Monto total: ${totalAmount}
        </div>
        <button
          onClick={handleConfirmPurchase}
          className="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-teal-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          Confirmar reservacion
        </button>
      </div>
    </div>
  );
};

export default TicketForm;
