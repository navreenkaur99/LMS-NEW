import axios from 'axios';
import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import StarRatingApp from "./StarRatingApp";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function FavoriteCards({ data }) {
    const [fill, setFill] = useState(data.favourite);

    const handleToggleFavorite = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/api/v1/updatefavcards/${data._id}`, {
                favourite: !fill
            });
            if (response.data.success) {
                setFill(!fill);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="bg-white rounded-lg shadow-md relative">
                <Col  style={{ marginBottom: "20px" }}>
                    <Card style={{ width: '18rem' }}>
                        <a href={data.link}>
                            <img
                                style={{ height: '12rem' }}
                                src="https://mlyhfwsozyid.i.optimole.com/w:1920/h:1080/q:mauto/f:best/https://timezest.com/wp-content/uploads/How-To-Optimize-Your-Helpdesk-Starter-Pack-in-2022.png"
                                className="card-img-top"
                                alt="..."
                            />
                        </a>
                        {/* <div style={{ cursor: "pointer", position: "absolute", top: "10px", right: "10px" }}>
                            <FontAwesomeIcon
                                icon={faHeart}
                                size="2x"
                                color={fill ? "#294573" : "gray"}
                                onClick={handleToggleFavorite}
                                className="w-6 h-6 cursor-pointer"
                            />
                        </div> */}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">{data.para}</h2>
                            {/* Pass cardId to StarRatingApp */}
                            <StarRatingApp initialRating={data.rating} cardId={data._id} />
                        </div>
                    </Card>
                </Col>
            </div>
        </div>
    );
}
