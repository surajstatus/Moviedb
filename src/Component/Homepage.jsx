import React, { useState } from 'react'
import * as Icons from 'react-bootstrap-icons';
import '../Style/Homepage.css';
import { NavLink, Route, Routes, } from 'react-router-dom';
import { Containers } from './Containter';
import Movies from './Movies';
import TopRated from './TopRated';
import Upcoming from './Upcoming';
import Movieinfo from './Movieinfo';

const Homepage = () => {
    const [inputValue, setInputValue] = useState('');

    return (

        <Containers.Provider value={{ inputValue }}>
            <div className="main" id='up'>
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ display:'flex', width: '23%' }}>
                    <div style={{display:'flex'}}>
                        <Icons.Justify size={25} className="MenuBtn" />
                    </div>
                    <NavLink to='' style={{ textDecoration: 'none', color: 'rgb(17, 17, 52)', display: 'flex' }}>
                        <div className="home" >MovieDb</div>
                    </NavLink></div>
                <div className="empty"></div>
                <div className="content">
                    <NavLink to='' style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.699)' }}>
                        <div className="Popular c-text">Popular</div>
                    </NavLink>

                    <NavLink to='/TopRated' style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.699)' }}>
                        <div className="TopRated c-text">Top Rated</div>
                    </NavLink>

                    <NavLink to='/Upcoming' style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.699)' }}>
                        <div className="Upcoming c-text">Upcoming</div>
                    </NavLink>

                    <div className="inputtxt"><input type="text" placeholder='Movie Name' onChange={(e) => setInputValue(e.target.value)} /> <button>Search</button></div>
                </div>
            </div>

            <div style={{ fontSize: '2.7em', width: '59px', position: 'fixed', bottom: '0', right: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <a href="#up"><Icons.ArrowUpCircleFill style={{ color: 'white' }} /></a>
            </div>

            <Routes>
                <Route path='' element={<Movies />}></Route>
                <Route path='TopRated' element={<TopRated />}></Route>
                <Route path='Upcoming' element={<Upcoming />}></Route>
                <Route path='Movieinfo' element={<Movieinfo />}></Route>
            </Routes>

        </Containers.Provider>

    )
}

export default Homepage
