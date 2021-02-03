import React from 'react';

const NoTour = ({onRefresh}) => {
    return (
        <div className="no-data">
            <h2 className="no-tour-head">no tours left</h2>
            <button className="ref-btn"  onClick={ () => onRefresh() }>
                refresh
            </button>
        </div>
    )
}
export default NoTour;