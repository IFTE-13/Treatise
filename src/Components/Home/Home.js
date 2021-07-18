import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';



const Home = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://gentle-taiga-43045.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
    }, [])

    return (

        <div className="container">
            <form class="d-flex mt-2">
                <input className="form-control mx-2 btn-outline-secondary" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
            <div className="row d-flex justify-content-center">
                {
                    loading ?
                        <div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
                            <span className="visually-hidden"></span>
                        </div> :
                        books.map(details => <Details details={details}></Details>)
                }
            </div>


        </div>
    );
};

export default Home;