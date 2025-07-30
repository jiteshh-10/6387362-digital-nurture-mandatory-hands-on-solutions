import React from 'react';

const IndianPlayers = () => {
  const T20 = ['Shubman', 'Ishan', 'Hardik', 'Surya', 'Axar'];
  const Ranji = ['Pujara', 'Rahane', 'Saha', 'Mayank', 'Vihari'];

  const merged = [...T20, ...Ranji]; // Array merging
  const [first, second, third, ...rest] = merged; // Destructuring

  const odd = merged.filter((_, i) => i % 2 === 0);
  const even = merged.filter((_, i) => i % 2 !== 0);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🇮🇳 Indian Player Split</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card border-info shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Odd Team</h5>
              <ul className="list-group">
                {odd.map((p, i) => <li className="list-group-item" key={i}>{p}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-warning shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Even Team</h5>
              <ul className="list-group">
                {even.map((p, i) => <li className="list-group-item" key={i}>{p}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianPlayers;
