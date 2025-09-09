import { Link } from 'react-router-dom';

function BookingSuccess() {
  return (
    <div className="flex flex-col min-h-screen bg-white items-center justify-center">
      <h1 className="text-4xl font-bold text-green-600 mb-6">🎉 Booking Successful!</h1>
      <p className="mb-6 text-black">Your logistics vehicle booking has been confirmed.</p>
      <Link to="/">
        <button className="btn btn-primary">Go to Home</button>
      </Link>
    </div>
  );
}

export default BookingSuccess;
