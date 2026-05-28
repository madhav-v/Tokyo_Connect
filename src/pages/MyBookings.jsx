import { useEffect, useState } from "react";
import { Calendar, MapPin, Trash2 } from "lucide-react";
import { deleteBooking, getBookings } from "../utils/storage";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  function handleCancel(id) {
    deleteBooking(id);
    setBookings(getBookings());
  }

  return (
    <section className="page-container py-16">
      <div className="mb-10">
        <p className="text-tokyoRed font-semibold mb-2">Local demo bookings</p>
        <h1 className="text-4xl font-bold text-ink">My Bookings</h1>
        <p className="text-gray-600 mt-3">
          These bookings are saved only in your browser using localStorage.
        </p>
      </div>

      {bookings.length === 0 ? (
        <div className="card p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">No bookings yet</h2>
          <p className="text-gray-600">
            Register for an event to see your demo booking here.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="card p-6">
              <span className="inline-block bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full mb-4">
                {booking.status}
              </span>

              <h2 className="text-2xl font-bold mb-3">{booking.eventTitle}</h2>

              <p className="flex items-center gap-2 text-gray-600 mb-2">
                <Calendar size={18} /> {booking.eventDate}
              </p>

              <p className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin size={18} /> {booking.eventLocation}
              </p>

              <div className="border-t pt-4 space-y-2">
                <p>
                  <strong>Name:</strong> {booking.user.name}
                </p>
                <p>
                  <strong>Participants:</strong> {booking.participants}
                </p>
                <p>
                  <strong>Total:</strong> ¥{booking.total.toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => handleCancel(booking.id)}
                className="mt-6 inline-flex items-center gap-2 text-red-600 font-semibold"
              >
                <Trash2 size={18} />
                Cancel Booking Locally
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyBookings;
