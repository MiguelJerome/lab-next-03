import Image from "next/image";
import Menu from "./Menu";

import logo from "../public/logo.png"
import styles from "../styles/Header.module.css"

export default function Header() {
    return <header className={styles.header}>
        <Image src={logo} alt="Logo" className={styles.logo} />

        <h1 className={styles.titre}>Titre de page</h1>

        <Menu />
    </header>
}