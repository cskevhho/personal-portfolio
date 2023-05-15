"use client";
import Image from 'next/image.js';
import Footer from './Footer.js';
import Header from "./Header.js";
import React, { useState } from 'react';
import { getCatFact } from './catFacts.js';
import styles from './page.module.css';

export default function Home() {
  const [catFact, setCatFact] = useState("");

  const getFact = async () => {
    const fact = await client.fetchQuery('catFact', getCatFact);
    setCatFact(fact);
  };

  return (
    <client>
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          <h1>Hi there 👋!</h1>
        </div>
        <div className={styles.center}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.logo}
              src="/cat wow.svg"
              alt="It's a cat!"
              width={360}
              height={74}
            />
          </div>
          <p style={{ textAlign: 'center', marginTop: '0.2rem' }}>
            Things are in motion, stay tuned... 
            <br />
            Here is a cat in the meantime!
          </p>
          <Footer />
        </div>
      </main>
    </client>
  );
}
