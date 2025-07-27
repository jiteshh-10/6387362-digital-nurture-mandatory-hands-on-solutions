import React, { useState } from 'react';

function OfficeList() {
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  // 🏢 Updated Office Data with Real Images
  const offices = [
    {
      name: 'Giggster NYC Office',
      rent: 75000,
      address: 'Manhattan, New York',
      image: 'https://via.placeholder.com/400x200.png?text=Office+Space',
    },
    {
      name: 'Peerspace Workspace',
      rent: 59000,
      address: 'San Francisco, California',
      image: 'https://www.peerspace.com/resources/wp-content/uploads/sites/2/2021/04/office-space.jpg',
    },
    {
      name: 'Office Villas Suite',
      rent: 68000,
      address: 'Long Island, New York',
      image: 'https://www.officevillas.com/wp-content/uploads/2020/07/modern-office-space-rental.jpg',
    },
    {
      name: 'Instant Offices Bellevue',
      rent: 82000,
      address: 'Bellevue, Washington',
      image: 'https://www.instantoffices.com/media/filer_public_thumbnails/filer_public/71/6f/716ff94c-1a63-4b49-b7cc-d70a9f71b57e/office-space-in-bellevue.jpg__1200x800_q85_subsampling-2.jpg',
    },
  ];

  // 🔍 Filter and Sort
  const filtered = offices
    .filter(o => o.address.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortAsc ? a.rent - b.rent : b.rent - a.rent);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">🏢 Office Space Listings</h2>
      
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50 me-3"
          placeholder="Search by address..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="btn btn-secondary" onClick={() => setSortAsc(!sortAsc)}>
          Sort by Rent {sortAsc ? '🔼' : '🔽'}
        </button>
      </div>

      <div className="row">
        {filtered.map((office, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <div className="card shadow-sm">
              <img src={office.image} alt={office.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{office.name}</h5>
                <p className="card-text">
                  <strong>Address:</strong> {office.address}<br />
                  <strong>Rent:</strong> 
                  <span
                    style={{
                      color: office.rent > 60000 ? 'green' : 'red',
                      fontWeight: 'bold',
                      marginLeft: '8px',
                    }}
                  >
                    ₹{office.rent.toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfficeList;
