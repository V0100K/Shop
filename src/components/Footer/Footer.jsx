import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../utils/routes';
import s from '../../styles/Footer.module.css';
import LOGO from '../../img/LOGO 1.svg';

const Footer = () => {
    return (
        <section className={s.footer}>
            <div className={s.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="STUFF"/>
                </Link>
            </div>
            <div className={s.rights}>
                Developed by {""}
                <a href="https://github.com/"
            target="_blank" rel="noreferrer">
                    Vitaliy
            </a>
            </div>
<div className={s.socials}>
    <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
        </svg>
    </a>
    <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
        </svg>
    </a>
    <a href="https://youtube.com/" target="_blank" rel="noreferrer">
        <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
        </svg>
    </a>
</div>
            
        </section>
    );
};

export default Footer;