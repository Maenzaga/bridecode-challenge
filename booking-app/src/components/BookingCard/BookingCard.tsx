import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./styles.scss";
import { useFetchBookings } from "../../useFetchBookings";

interface BookingCardProps {
  id?: string;
  image?: string;
  date: string;
  mail: string;
  name1: string;
  name2: string;
  collaborating: boolean;
  createdAt: string;
  tasksDone: number;
  tasksTotal: number;
  guestsInitialTarget: number;
}

export const BookingCard = ({
  date,
  name1,
  name2,
  mail,
  image,
  collaborating,
  createdAt,
  tasksDone,
  tasksTotal,
  guestsInitialTarget,
}: BookingCardProps) => {
  const [confirmation, setConfirmation] = useState(collaborating);
  const [text, setText] = useState("CONNECTED");
  const { removeBookings } = useFetchBookings();

  const completion = (tasksDone / tasksTotal) * 100;
  const guests = !guestsInitialTarget ? 0 : guestsInitialTarget;
  const confirmBooking = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    setConfirmation(!confirmation);
  };
  const deleteBooking = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    return removeBookings;
  };

  return (
    <div className="card-container">
      <div className="booking-info">
        <div className="image-container">
          <img src={image} alt="profilePic" className="booking-image" />
        </div>
        <section className="booking-info__date-section">
          <p className="booking-info__date-section--date">{date}</p>
          <p className="booking-info__date-section--guests">{guests}</p>
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
            <section
              className="booking-confirmation__confirm-section--text"
              onClick={deleteBooking}
              onKeyDown={deleteBooking}
            >
              Not my booking
            </section>
          </section>
        </div>
      ) : (
        <div className="booking-confirmation__container">
          <section
            className="booking-confirmation__container--connected"
            onClick={confirmBooking}
            onKeyDown={confirmBooking}
            onMouseOver={() => setText("DISCONNECT")}
            onFocus={() => setText("DISCONNECT")}
            onMouseLeave={() => setText("CONNECTED")}
          >
            {text}
          </section>
          <section className="booking-confirmation__container--info">
            <p className="booking-confirmation__container--info--text1">
              Added {createdAt}
            </p>
            <p className="booking-confirmation__container--info--text2">
              Checklist Completion
            </p>
            <ProgressBar
              completed={completion}
              bgColor="#2ebaa7"
              height="5px"
              isLabelVisible={false}
            />
          </section>
          <div />
        </div>
      )}
    </div>
  );
};
