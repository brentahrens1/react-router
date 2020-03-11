import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Employee() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    const items = await data.json()
    setItems(items.data)
    console.log(items.data)
  }
  return (
    <div className="employees">
        {items.map(item => (
          <div className="employees__content">
          <h1 key={item.id}><Link to={`employees/${item.id}`}>{item.employee_name}</Link></h1>
          <h4 key={item.id}>{item.employee_salary}</h4>
          </div>
      ))}
    </div>
  );
}

export default Employee;
