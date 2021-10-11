import "./styles.scss";

interface BookingCardProps {
  id?: string;
  date: string;
  name1: string;
  name2: string;
  mail: string;
  image?: string;
}

export const BookingCard = (props: BookingCardProps) => {
  const { date, name1, name2, mail, image } = props;
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt="profilePic" className="booking-image" />
      </div>
      <div className="booking-info">
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
      <div className="booking-confirmation">
        <p className="booking-confirmation__connected">CONNECTED</p>
        <section className="booking-confirmation__confirm-section">
          <button
            type="button"
            className="booking-confirmation__confirm-section--button"
          >
            Confirm Booking
          </button>
          <p className="">Not my booking</p>
        </section>
      </div>
    </div>
  );
};
