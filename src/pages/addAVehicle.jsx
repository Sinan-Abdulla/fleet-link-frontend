import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../footer/footer';

function AddVehicle() {
  const [name, setName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [tyres, setTyres] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !capacity || !tyres) {
      alert('Please fill in all fields');
      return;
    }
    try {
      await axios.post('http://3.106.114.241:9000/api/vehicles', {
        name,
        capacityKg: capacity,
        tyres
      });
      
      alert('Vehicle added successfully');
      setName('');
      setCapacity('');
      setTyres('');
    } catch (error) {
      console.error(error);
      alert('Failed to add vehicle');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-base-200">
      <div className="max-w-md mx-auto mt-10">
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Vehicle</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="input input-bordered w-full"
            />

            <input
              type="number"
              placeholder="Capacity (Kg)"
              value={capacity}
              onChange={e => setCapacity(e.target.value)}
              className="input input-bordered w-full"
            />

            <input
              type="number"
              placeholder="Tyres"
              value={tyres}
              onChange={e => setTyres(e.target.value)}
              className="input input-bordered w-full"
            />

            <button type="submit" className="btn btn-primary w-full">
              Add Vehicle
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/">
              <button className="btn btn-secondary">
                ← Go to Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AddVehicle;
