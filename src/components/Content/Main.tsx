import type { NextPage } from 'next'
import Image from 'next/image'
import svgPrinter from '../../public/images/header/svg-animation/Printer.svg'
import stylesMain from '../Content/Main.module.scss'

const Main: NextPage = () => {

    return (
        <>
            <div className={stylesMain.container}>
                <div className={stylesMain.apresentation}>
                    <div id={stylesMain.imgBetterInk}>
                        <Image src={svgPrinter} width="400px" />
                    </div>
                    <div id={stylesMain.betterInk}>
                        <h1 className={stylesMain.textBetterInk}>A Melhor <br /> distribuidora de <br /> tintas do Brasil</h1>
                        <span >Há 18 anos levando qualidade <br /> de impressão até você!</span>
                    </div>
                </div>
                {/* Second Part */}
                <div id={stylesMain.bestPrinter}>
                    <h2>Garanta os melhores insumos para suas impressões</h2>
                    <div className={stylesMain.galleryProducts}>
                        <span id={stylesMain.selectedProduct}></span>
                        <div className={stylesMain.textGallery}>
                            <h3>Insumos de impressões <br />Power Prime</h3>
                            <p>confira seu estoque & <br />entre em contato</p>
                            <div className={stylesMain.btnsContact}>
                                <button>Loja</button>
                                <button>WhastApp</button>
                            </div>
                        </div>
                    </div>
                    <div id={stylesMain.controllersGallery}>
                    <button>Chips</button>
                    <button>Cartuchos</button>
                    <button>Tintas</button>
                    <button>Pó de Toner</button>
                    <button>DTF</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main