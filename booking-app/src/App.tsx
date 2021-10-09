import "./App.scss";

function App() {
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
        <div className="card-container">
          {/* <div className="image-container" /> */}
          <div className="booking-info">
            <section className="booking-info__date-section">
              <p className="booking-info__date-section--date">17 Oct, 2022</p>
              <p className="booking-info__date-section--guests">70 guests</p>
            </section>
            <section className="booking-info__names-section">
              <p className="booking-info__names-section--names">
                Sarah & Chris
              </p>
              <p className="booking-info__names-section--mail">
                sarah-chris@gmail.com
              </p>
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
      </main>
    </>
  );
}

export default App;
