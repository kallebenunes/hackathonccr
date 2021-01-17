import React from 'react'
import Header from '../../components/Header'
import ContainerInfo from '../../components/ContainerInfo';
import Testimonals from '../../components/Testimonals';


const Home = () => {
    return (
        <>
            <Header/>
            <ContainerInfo/>       
            <Testimonals color='pink'/>     
        </>
    )
}

export default Home

