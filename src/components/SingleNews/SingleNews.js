import React from 'react';
import { Card } from 'react-bootstrap';
import "./SingleNews.css"

const SingleNews = (props) => {
    const { img, title } = (props.singleNews);
    return (
        <div className="news-card">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Text>
                {title}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
};

export default SingleNews;