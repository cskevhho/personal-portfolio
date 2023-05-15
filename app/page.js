"use client";
import React, { useState } from 'react';
import Image from 'next/image.js';
import Footer from './Footer.js';
import Header from "./Header.js";
import { getCatFact } from './catFacts.js';
import styles from './page.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
  const [catFact, setCatFact] = useState("");

  const getFact = async () => {
    const fact = await client.fetchQuery('catFact', getCatFact);
    setCatFact(fact);
  };

  return (
    
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
        <h1><p>Hi there 👋!</p></h1>
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
            <br></br>
          </p>
          <div className={styles.iconContainer}>
            <a href="https://www.linkedin.com/in/kevinhh/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
            <a href="https://github.com/cskevhho" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} />
            </a>
          </div>
          <Footer />
        </div>
      </main>
  );
}
