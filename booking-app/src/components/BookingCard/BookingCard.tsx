import React, { useState } from "react";
import "./styles.scss";

interface BookingCardProps {
  id?: string;
  image?: string;
  date: string;
  mail: string;
  name1: string;
  name2: string;
  collaborating: boolean;
}

export const BookingCard = ({
  date,
  name1,
  name2,
  mail,
  image,
  collaborating,
}: BookingCardProps) => {
  const [confirmation, setConfirmation] = useState(collaborating);

  const confirmBooking = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    setConfirmation(!confirmation);
  };

  /* const buttonHandler =(event: React.MouseEvent<HTMLButtonElement>)=>{
      event.preventDefault();

  } */

  return (
    <div className="card-container">
      <div className="booking-info">
        <div className="image-container">
          <img src={image} alt="profilePic" className="booking-image" />
        </div>
        <section className="booking-info__date-section">
          <p className="booking-info__date-section--date">{date}</p>
          <p className="booking-info__date-section--guests">50</p>
        </section>
        <section className="booking-info__names-section">
          <p className="booking-info__names-section--names">
            {`${name1} & ${name2}`}
          </p>
          <p className="booking-info__names-section--mail">{mail}</p>
        </section>
      </div>
      {confirmation ? (
        <div className="booking-confirmation">
          <section className="booking-confirmation__confirm-section">
            <section
              className="booking-confirmation__confirm-section--button"
              onClick={confirmBooking}
              onKeyDown={confirmBooking}
            >
              Confirm Booking
            </section>
            <p className="booking-confirmation__confirm-section--text">
              Not my booking
            </p>
          </section>
        </div>
      ) : (
        <>
          <section
            className="booking-confirmation__connected"
            onClick={confirmBooking}
            onKeyDown={confirmBooking}
          >
            CONNECTED
          </section>
          <h1>HOLA</h1>
        </>
      )}
    </div>
  );
};
