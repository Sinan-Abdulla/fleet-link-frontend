import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-5xl mx-auto flex items-center justify-center">
                <Link to="/" className="text-white text-xl font-bold">
                    FleetLink
                </Link>
            </div>
        </nav>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center py-4 mt-12">
            © 2025 FleetLink - All rights reserved by ACME Industries Ltd
        </footer>
    );
}

function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />

            <main className="flex flex-col items-center justify-center flex-1 p-8">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
                    🚚 FleetLink
                    <br />
                    Logistics Vehicle Booking System
                </h1>

                <div className="space-x-4">
                    <Link to="/AddVehicle">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow">
                            Add Vehicle
                        </button>
                    </Link>

                    <Link to="/search&Book">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded shadow">
                            Search & Book Vehicle
                        </button>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Home;
