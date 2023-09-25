'use client';
import Image from 'next/image'
import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import styles from './page.module.css'
import Idea from './components/bigIdea/Idea'
import Rules from './components/rules/Rules'
import Criteria from './components/criteria/Criteria';

export default function Home() {

  useEffect(() => {
    (
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    }
    )
  }, [])

  return (
    <div className={styles.container} >
      <Navbar />
      <Hero />
      <Idea />
      <Rules />
      <Criteria/>
    </div>
  )
}
