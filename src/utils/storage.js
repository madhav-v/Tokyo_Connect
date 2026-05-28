const BOOKINGS_KEY = "tokyo_connect_bookings";
const EVENTS_KEY = "tokyo_connect_events";

export function getBookings() {
  const data = localStorage.getItem(BOOKINGS_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveBooking(booking) {
  const bookings = getBookings();
  const updatedBookings = [...bookings, booking];
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updatedBookings));
}

export function deleteBooking(bookingId) {
  const bookings = getBookings();
  const updatedBookings = bookings.filter(
    (booking) => booking.id !== bookingId
  );
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updatedBookings));
}

export function getLocalEvents(defaultEvents) {
  const data = localStorage.getItem(EVENTS_KEY);
  return data ? JSON.parse(data) : defaultEvents;
}

export function saveLocalEvents(events) {
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
}
