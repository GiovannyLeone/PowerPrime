import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import $ from 'jquery/dist/jquery.slim'
import stylesMainIndex from './Main.index.module.scss'
import SocialNetwork from '../socialNetwork/SocialNetwork'
import svgPrinter from '../../../public/images/header/svg-animation/Printer.svg'
import chipPowerPrime from '../../../public/images/gallery-products/chip-powerprime.png'
import cartuchoPowerPrime from '../../../public/images/gallery-products/toner-hp-771a.png'
import powerPrimeInk from '../../../public/images/gallery-products/kit-504-70ml.png'
import poToner from '../../../public/images/gallery-products/hp-universal.png'
import dtfInk from '../../../public/images/gallery-products/dtf-ink.png'
import 'animate.css';


const MainIndex: NextPage = () => {

    const blank = "_blank"
    const linkLoja = "https://chipparacartuchos.com/"
    const linkWhatsApp = "https://api.whatsapp.com/send?phone=551138724433&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Power%20Prime%20quero%20conhecer%20seus%20produtos"

    //gallery of products

    const [index, setIndex] = useState(0)

    function animation() {
        $(".myImg").toggleClass('animate__fadeInLeft')
        $(".myImg").toggleClass('animate__fadeInRight')


    }

    const galleryImages: any = {
        images: [
            chipPowerPrime,
            cartuchoPowerPrime,
            powerPrimeInk,
            poToner,
            dtfInk,
        ],
        alt: [
            "Chip Power Prime",
            "Cartucho Power Prime",
            "Tintas Power Prime",
            "Pó de Toner",
            "Tintas DTF"
        ]
    }

    function loop(select: number) {
        animation()
        if (select == galleryImages.images.length) {
            return select = 0
        }
        if (select < 0) {
            return select = galleryImages.images.length - 1
        }
        return select
    }

    useEffect(() => {
        const interval = setInterval(
            () => setIndex(select => loop(select + 1))
            , 5000)

        return () => clearInterval(interval)
    })

    return (
        <>
            <div className={`${stylesMainIndex.wrapper}`}>
                <div className={`${stylesMainIndex.container} animate__animated animate__bounceInRight`}>
                    <div className={stylesMainIndex.apresentation}>
                        <div id={stylesMainIndex.imgBetterInk}>
                            <Image src={svgPrinter} width="400px" />
                        </div>
                        <div id={stylesMainIndex.betterInk}>
                            <h1 className={stylesMainIndex.textBetterInk}>A Melhor <br /> distribuidora de <br /> tintas do Brasil</h1>
                            <span className={stylesMainIndex.subTextBetterInk}>Há 18 anos levando qualidade <br /> de impressão até você!</span>
                        </div>
                    </div>
                    {/* Second Part */}
                    <div id={stylesMainIndex.bestPrinter}>
                        <h2>Garanta os melhores insumos para suas impressões</h2>
                        <div className={stylesMainIndex.galleryProducts}>
                            <span className={stylesMainIndex.selectProduct}>
                                <Image id={stylesMainIndex.selectedProduct} className="myImg animate__animated animate__fadeInLeft" src={galleryImages.images[index]} alt={galleryImages.alt[index]} />
                            </span>
                            <div className={stylesMainIndex.textGallery}>
                                <h3>Insumos de impressões <br />Power Prime</h3>
                                <p>confira seu estoque & <br />entre em contato</p>
                                <div className={stylesMainIndex.btnsContact}>
                                    <Link href={linkLoja}>
                                        <a target={blank}>
                                            <button>Loja</button>
                                        </a>
                                    </Link>
                                    <Link href={linkWhatsApp}>
                                        <a target={blank}>
                                            <button className={stylesMainIndex.linkWhatsApp}>WhastApp</button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div id={stylesMainIndex.controllersGallery}>

                            <button onClick={() => setIndex(select => loop(select = 0))}>Chips</button>
                            <button onClick={() => setIndex(select => loop(select = 1))}>Cartuchos</button>
                            <button onClick={() => setIndex(select => loop(select = 2))}>Tintas</button>
                            <button onClick={() => setIndex(select => loop(select = 3))}>Pó de Toner</button>
                            <button onClick={() => setIndex(select => loop(select = 4))}>DTF</button>

                        </div>
                    </div>
                    <SocialNetwork />
                </div>
            </div>
        </>
    )
}

export default MainIndex