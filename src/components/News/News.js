import React from 'react';
import useAuth from '../../hooks/useAuth';
import SingleNews from '../SingleNews/SingleNews';
import "./News.css"

const News = () => {

    const {news} = useAuth();

    return (
        <div>
            <div className="news-header">
                <h2>Health News</h2>
            </div>
            <div className="news-container container mt-5 mb-5">
                {
                    news.map(singleNews => <SingleNews key={singleNews.id} singleNews={singleNews} ></SingleNews>)
                }
            </div>
        </div>
    );
};

export default News;