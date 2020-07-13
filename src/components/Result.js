import React from 'react';
import { Link } from 'react-router-dom';

function Result(props) {
  return (
        <li className="result">
            <h2>{props.data.post_name}</h2>
            <p>{props.data.post_content}</p>
            <Link to={`/details/${props.data.id}`}>View Comments</Link>
        </li>
  );
}

export default Result;
