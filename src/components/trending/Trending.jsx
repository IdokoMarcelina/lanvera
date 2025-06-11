import React, { useState } from 'react';

const Trending = () => {
  const [active, setActive] = useState('all');

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'apartment', label: 'Apartments' },
    { key: 'condo', label: 'Condo' },
    { key: 'villas', label: 'Luxury Villas' },
    { key: 'land', label: 'Land/plots' },
    { key: 'duplex', label: 'Duplex' },
  ];

  return (
    <div className="flex flex-col lg:m-10 lg:flex-row justify-between p-4">

      <div className="flex flex-row justify-between items-center  lg:block">
        <div>
          <h1 className="font-bold">
            <span className="text-[#916756]">TRENDING</span> PROPERTIES
          </h1>
          <p className="text-[#717171] hidden lg:block">
            Properties are listed by <span className="text-[#916756]">locations</span> or properties near you
          </p>
        </div>

        <div className="lg:hidden">
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className=" border-2 border-[#916756] rounded p-0.5 text-sm "
          >
            {categories.map((item) => (
              <option key={item.key} value={item.key}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ul className="hidden lg:flex gap-6 text-sm font-medium cursor-pointer">
        {categories.map((item) => (
          <li
            key={item.key}
            className="flex flex-col items-center"
            onClick={() => setActive(item.key)}
          >
            <span
              className={`mb-1 ${
                active === item.key ? 'text-black font-semibold' : 'text-[#717171]'
              }`}
            >
              {item.label}
            </span>
            {active === item.key && (
              <div className="w-8 h-2.5 rounded-t-full bg-black mt-1"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
