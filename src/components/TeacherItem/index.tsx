import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/47853932?s=460&u=ed1c995f8a2c2aada9ac4e885e0bece4915291d9&v=4" alt="Arthur Rabelo" />
                <div>
                    <strong>Arthur Rabelo</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Entusiasta no ensino das melhores tecnologias do mercado
                   </p>

            <footer>
                <p>Preço por hora
                       <strong>R$ 99,90</strong>
                </p>


                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp" />
                           Entrar em contato
                       </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
