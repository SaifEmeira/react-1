/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComp from './NavbarComp'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <NavbarComp />
            <Outlet />
            <Footer />

        </>
    )
}
