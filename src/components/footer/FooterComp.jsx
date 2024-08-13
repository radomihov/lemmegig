"use client";

import SocialLink from "./SocialLink.jsx";

import {Footer} from "flowbite-react";
import { BsFacebook, BsGithub } from "react-icons/bs";
function FooterComp() {
    return (
        <>
            <Footer container>
                <Footer.Copyright href="#" by="Rado Mihov" year={2024}/>
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="https://www.facebook.com/radomihov" icon={BsFacebook}/>
                    <Footer.Icon href="https://github.com/radomihov" icon={BsGithub}/>
                </div>
                <Footer.LinkGroup>
                    <Footer.Link href="/about">За нас</Footer.Link>
                    <Footer.Link href="/affiche">Афиш</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    );
}

export default FooterComp