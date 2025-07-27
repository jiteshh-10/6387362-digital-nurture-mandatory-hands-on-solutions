import React from 'react';

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0,
    };
  }

  updateEntry = () => {
    this.setState(prevState => ({
      entryCount: prevState.entryCount + 1,
    }));
  };

  updateExit = () => {
    this.setState(prevState => {
      if (prevState.exitCount < prevState.entryCount) {
        return { exitCount: prevState.exitCount + 1 };
      } else {
        alert('Exit count cannot exceed entry count!');
        return null; 
      }
    });
  };

  render() {
    return (
      <div className="container text-center mt-5">
        <h2 className="mb-4">🚶‍♂️ Mall Visitor Counter</h2>
        <div className="row justify-content-center mb-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-success">Entered</h4>
                <p className="display-4">{this.state.entryCount}</p>
                <button className="btn btn-success" onClick={this.updateEntry}>
                  Login
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-danger">Exited</h4>
                <p className="display-4">{this.state.exitCount}</p>
                <button className="btn btn-danger" onClick={this.updateExit}>
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="alert alert-info mt-3">
          People currently inside: <strong>{this.state.entryCount - this.state.exitCount}</strong>
        </div>
      </div>
    );
  }
}

export default CountPeople;
