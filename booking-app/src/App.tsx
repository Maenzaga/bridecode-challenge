import { useEffect, useState } from "react";
import api from "./api/bookings";
import "./App.scss";
import { BookingCard } from "./components/BookingCard/BookingCard";

function App() {
  const [bookings, setBookings] = useState<any[]>([]);

  const retrieveBookings = async () => {
    const response = await api.get("/bookedByCouples");
    console.log(response.data);
    return response.data;
  };

  const removeBookings = async (id: string) => {
    await api.delete(`/bookings/${id}`);
    const newBookingsList = bookings.filter((booking) => {
      return booking.id !== id;
    });

    setBookings(newBookingsList);
  };

  useEffect(() => {
    const getAllBookings = async () => {
      const allBookings = await retrieveBookings();
      if (allBookings) setBookings(allBookings);
    };
    getAllBookings();
  }, []);

  return (
    <>
      <header className="app-header">
        <h2 className="app-title">Your Booking</h2>
        <p className="app-subtitle">
          If a booking is missing, ask your couple to mark your venue as booked
          on the Bridebook app, and they will appear below automatically
        </p>
      </header>
      <main className="main-content">
        {bookings.map((booking) => {
          return (
            <BookingCard
              key={booking.id}
              image={booking.profilePhoto}
              name1={booking.partners[0]}
              name2={booking.partners[1]}
              mail={booking.users[0].contacts.email}
              date={booking.weddingDate}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
