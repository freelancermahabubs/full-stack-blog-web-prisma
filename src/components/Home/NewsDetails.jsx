import React from 'react';
import parse from 'html-react-parser';
const NewsDetails = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                          <img src={props.details['img1']}/>
                          <h4 className="my-3">{props.details['title']}</h4>
                          {parse(
                             `${props.details['long_des']}`
                          )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;