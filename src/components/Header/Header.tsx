import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Home.module.scss'
import LogoPowerPrime from '../../public/images/header/logo/poweprime-black.png'
import favicon from '../../public/images/header/logo/favicon-svg.svg'

const Header: NextPage = () => {

    const blank = "_blank"
    const linkHome = "/"
    const linkAboutUs = "/#AboutUs_aboutUs__5odSJ"
    const linkLoja = "https://chipparacartuchos.com/"
    const linkContact = "/contato"

    function titlePage() {

        if (typeof window !== "undefined") {
            let urlComplete = window.location.href;

            const pathSplit:string = urlComplete.split("/")[3]           

            const title: string = pathSplit == "" ? "Power Prime | Home" : "/" || pathSplit == "contato" ? "Power Prime | Contato" : "contato"
            
            return title
        }
    }
    
    return (
        <>
        <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon"/>
        <title>{titlePage()}</title>    
        </Head>
            <div className={styles.header}>
                <div className={styles.contentHeader}>
                    <span className={styles.divLogo}>
                        <Image src={LogoPowerPrime} alt="Logo Power Prime" width="80px" height="80px" className={styles.logoPowerPrime} />
                    </span>
                    <span className={styles.navHeader}>
                        <ul>
                            <li>
                                <Link href={linkHome}>
                                    <a>Home</a>
                                </Link>
                            </li>|
                            <li>
                                <Link href={linkLoja}>
                                    <a target={blank}>Loja</a>
                                </Link>
                            </li>|
                            <li>
                                <Link href={linkAboutUs} >
                                    <a>Sobre Nós</a>
                                </Link>
                            </li>|
                            <li>
                                <Link href={linkContact}>
                                    <a>Contato</a>
                                </Link>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Header