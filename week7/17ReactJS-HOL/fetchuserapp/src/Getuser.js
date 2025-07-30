import React, { Component } from 'react';

class Getuser extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      firstName: '',
      image: '',
      loading: true,
      error: false
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      const user = data.results[0];
      this.setState({
        title: user.name.title,
        firstName: user.name.first,
        image: user.picture.large,
        loading: false
      });
    } catch (err) {
      console.error("Failed to fetch user:", err);
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { title, firstName, image, loading, error } = this.state;

    if (loading) return <p className="status">Loading user...</p>;
    if (error) return <p className="status error">Failed to fetch user data.</p>;

    return (
      <div className="card">
        <img src={image} alt={`${firstName}'s avatar`} />
        <h2>{title} {firstName}</h2>
      </div>
    );
  }
}

export default Getuser;
