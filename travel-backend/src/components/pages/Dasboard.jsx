import React from "react";
import "../styles/Dasboard.css";

const Dashboard = () => {
  const bookings = [
    { id: 1, name: "John Doe", bookDate: "2025-02-20", duration: "5 Days", price: "$500" },
    { id: 2, name: "Jane Smith", bookDate: "2025-02-18", duration: "7 Days", price: "$700" },
  ];

  return (
    <div className="dashboard-container">
      <div className="stats-container">
        <div className="stat-box">Total Packages</div>
        <div className="stat-box">Total Bookings</div>
        <div className="stat-box">Total Earnings</div>
      </div>
      <div className="section-title">All Bookings</div>
      <div className="table-container">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Book Date</th>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.bookDate}</td>
                <td>{booking.duration}</td>
                <td>{booking.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;