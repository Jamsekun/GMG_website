import React from "react";
import { Book, ShoppingCart } from "lucide-react";
import { CircleButton } from "./CircleButton";

const CarWash: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-orange-100">
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-16 sm:gap-12 md:gap-16 md:px-8">
        <header className="flex flex-col items-center text-center gap-4 sm:gap-6">
          <h1 className="text-yellow-900 font-extrabold tracking-wide leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            CAR WASH BOOKING
          </h1>
          <p className="max-w-2xl sm:max-w-3xl md:max-w-4xl text-yellow-900/90 text-base sm:text-lg md:text-xl tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a iaculis diam,
            id elementum dui. Pellentesque in elit eget velit dapibus pretium.
          </p>
        </header>

        <section className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12 lg:gap-20">
          <CircleButton
            title="Book Now!"
            icon={Book}
            onClick={() => alert("Booking flow coming soon!")}
          />
          <CircleButton
            title="Buy our products!"
            icon={ShoppingCart}
            onClick={() => alert("Store coming soon!")}
          />
          
        </section>
      </main>
    </div>
  );
};

export default CarWash;
