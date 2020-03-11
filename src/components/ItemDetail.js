import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem()
    console.log(match)
  }, [])

  const [item, setItem ] = useState({})

  const fetchItem = async () => {
    const fetchItem = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${match.params.id}`
    )
    const item = await fetchItem.json()
    setItem(item)
  }

  return (
    <div className="employees">
        <h1>{item.title}</h1>
    </div>
  );
}

export default ItemDetail;