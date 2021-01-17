import React from 'react'
import StyleTestimonals from './style'
import img1 from '../../assets/img/aluno1.png'

const Testimonals = () => {
    return (
        <StyleTestimonals >
            <div>
                <p className='testimonal-text'>Testemunho</p>
                <div className="student">
                    <img src={img1} alt="" />
                    <div className='name-student'>
                        <p>Nome</p>
                        <span>Estudante</span>
                    </div>
                </div>
            </div>
            <div>
                <p className='testimonal-text'>Testemunho</p>
                <div className="student">
                    <img src={img1} alt="" />
                    <div className='name-student'>
                        <p>Nome</p>
                        <span>Estudante</span>
                    </div>
                </div>
            </div>
            <div>
                <p className='testimonal-text'>Testemunho</p>
                <div className="student">
                    <img src={img1} alt="" />
                    <div className='name-student'>
                        <p>Nome</p>
                        <span>Estudante</span>
                    </div>
                </div>
            </div>
            
        </StyleTestimonals>
    )
}

export default Testimonals
