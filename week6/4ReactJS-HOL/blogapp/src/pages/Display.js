import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Display = () => {
  const [myData, setMyData] = useState([]);

  const loadData = async () => {
    let api_url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(api_url);
    setMyData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1 className="text-center my-4">📄 Welcome to Display Page</h1>
      <div className="container">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {myData.map((key) => (
              <tr key={key.id}>
                <td>{key.userId}</td>
                <td>{key.id}</td>
                <td>{key.title}</td>
                <td>{key.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
