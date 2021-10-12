import { BookingList } from "./components/BookingList/BookingList";
import { BookingsHeader } from "./components/BookingsHeader/BookingsHeader";
import { useFetchBookings } from "./useFetchBookings";

function App() {
  const { data, error } = useFetchBookings();

  return (
    <>
      <BookingsHeader />
      <BookingList bookings={data} />
    </>
  );
}

export default App;
