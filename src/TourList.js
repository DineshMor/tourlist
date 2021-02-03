import React, { useState } from 'react';


const TourList = ({ data, tour }) => {
    const [ readMore, setReadmore ] = useState(false);

    return(
        <>
            {
                data.map(item => {
                    return (
                        <article className="box" key={item.id}>
                            <img src={item.image} />
                            <div className="detail">
                                <h2 className="head">
                                    {item.name}
                                    <span className="tour-price">{item.price}</span>
                                </h2>
                                <p className="info">
                                    {readMore ? item.info : `${item.info.substring(0, 200)}...`}
                                    <span className="readmore" onClick={ () => setReadmore(!readMore) }>
                                        {readMore ? 'show less' : 'read more'}
                                    </span>
                                </p>
                                <button className="dlt-btn" onClick={() => tour(item.id)}>
                                    not interested
                                </button>
                            </div>
                        </article>
                    );
                })
            }
        </>
    )
}

export default TourList;