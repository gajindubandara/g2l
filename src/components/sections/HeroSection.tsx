import React from 'react';
import {useNavigate} from "react-router-dom";

export const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const sectionId = href.replace(/^#/, '');
        const element = document.getElementById(sectionId);

        if (element) {
            navigate(`#${sectionId}`);
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
    return (
        <section className="home-section home-full-height  bg-gradient" id="home" style={{background: "transparent"}}>
            <div className="titan-caption">
                <div className="caption-content">
                    <div className="logo-container" style={{textAlign: 'center', margin: '20px 0'}}>
                        <img
                            className="logo-img"
                            src="https://res.cloudinary.com/dkznriytt/image/upload/t_720/v1721718424/g2-site/a7admjkajwxxs72k69m2.png"
                            alt="Logo"
                        />
                    </div>
                    <a
                        className="section-scroll btn hero-btn btn-lg"
                        href="#services"
                        onClick={(e) => handleLinkClick(e, '#services')}
                    >Learn More</a>
                </div>
            </div>
        </section>
    );
};
