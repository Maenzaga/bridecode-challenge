import "./styles.scss";
import { Booking } from "../../models/Booking";
import { BookingCard } from "../BookingCard/BookingCard";

type BookingListProps = {
  bookings: Booking[];
};

export const BookingList = ({ bookings }: BookingListProps) => (
  <main className="main-content">
    {bookings.map((booking) => {
      return (
        <BookingCard
          key={booking.id}
          image={booking.profilePhoto}
          name1={booking.partners[0]}
          name2={booking.partners[1]}
          mail={booking.users[0].email}
          date={booking.weddingDate}
          collaborating={booking.collaborating}
        />
      );
    })}
  </main>
);
