import type { NextPage } from 'next'
import Image from 'next/image'
import stylesAboutUs from './AboutUs.module.scss'
import LogoPowerPrime from '../../../public/images/header/logo/poweprime-black.png'
import Footer from '../../Footer/Footer'




const SocialNetwork: NextPage = () => {
    return (
        <>
            <div id={stylesAboutUs.aboutUs}>
                <h6>Sobre Nós</h6>
                <div className={stylesAboutUs.contentAboutUs}>
                    <span className={stylesAboutUs.contentImageAboutUs}>
                        <Image src={LogoPowerPrime} className={stylesAboutUs.imageAboutUs} width="250px" height="250px" />
                    </span>
                    <span className={stylesAboutUs.contentTextAboutUs}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut luctus vestibulum eros. Phasellus ac nibh sem. Ut pulvinar sollicitudin massa,
                            et auctor leo vehicula a. In ultricies sodales neque nec consectetur. Mauris vehicula
                            ullamcorper velit non tristique. Nam porta ex tempor urna tincidunt, sed commodo lectus
                            vehicula. Ut a leo sem. Fusce molestie pharetra libero in consequat. Ut non tincidunt justo. Aliquam et tristique enim.</p>
                    </span>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SocialNetwork