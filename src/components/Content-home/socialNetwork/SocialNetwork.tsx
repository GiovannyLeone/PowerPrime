import type { NextPage } from 'next'
import Link from 'next/link'
import AboutUs from '../aboutUs/AboutUs'
import stylesSocialNetwork from './SocialNetwork.module.scss'


const SocialNetwork: NextPage = () => {

    const blank = "_blank"
    const linkInstagram = "https://www.instagram.com/powerprime.br/"
    const linkFacebook = "https://www.facebook.com/powerprime.com.br"
    const linkWhatsApp = "https://api.whatsapp.com/send?phone=551138724433&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Power%20Prime%20quero%20conhecer%20seus%20produtos"
    const linkYoutube = "https://www.youtube.com/channel/UC_c0q28LHg_0SOdeVrmrPmg"
    return (
        <>
            <div id={stylesSocialNetwork.socialNetwork_aboutUs_footer}>
                <div id={stylesSocialNetwork.socialNetwork}>
                    <span>
                        <h4>Fique ligado nas <br />nossas novidades</h4>
                        <p>Confira seu estoque & <br />entre em contato conosco.</p>
                    </span>
                    <div className={stylesSocialNetwork.networkCard}>
                        <h5>Nossas Redes</h5><span></span>
                        <Link href={linkInstagram}>
                            <a target={blank}>
                                <button className={`${stylesSocialNetwork.btnNetwork} ${stylesSocialNetwork.btnNetworkInstgram}`}>Instagram</button>
                            </a>
                        </Link>
                        <Link href={linkFacebook}>
                            <a target={blank}>
                                <button className={`${stylesSocialNetwork.btnNetwork} ${stylesSocialNetwork.btnNetworkFacebook}`}>Facebook</button>
                            </a>
                        </Link>
                        <Link href={linkWhatsApp}>
                            <a target={blank}>
                                <button className={`${stylesSocialNetwork.btnNetwork} ${stylesSocialNetwork.btnNetworkWhastApp}`}>WhatsApp</button>
                            </a>
                        </Link>
                        <Link href={linkYoutube}>
                            <a target={blank}>
                                <button className={`${stylesSocialNetwork.btnNetwork} ${stylesSocialNetwork.btnNetworkYoutube}`}>YouTube</button>
                            </a>
                        </Link>
                    </div>
                </div>
                <AboutUs />
            </div>
        </>
    )
}

export default SocialNetwork