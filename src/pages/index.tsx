import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Main from '../components/Content/Main'




const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}

export default Home
