import React from "react";
import PropTypes from "prop-types";


export const Jumbotron = () => {
    return (
        <>
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">A WARM WELCOME</h1>
                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ex expedita possimus placeat obcaecati, commodi distinctio debitis quia totam deserunt eaque consequatur, quibusdam accusamus soluta ad, sint et? Explicabo, molestiae.</p>
                <br />
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                    </p>
            </div>
        </div>
        </>
    )
}
