import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/dashboard/home/Home'
import Dashboard from '../pages/dashboard/Dashboard'
import Log from '../pages/log/Log'
import Auth from '../pages/auth/Auth'
import Billing from '../pages/dashboard/billing/Billing'
import Tables from '../pages/dashboard/tables/Tables'
import Rtl from '../pages/dashboard/rtl/Rtl'
import Profile from '../pages/dashboard/profile/Profile'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Log />} />
                </Route>
                <Route path='/' element={<Auth />}>
                    <Route path='dashboard' element={<Dashboard />} >
                        <Route path='dashboard' element={<Home/>} />
                        <Route path='tables' element={<Tables />} />
                        <Route path='billing' element={<Billing />} />
                        <Route path='rtl' element={<Rtl />} />
                        <Route path='profile' element={<Profile />} />
                    </Route>
                </Route>
                <Route path='/login' element={<Log />} />
            </Routes>
        </>
    )
}

export default Routers