import React from 'react';
import axios from 'axios';

function GitCard(props) {
    return (
        <div>
            <img src={props.data.avatar_url} />
            <h4>{props.data.name}</h4>
            <h5>{props.data.location}</h5>
        </div>
    )
}

export default GitCard;