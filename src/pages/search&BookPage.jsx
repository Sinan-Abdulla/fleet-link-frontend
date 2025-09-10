import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../footer/footer';

function SearchAndBook() {
    const [capacityRequired, setCapacityRequired] = useState('');
    const [fromPincode, setFromPincode] = useState('');
    const [toPincode, setToPincode] = useState('');
    const [startTime, setStartTime] = useState('');
    const [vehicles, setVehicles] = useState([]);

    const navigate = useNavigate();

    const formatStartTime = (time) => {
        if (!time) return '';
        return new Date(time).toISOString();
    };

    const handleSearch = async () => {
        try {
            const formattedStartTime = formatStartTime(startTime);
            const res = await axios.get('http://localhost:9000/api/vehicles/available', {
                params: {
                    capacityRequired,
                    fromPincode,
                    toPincode,
                    startTime: formattedStartTime
                }
            });
            console.log('Fetched Vehicles:', res.data); // Debug log
            setVehicles(res.data);
        } catch (err) {
            console.error('Error fetching vehicles:', err);
            alert('Failed to fetch vehicles. Check console for details.');
        }
    };

    const handleBook = async (vehicleId) => {
        try {
            const formattedStartTime = formatStartTime(startTime);
            await axios.post('http://localhost:9000/api/bookings', {
                vehicleId,
                fromPincode,
                toPincode,
                startTime: formattedStartTime,
                customerId: 'hardcoded123'
            });

            navigate('/booking-success');
        } catch (err) {
            console.error('Error booking vehicle:', err);
            const message = err.response?.data?.message || 'Failed to book vehicle. Check console for details.';
            alert(message);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-base-200">
            <div className="max-w-5xl mx-auto flex-1 p-6">
                <h2 className="text-3xl font-bold mb-6 text-center">Search Vehicles</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <input
                        type="number"
                        placeholder="Capacity Required (Kg)"
                        value={capacityRequired}
                        onChange={e => setCapacityRequired(e.target.value)}
                        className="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="From Pincode"
                        value={fromPincode}
                        onChange={e => setFromPincode(e.target.value)}
                        className="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="To Pincode"
                        value={toPincode}
                        onChange={e => setToPincode(e.target.value)}
                        className="input input-bordered w-full"
                    />
                    <input
                        type="datetime-local"
                        value={startTime}
                        onChange={e => setStartTime(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>

                <button
                    onClick={handleSearch}
                    className="btn btn-primary w-full mb-6"
                >
                    Search
                </button>

                <div className="space-y-4">
                    {vehicles.length === 0 && <p className="text-gray-500 text-center">No vehicles found.</p>}

                    {vehicles.map(v => (
                        <div
                            key={v._id}
                            className="card bg-base-100 shadow-xl border border-gray-200"
                        >
                            <div className="card-body md:flex md:justify-between md:items-center">
                                <div>
                                    <h3 className="card-title">{v.name}</h3>
                                    <p>Capacity: {v.capacityKg} Kg | Tyres: {v.tyres}</p>
                                    <p>Estimated Duration: {v.estimatedRideDurationHours} hours</p>
                                </div>
                                <button
                                    onClick={() => handleBook(v._id)}
                                    className="btn btn-success mt-4 md:mt-0"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <Link to="/">
                        <button className="btn btn-secondary">
                            ← Go to Home
                        </button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default SearchAndBook;
