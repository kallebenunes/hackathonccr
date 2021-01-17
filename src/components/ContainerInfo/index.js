import React from 'react'
import ContainerInfoStyle from './style'
import image from '../../assets/img/Rectangle.jpg'


const ContainerInfo = () => {
    return (
        
        <ContainerInfoStyle>
            <div className='text'>
                <h1>Conectando os jovens e as escolas ao mundo digital</h1>
                <p>+200.000 escolas beneficiadas</p>
                <p>+1.000.000 jovens impactados</p>

            </div>
            <img src={image} alt="" />
        </ContainerInfoStyle>
        
    )
}

export default ContainerInfo
