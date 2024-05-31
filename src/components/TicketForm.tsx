import { useState } from "react";

const TicketForm: React.FC = () => {
  const [quantityAdulto, setQuantityAdulto] = useState<number>(0);
  const TicketAdulto: number = 450;

  const [quantityMenor, setQuantityMenor] = useState<number>(0);
  const TicketMenor: number = 300;

  const [quantityVIP, setQuantityVIP] = useState<number>(0);
  const TicketVIP: number = 850;

  const [quantityVIPMenor, setQuantityVIPMenor] = useState<number>(0);
  const TicketVIPMenor: number = 650;

  const [quantityMembresia, setQuantityMembresia] = useState<number>(0);
  const Membresia: number = 950;

  const handleQuantityAdultoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuantityAdulto(parseInt(e.target.value, 10));
  };
  const handleQuantityMenorChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuantityMenor(parseInt(e.target.value, 10));
  };
  const handleQuantityVIPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityVIP(parseInt(e.target.value, 10));
  };

  const handleQuantityVIPMenorChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuantityVIPMenor(parseInt(e.target.value, 10));
  };

  const handleQuantityMembresiaChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuantityMembresia(parseInt(e.target.value, 10));
  };

  //Cantidad 1
  const incrementQuantityAdulto = () => {
    setQuantityAdulto(quantityAdulto + 1);
  };

  const decrementQuantityAdulto = () => {
    setQuantityAdulto(quantityAdulto - 1 < 0 ? 0 : quantityAdulto - 1);
  };
  //Cantidad 2
  const incrementQuantityMenor = () => {
    setQuantityMenor(quantityMenor + 1);
  };

  const decrementQuantityMenor = () => {
    setQuantityMenor(quantityMenor - 1 < 0 ? 0 : quantityMenor - 1);
  };
  //Cantidad 3
  const incrementQuantityVIP = () => {
    setQuantityVIP(quantityVIP + 1);
  };

  const decrementQuantityVIP = () => {
    setQuantityVIP(quantityVIP - 1 < 0 ? 0 : quantityVIP - 1);
  };
  //Cantidad 4
  const incrementQuantityVIPMenor = () => {
    setQuantityVIPMenor(quantityVIPMenor + 1);
  };

  const decrementQuantityVIPMenor = () => {
    setQuantityVIPMenor(quantityVIPMenor - 1 < 0 ? 0 : quantityVIPMenor - 1);
  };
  //Cantidad 5
  const incrementQuantityMembresia = () => {
    setQuantityMembresia(quantityMembresia + 1);
  };

  const decrementQuantityMembresia = () => {
    setQuantityMembresia(quantityMembresia - 1 < 0 ? 0 : quantityMembresia - 1);
  };

  const totalAmount: number =
    quantityAdulto * TicketAdulto +
    quantityMenor * TicketMenor +
    quantityVIP * TicketVIP +
    quantityVIPMenor * TicketVIPMenor +
    quantityMembresia * Membresia;
  return (
    <div className="max-w-xs mx-auto">
      <h2>Compra de Boletos</h2>
      <div>
        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gary-900">
          Cantidad de boletos Adulto
        </p>
        <div className="relative flex items-center max-w-[8rem]">
          <button
            onClick={decrementQuantityAdulto}
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
            value={quantityAdulto}
            onChange={handleQuantityAdultoChange}
            className=" border-x-0 h-11 text-center w-full py-2.5 text-gray-900 text-sm block dark:bg-teal-700 dark:text-white"
          />
          <button
            onClick={incrementQuantityAdulto}
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
      <div>
        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gary-900">
          Cantidad de boletos Menor
        </p>
        <div className="relative flex items-center max-w-[8rem]">
          <button
            onClick={decrementQuantityMenor}
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
            value={quantityMenor}
            onChange={handleQuantityMenorChange}
            className=" border-x-0 h-11 text-center w-full py-2.5 text-gray-900 text-sm block dark:bg-teal-700 dark:text-white"
          />
          <button
            onClick={incrementQuantityMenor}
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
      <p>Total a Pagar: ${totalAmount}</p>
    </div>
  );
};

export default TicketForm;
