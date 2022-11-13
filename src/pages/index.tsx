import type { NextPage } from 'next'
import Header from '../components/Header/Header'
import MainIndex from '../components/Content-home/main-index/Main-index'

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <MainIndex />
        </>
    )
}

export default Home
