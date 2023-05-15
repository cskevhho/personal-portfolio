"use client";
import React, { useState } from 'react';
import Image from 'next/image.js';
import Footer from './Footer.js';
import Header from "./Header.js";
import { getCatFact } from './catFacts.js';
import styles from './page.module.css';
import Head from 'next/head';

export default function Home() {
  const [catFact, setCatFact] = useState("");

  const getFact = async () => {
    const fact = await client.fetchQuery('catFact', getCatFact);
    setCatFact(fact);
  };

  return (
    
      <main className={styles.main}>
        <Header />
        <title>Computer Science Undergraduate Student, Toronto ON, Kevin Ho</title>
        <div className={styles.center}>
        <p><h1>Hi there 👋!</h1></p>
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
  );
}
