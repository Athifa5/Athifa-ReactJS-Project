import react from "react";
import Navbar from "../Nav";
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./mainpage.css";
import SingleColor from "./singlecolor";

import Values from 'values.js';


function Dispalycolorgenerator(){
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new Values('#f15025').all(10));


  const handleSubmit = (e) => {

    e.preventDefault();

    try {

      setError(false);

      let colors = new Values(color).all(10);

      setColorList(colors);

      toast.success('Colors generated successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } catch (error) {

      setError(true);

      console.log(error);

      toast.error('Invalid Input', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }

  };

  return (
    <div>
      <Navbar></Navbar>
      <h3 style={{fontSize:50, fontFamily: 'Kdam Thmor Pro',textAlign:"center"}}>Colors Generator</h3>

      <section className="container">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder='#f15025'
            name={color}
            className={`${error ? 'error' : null}`}
            onChange={(e) => setColor(e.target.value)}
          />

          <button className='btn' type='submit'>Generate Colors</button>
        </form>

      </section>

      <section className="colors">
        {colorList.map((color, index) => {
          return (
            <>
              <SingleColor key={index} {...color} index={index} />
            </>
          );
        })};
      </section>

      <ToastContainer />

    </div>
  )
}
export default Dispalycolorgenerator;