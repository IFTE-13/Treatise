import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loggedInInfo } from '../Login/LoginManager';

const Orders = () => {

  const { id } = useParams();

  const [redirect, setRedirect] = useState();

  const [books, setBooks] = useState({});

  const [orders, setOrders] = useState([]);

  const loggedUser = loggedInInfo();

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    fetch('https://gentle-taiga-43045.herokuapp.com/books')
      .then(res => res.json())
      .then(data => {
        data.forEach(book => {
          if (book._id === id) {
            setBooks(book);
          }
        })
      })

    fetch('https://gentle-taiga-43045.herokuapp.com/orders?email=' + loggedUser.email, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setOrders(data)
        data.forEach(books => {
          const total = data.reduce((total, price) => total + parseFloat(price.books.price), 0)
          setTotalPrice(total)
        })
      });
  }, [id, redirect, loggedUser.email, setBooks])

  return (
    <div className="container mt-2">

      <div className="d-flex justify-content-between mt-5">
        <h6 className="">You have ordered total : {orders.length} book/s </h6> <h6>Your total price is BDT {totalPrice}</h6>

      </div>
      <p>Please wait for a moment or reload the page</p>

      <table className="table table-striped">
        <thead className="table-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Delivery</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map(book =>
            (<tr key={book._id}>
              <td>{book.books.name}</td>
              <td>{book.books.author}</td>
              <td>1</td>
              <td>${book.books.price}</td>
              <td>{(new Date(book.from)).toDateString('dd/MM/yyyy')}</td>
            </tr>)
            )
          }
        </tbody>

      </table>


    </div>
  );
};

export default Orders;
