import React from "react";

export default function pageHeader(props) {
    return (
        <header className=".pb-2 mb-5 mt-5 border-bottom">
            <h2>{props.name} <small className="fs-4 fw-lighter">{props.small}</small></h2>
        </header>
    )
}