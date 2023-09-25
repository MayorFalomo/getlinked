import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import styles from './page.module.css'
import Idea from './components/bigIdea/Idea'

export default function Home() {
  return (
    <div className={styles.container} >
      <Navbar />
      <Hero />
      <Idea/>
    </div>
  )
}
