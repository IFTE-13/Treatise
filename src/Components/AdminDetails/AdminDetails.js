import React, { useState } from 'react';
import logo1 from '../../icons/Group 33150.png';
import logo2 from '../../icons/Group 307.png';
import './AdminDetails.css';

const AdminDetails = ({ books }) => {
  const [book, setBook] = useState([]);

  console.log('clicked');
  const deleteBook = id => {
    fetch(`https://gentle-taiga-43045.herokuapp.com/deleteBook/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => setBook(data))
  }

  return (
    <div className="mt-5 card" style={{ width: "60rem" }}>
      <p className="text-center mt-3"> <strong>Manage Books</strong> <hr style={{ backgroundColor: 'black' }} className="w-100" /></p>
      <div className=" d-flex justify-content-evenly">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" style={{ width: "12rem" }}>Name</th>
              <th scope="col" style={{ width: "12rem" }}>Author</th>
              <th scope="col" style={{ width: "12rem" }}>Price</th>
              <th scope="col" style={{ width: "12rem" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              books.map(details => (
                <tr>
                  <td style={{ width: "12rem" }}>{details.name}</td>
                  <td style={{ width: "12rem" }}>{details.author}</td>
                  <td style={{ width: "12rem" }}>${details.price}</td>
                  <td style={{ width: "12rem" }}>
                    <div>
                      <img className="logo" src={logo2} alt="" />
                      <img className="logo" onClick={() => deleteBook(details._id)} src={logo1} alt="" />
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default AdminDetails;