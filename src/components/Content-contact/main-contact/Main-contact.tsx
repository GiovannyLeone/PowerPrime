import type { NextPage } from 'next'
import Image from 'next/image'
import svgTalkWithUs from '../../../public/images/header/svg-animation/get_in_touch.svg'
import stylesMainContact from './Main.contact.module.scss'
import Form from "../form/Form";
import Footer from "../../Footer/Footer";
import 'animate.css';


const MainContact: NextPage = () => {
    return (
        <>
            <div className={stylesMainContact.wrapper}>
                <div className={`${stylesMainContact.container} animate__animated animate__bounceInRight`}>
                    <div id={stylesMainContact.talkWithUs}>
                        <h1>Entre em contato</h1>
                        <Image src={svgTalkWithUs} />
                    </div>
                    <Form />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default MainContact