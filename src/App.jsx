import React, { Component } from "react"
import NavBar from "./navbar"
import CustomerList from "./customerlist"
import ShoppingCart from "./shoppingCart";
import Login from "./Login"
import Dashboard from "./dashboard";
import Nomatch from './nomatch'
// import { Route } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <div className=" container-fluid">
                    <Routes >
                        <Route path="/" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/customers" element={<CustomerList />} />

                        <Route path="/cart" element={<ShoppingCart />} />
                        <Route path="*" element={<Nomatch />} />

                    </Routes>
                </div>
            </BrowserRouter>

        );
    }
}