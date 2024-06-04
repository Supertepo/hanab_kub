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
          className="bg-teal-50 borde border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-teal-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
        />
      </div>

      <br />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-4">
        <div className="dark:bg-black/20 rounded-lg p-4">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gary-900 text-center">
            Cantidad de boletos Adulto
          </p>
          <div className="relative flex items-center">
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
        <div className="dark:bg-black/20 rounded-lg p-4">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gary-900">
            Cantidad de boletos Menor
          </p>
          <div className="relative flex items-center">
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
        <div className="dark:bg-black/20 rounded-lg p-4">
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gary-900">
            Cantidad de boletos VIP
          </p>
          <div className="relative flex items-center">
            <button
              onClick={decrementQuantityVIP}
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
              value={quantityVIP}
              onChange={handleQuantityVIPChange}
              className=" border-x-0 h-11 text-center w-full py-2.5 text-gray-900 text-sm block dark:bg-teal-700 dark:text-white"
            />
            <button
              onClick={incrementQuantityVIP}
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
            Cantidad de boletos VIP Menor
          </p>
          <div className="relative flex items-center">
            <button
              onClick={decrementQuantityVIPMenor}
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
              value={quantityVIPMenor}
              onChange={handleQuantityVIPMenorChange}
              className=" border-x-0 h-11 text-center w-full py-2.5 text-gray-900 text-sm block dark:bg-teal-700 dark:text-white"
            />
            <button
              onClick={incrementQuantityVIPMenor}
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
            Cantidad de boletos Membresia
          </p>
          <div className="relative flex items-center">
            <button
              onClick={decrementQuantityMembresia}
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
              value={quantityMembresia}
              onChange={handleQuantityMembresiaChange}
              className=" border-x-0 h-11 text-center w-full py-2.5 text-gray-900 text-sm block dark:bg-teal-700 dark:text-white"
            />
            <button
              onClick={incrementQuantityMembresia}
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
      <p className="text text-center">Total a Pagar: ${totalAmount}</p>
    </div>
  );
};

export default TicketForm;
