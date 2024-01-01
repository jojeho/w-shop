'use client'
import React, { useState } from 'react';
import Nav from "../components/header/Nav";
import TopNav from "../components/header/TopNav"
import DetailNav from "../components/header/detail_nav";
import Recoment from '@/components/home/recoment';
import Image from 'next/image'
import { Button, Divider, Link } from "@nextui-org/react";

import Kakao from "../components/footer/Kakao"

import Deliver from '@/components/footer/Deliver';
import Info from '@/components/footer/Info'

import About from "../components/footer/About"
import Notice from '../components/footer/Notice';
import TrendingSlider from '../components/home/TrendingSlider';

// import Cards from "../component/main/cards"
// App.tsx
import Myheader  from '@/components/header/Myheader';

function Tt()
{
  return (
  <div className='h-2xl bg-red-200'>
  <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li className="me-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li className="me-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li className="me-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="default-tab-content">
    <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div>
  </div>
  )
}

export default function Home() {

  const inputElement = React.useRef(null)
  const [isLoading, setCount] = useState(false);

  return (

    // <main className='flex flex-col flex-grow  text-gray-300  '>
      <main className="light light:bg-white"> 
      <TrendingSlider></TrendingSlider>
     <div className='px-20 flex flex-col gap-12'>
       <Recoment ></Recoment>
       <Divider></Divider>
        <ul className='flex flex-row gap-20 flex-wrap'>
          <li><Kakao></Kakao></li>
          <li><Notice></Notice></li>
          <li><Info></Info></li>
          <li><Deliver></Deliver></li>
        </ul>
        <About></About>
        </div>

    </main>

  )
}
