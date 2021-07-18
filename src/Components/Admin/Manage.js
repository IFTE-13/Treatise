import React, { useEffect, useState } from 'react';
import AdminDetails from '../AdminDetails/AdminDetails';

const Manage = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://gentle-taiga-43045.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [books])

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center">
                <div className="row">
                    <AdminDetails books={books} />
                </div>
            </div>
        </div>
    );
};

export default Manage;