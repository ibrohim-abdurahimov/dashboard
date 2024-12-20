import React from 'react'
import { IoWalletSharp, IoDocument, IoCart, IoArrowForward } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import './Home.css'
import { color } from 'chart.js/helpers';
import { FaRegFaceLaugh } from "react-icons/fa6";
import { BarChart, LineChart } from '@mui/x-charts';
import { red } from '@mui/material/colors';

import c from '../../../assets/content.png'

const Home = () => {
  const settings = {
    width: 200,
    height: 200,
    value: 90,
    startAngle: -100,
    endAngle: 100
  }
  const setting = {
    width: 200,
    height: 200,
    value: 95,
    startAngle: 70,
    endAngle: -150
  }
  const uData = [5000, 3000, 2000, 2780, 1890, 2390, 3490, 3850, 4000, 3500];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 5500, 2850, 2000];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
    'Page H',
    'Page I',
    'Page J',
  ]
  return (
    <>
      <section className='grid grid-cols-4 gap-6 text-white mt-6'>
        <div className='card rounded-[20px] p-[17.5px] flex items-center justify-between'>
          <div>
            <p className='text-[#A0AEC0] text-xs'>Today’s Money</p>
            <div className='flex gap-1 mt-1 items-end'>
              <p className='text-lg font-bold'>$53,000</p>
              <p className='text-sm font-bold text-[#01B574]'>+55%</p>
            </div>
          </div>
          <div>
            <div className='p-3 rounded-xl bg-[#0075FF] shadow-md'>
              <IoWalletSharp className='text-xl' />
            </div>
          </div>
        </div>
        <div className='card rounded-[20px] p-[17.5px] flex items-center justify-between'>
          <div>
            <p className='text-[#A0AEC0] text-xs'>Today’s Users</p>
            <div className='flex gap-1 mt-1 items-end'>
              <p className='text-lg font-bold'>2,300</p>
              <p className='text-sm font-bold text-[#01B574]'>+5%</p>
            </div>
          </div>
          <div>
            <div className='p-3 rounded-xl bg-[#0075FF] shadow-md'>
              <FaGlobe className='text-xl' />
            </div>
          </div>
        </div>
        <div className='card rounded-[20px] p-[17.5px] flex items-center justify-between'>
          <div>
            <p className='text-[#A0AEC0] text-xs'>New Clients</p>
            <div className='flex gap-1 mt-1 items-end'>
              <p className='text-lg font-bold'>+3,052</p>
              <p className='text-sm font-bold text-[#E31A1A]'>-14%</p>
            </div>
          </div>
          <div>
            <div className='p-3 rounded-xl bg-[#0075FF] shadow-md'>
              <IoDocument className='text-xl' />
            </div>
          </div>
        </div>
        <div className='card rounded-[20px] p-[17.5px] flex items-center justify-between'>
          <div>
            <p className='text-[#A0AEC0] text-xs'>Total Sales</p>
            <div className='flex gap-1 mt-1 items-end'>
              <p className='text-lg font-bold'>$173,000</p>
              <p className='text-sm font-bold text-[#01B574]'>+8%</p>
            </div>
          </div>
          <div>
            <div className='p-3 rounded-xl bg-[#0075FF] shadow-md'>
              <IoCart className='text-xl' />
            </div>
          </div>
        </div>
      </section>
      <section className='mt-6 grid grid-cols-2 text-white gap-5'>
        <div className='py-9 px-8 bg-mark bg-no-repeat bg-center bg-cover flex flex-col content-between gap-32 rounded-[20px]'>
          <div>
            <p className='text-sm text-[#A0AEC0]'>Welcome back,</p>
            <h2 className='mt-3 text-3xl font-bold'>Mark Johnson</h2>
            <p className='mt-5 text-base text-[#A0AEC0] w-40'>
              Glad to see you again!
              Ask me anything.
            </p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='text-sm'>Tap to record</p>
            <IoArrowForward className='text-xs' />
          </div>
        </div>
        <div className='flex gap-7'>
          <div className='card rounded-[20px] p-7'>
            <h2 className='text-lg font-bold'>Satisfaction Rate</h2>
            <p className='text-[#A0AEC0] text-sm mt-1'>From all projects</p>
            <Gauge className='block m-auto'
              cornerRadius={10}
              innerRadius={75}
              {...settings}
              sx={(theme) => ({
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 30,
                },
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: '#0175fe',
                },
                [`& .${gaugeClasses.valueText} text`]: {
                  fill: "#fff" // <-- change text color
                },
              })}
            />
            <div className='p-3 rounded-[50%] bg-[#0075FF] shadow-md inline-block absolute top-[195px] left-[109px]'>
              <FaRegFaceLaugh className='text-xl' />
            </div>
            <div className='cart flex justify-between pt-4 pl-6 pr-4 pb-5 gap-5'>
              <p className='text-[#A0AEC0] text-xs'>0%</p>
              <div className='text-center'>
                <h2 className='text-3xl font-bold'>95%</h2>
                <p className='text-[#A0AEC0] text-xs'>Based on likes</p>
              </div>
              <p className='text-[#A0AEC0] text-xs'>100%</p>
            </div>
          </div>
          <div className='card flex-1 rounded-[20px] bg-transparent p-7'>
            <h2 className='text-3xl font-bold'>Referral Tracking</h2>
            <div className='flex gap-12 mt-16'>
              <div className='flex-1'>
                <div className='cart p-5'>
                  <p className='text-[#A0AEC0] text-xs'>Invited</p>
                  <h2>145 people</h2>
                </div>
                <div className='cart p-5 mt-5'>
                  <p className='text-[#A0AEC0] text-xs'>Bonus</p>
                  <h2>1,465</h2>
                </div>
              </div>
              <div>
                <Gauge
                  cornerRadius={10}
                  innerRadius={75}
                  text={'9.3'}
                  {...setting}
                  sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 30,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: '#05C696',
                    },
                    [`& .${gaugeClasses.valueText} text`]: {
                      fill: "#fff" // <-- change text color
                    },
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex mt-5 gap-6'>
        <div className='rounded-xl'>
          <LineChart
            className='bg-[#0f286ea2] rounded-xl'
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                id: 1,
                color: '#0259C6',
                data: [2, 5.5, 2, 8.5, 3.5, 5],
                area: true,
              },
              {
                id: 2,
                color: '#0111e1',
                data: [5, 1, 3, 5.5, 1.5, 1],
                area: true,
              },
            ]}
            width={900}
            height={300}
          />
        </div>
        <div className='bg-[#0f286ea2] rounded-xl flex-1'>
          <BarChart
            width={500}
            height={300}
            series={[
              { data: pData, label: 'pv', id: 'pvId' },
              { data: uData, label: 'uv', id: 'uvId' },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
          />
        </div>
      </section>
      <section className='mt-6'>
        <img src={c} alt="" />
      </section>
    </>
  )
}

export default Home