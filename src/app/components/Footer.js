import React from 'react';
import footerStyles from '@/app/styles/footer.module.css';
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
};

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.content}>
                <div className={footerStyles.top}>
                    <div className={footerStyles['logo-details']}>
                        <span className={footerStyles.logo_name}>MovieMate</span>
                    </div>
                    <div className={footerStyles[`media-icons`]}>
                        <Link href="#"><i > <FaTwitter /> </i> </Link>
                        <Link href="#"><i > <FaLinkedinIn /> </i></Link>
                        <Link href="#"><i > <FaGithub /> </i></Link>
                    </div>
                </div>
                <div className={footerStyles['link-boxes']}>
                    <ul className={footerStyles.box}>
                        <li className={footerStyles.link_name}>Company</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Get started</a></li>
                    </ul>
                    <ul className={footerStyles.box}>
                        <li className={footerStyles.link_name}>Services</li>
                        <li><a href="#">Documentaries</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Short films</a></li>
                        <li><a href="#">Shows</a></li>
                    </ul>
                    <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                        <li className={footerStyles.link_name}>Subscribe</li>
                        <li><input type="text" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Subscribe" /></li>
                    </ul>
                </div>
            </div>
            <div className={footerStyles['bottom-details']}>
                <div className={footerStyles.bottom_text}>
                    <span className={footerStyles.copyright_text}> Copyright © 2023
                        <Link href="/"> MovieMate.</Link> All rights reserved </span>
                    <span className={footerStyles.policy_terms}>
                        <Link href="/">Privacy policy</Link>
                        <Link href="/">Terms & condition</Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
