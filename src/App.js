// src/App.js

import React from 'react';
import './style.css'; // Import your CSS file

function CustomerDetails() {
    return (
        <div className="container">
            <div className="nav">
                <a href="">BACK</a>
            </div>
            <div className="box">
                <h2>CUSTOMER DETAILS</h2>
            </div>
            <div className="search">
                <input type="text" name="search" id="search" placeholder="Search" /> <button id="btn_search"> SUBMIT </button>
            </div>
            <div className="table">
                <table id="tb">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Full Name</th>
                            <th>Company Name</th>
                            <th>Email Address</th>
                            <th>Password</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th id="action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>Hello</td>
                            <td>
                                <button id="edit">EDIT</button> <button id="delete">DELETE</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CustomerDetails;
