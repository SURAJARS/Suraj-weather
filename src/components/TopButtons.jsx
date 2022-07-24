import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "New Delhi",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Kolkata",
    },
    {
      id: 4,
      title: "Bengaluru",
    },
    {
      id: 5,
      title: "Chennai",
    },
  ];

  return (
    <>
    <p className="Name">Suraj Weather App</p>
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium ethan"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
    </>
  );
}
export default TopButtons;
