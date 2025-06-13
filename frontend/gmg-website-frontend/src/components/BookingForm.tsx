import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Service {
  _id: string;
  name: string;
  price: number;
  duration: number;
}

interface FormData {
  name: string;
  serviceId: string;
  date: string;
}

function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    serviceId: "",
    date: "",
  });
  const [services, setServices] = useState<Service[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Fetch services
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/services", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
        setMessage("Error loading services");
      }
    };

    fetchServices();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const token = localStorage.getItem('token');
    if (!token) {
      setMessage("Please login to make a booking");
      navigate('/login');
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Booking created successfully!");
        setFormData({ name: "", serviceId: "", date: "" });
      } else {
        const data = await response.json();
        setMessage(data.message || "Failed to create booking. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      setMessage("Error connecting to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book a Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-amber-500 focus:border-amber-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">
            Service
          </label>
          <select
            id="service"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-amber-500 focus:border-amber-500"
            value={formData.serviceId}
            onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service._id} value={service._id}>
                {service.name} - ${service.price} ({service.duration} mins)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date & Time
          </label>
          <input
            id="date"
            type="datetime-local"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-amber-500 focus:border-amber-500"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-amber-600 text-white p-2 rounded-md hover:bg-amber-700 transition-colors ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Book Now"}
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-center ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default BookingForm;
