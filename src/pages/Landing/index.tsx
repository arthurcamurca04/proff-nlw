import React from 'react';
import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';
import { Link } from 'react-router-dom';

function Landing(){
    return (
        <div id="page_landing">
            <div id="page_landing_content">
                <div className="logo_container">
                    <img src={LogoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={LandingImg} alt="Plataforma de estudos" className="hero_image"/>
               
                <div className="buttons_container">
                    <Link to='/study' className="study">
                        <img src={StudyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give_classes">
                        <img src={GiveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </Link>
                </div>
                <span className="total_connections">
                    Total de 200 conexões já realizadas <img src={PurpleHeartIcon} alt="Coração roxo"/>
                </span>

            </div>
        </div>
    );
}

export default Landing;