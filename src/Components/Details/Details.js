import React from 'react';
import { useHistory } from 'react-router';
import './Details.css';
import Zoom from 'react-reveal/Zoom';

const Details = ({ details }) => {
    const history = useHistory();
    const handleBuy = (name) => {
        history.push(`/checkout/${details._id}`);
    }
    return (
        <div className="mt-3 col-md-3 mx-2 pb-3">
            <Zoom left>
                <div>
                    <div className="p-3">
                        <div className="card curd cartBook" style={{ width: "18rem" }}>
                            <div className="d-flex justify-content-center">
                                <img src={details.imgUrl} alt="" />
                            </div>
                            <div className="card-body text-dark text-center">
                                <h4 className="card-text text-center"><strong>{details.name}</strong></h4>
                                <p className="text-center">{details.author}</p>
                                <div className="d-flex justify-content-around info">
                                    <h3>${details.price}</h3>
                                    <button className="btn btn-secondary" onClick={() => handleBuy(details.name)}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default Details;