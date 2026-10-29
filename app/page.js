"use client";

import { useRef } from "react";
import Modal from "@/components/Modal";
import Pill from "@/components/Pill";
import styles from "./page.module.css";

export default function Home() {
  const modalRef = useRef(null);

  function openModal() {
    if (modalRef.current && !modalRef.current.open) {
      modalRef.current.showModal();
    }
  }

  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <div className={styles.pills}>
        <Pill onClick={openModal} />
        <Pill type="secondary" onClick={openModal}>
          Secondary
        </Pill>
      </div>
      <Modal ref={modalRef} />
    </main>
  );
}
