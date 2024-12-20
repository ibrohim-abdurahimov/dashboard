import React, { useEffect } from 'react'
import './Dashboard.css'
import { NavLink, Outlet } from 'react-router-dom'
import axios from 'axios'
import { useStore } from '../../zustand'
import { IoHome, IoStatsChart, IoCard, IoBuild, IoPerson, IoDocument, IoRocketSharp } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";



const Dashboard = () => {
    const token = useStore(state => state.token)
    const logout = useStore(state => state.logout)
    useEffect(() => {
        axios
            .get('https://dummyjson.com/auth/me', {
                headers: {
                    Authorization: token
                }
            })
            .then(res => {
                console.log(res);

            })
            .catch(res => {
                console.log(res);
                logout()
            })
    }, [])
    return (
        <div className='flex  bg-dashboard bg-no-repeat bg-center p-2.5 gap-6 bg-cover'>
            <div className='nav w-80 h-[97.9vh] sticky top-0 left-0 overflow-auto text-white p-5 rounded-lg text-sm font-semibold flex flex-col'>
                <div className='flex-1'>
                    <h2 className='tite py-9 text-sm'>VISION UI FREE</h2>
                    <ul className='mt-5'>
                        <li>
                            <NavLink className={`py-3 px-4 mb-2 flex gap-2 items-center`} to={'dashboard'}>
                                <span className='p-2 bg-[#1A1F37] rounded-xl'>
                                    <IoHome />
                                </span>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={`py-3 px-4 mb-2 flex gap-2 items-center`} to={'tables'}>
                                <span className='p-2 bg-[#1A1F37] rounded-xl'>
                                    <IoStatsChart />
                                </span>
                                <p>Tables</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={`py-3 px-4 mb-2 flex gap-2 items-center`} to={'billing'}>
                                <span className='p-2 bg-[#1A1F37] rounded-xl'>
                                    <IoCard />
                                </span>
                                <p>Billing</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={`py-3 px-4 mb-2 flex gap-2 items-center`} to={'rtl'}>
                                <span className='p-2 bg-[#1A1F37] rounded-xl'>
                                    <IoBuild />
                                </span>
                                <p>RTL</p>
                            </NavLink>
                        </li>
                    </ul>
                    <h2 className='mt-6 mb-6'>ACCOUNT PAGES</h2>
                    <ul>
                        <li>
                            <NavLink className={`py-3 px-4 mb-2 flex gap-2 items-center`} to={'profile'}>
                                <span className='p-2 bg-[#1A1F37] rounded-xl'>
                                    <IoPerson />
                                </span>
                                <p>Profile</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={`py-3 px-4 mb-2 flex gap-2 items-center`} to={'/login'}>
                                <span className='p-2 bg-[#1A1F37] rounded-xl'>
                                    <IoDocument />
                                </span>
                                <p>Log In</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={`py-3 px-4 mb-2 flex gap-2 items-center`} to={'/login'}>
                                <span className='p-2 bg-[#1A1F37] rounded-xl'>
                                    <IoRocketSharp />
                                </span>
                                <p>Log Up</p>
                            </NavLink>
                        </li>
                    </ul>

                </div>
                <div onClick={() => logout()} className='flex items-center gap-2'>
                    <CiLogout className='text-2xl font-bold'/>
                    <p className='text-xl'>Log out</p>
                </div>
            </div>
            <div className='home flex-1'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard