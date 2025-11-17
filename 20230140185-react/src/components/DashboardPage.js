import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [userEmail, setUserEmail] = useState('');

  // Update jam setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Ambil data user (jika disimpan di localStorage)
  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg text-center transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Dashboard
        </h1>

        <p className="text-lg text-gray-700 mb-2">
          {userEmail ? `Halo, ${userEmail}!` : 'Selamat Datang di Dashboard Anda 🎉'}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Sekarang jam: <span className="font-semibold">{time}</span>
        </p>

        <div className="flex flex-col gap-4 items-center">
          <div className="bg-blue-50 p-4 rounded-lg shadow-inner w-full">
            <p className="text-gray-700">
              “Setiap langkah kecil menuju tujuan adalah bagian dari kesuksesan besar.”
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="py-2 px-6 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
