import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import LogoPowerPrime from '../../public/images/header/logo/logo_powerprime-not-bg.png'
const Header: NextPage = () => {

    return (
        <>
            <div className={styles.header}>
                <div className={styles.contentHeader}>
                    <span className={styles.divLogo}>
                        <Image src={LogoPowerPrime} alt="Logo Power Prime" width="100px" height="75px" className={styles.logoPowerPrime} />
                    </span>
                    <span className={styles.navHeader}>
                        <ul>
                            <li><a href="#">Home</a></li>|
                            <li><a href="#">Loja</a></li>|
                            <li><a href="#">Sobre Nós</a></li>|
                            <li><a href="/contato">Contato</a></li>
                        </ul>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Header