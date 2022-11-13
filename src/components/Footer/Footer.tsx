import type { NextPage } from 'next'
import Link from 'next/link'
import stylesFooter from './Footer.module.scss'




const Footer: NextPage = () => {

    const blank = "_blank"
    const linkAboutUs = "/#AboutUs_aboutUs__5odSJ"
    const linkLoja = "https://chipparacartuchos.com/"
    const linkContact = "/contato"

    const linkInstagram = "https://www.instagram.com/powerprime.br/"
    const linkFacebook = "https://www.facebook.com/powerprime.com.br"
    const linkWhatsApp = "https://api.whatsapp.com/send?phone=551138724433&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Power%20Prime%20quero%20conhecer%20seus%20produtos"
    const linkYoutube = "https://www.youtube.com/channel/UC_c0q28LHg_0SOdeVrmrPmg"
    return (
        <>
            <div id={stylesFooter.footer}>
                <div id={stylesFooter.listFooter}>
                    <div className={stylesFooter.footerPowerprime}>
                        <ul className={stylesFooter.listMapSite}>
                            <li>
                                <p>Power Prime</p>
                            </li>
                            <li>
                                <Link href={linkAboutUs}>
                                    <a>Sobre Nós</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={linkContact}>
                                    <a>Contato</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={linkLoja}>
                                    <a target={blank}>Loja</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={stylesFooter.footerNetwork}>
                        <ul className={stylesFooter.listIcons}>
                            <li>
                                <p>Siga-nos</p>
                            </li>
                            <div className={stylesFooter.divNetwork}>
                                <li>
                                    <Link href={linkInstagram}>
                                        <a target={blank}>
                                            <span className={stylesFooter.iconNetwork}></span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={linkFacebook}>
                                        <a target={blank}>
                                            <span className={stylesFooter.iconNetwork}></span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={linkWhatsApp}>
                                        <a target={blank}>
                                            <span className={stylesFooter.iconNetwork}></span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={linkYoutube}>
                                        <a target={blank}>
                                            <span className={stylesFooter.iconNetwork}></span>
                                        </a>
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div id={stylesFooter.infoFooter}>
                    <p>&copy; 2022 Power Prime. Todos os direitos reservados</p>
                </div>
            </div>

        </>
    )
}

export default Footer