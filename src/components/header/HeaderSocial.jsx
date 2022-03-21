import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/candrasdk/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/candrasdkd?tab=repositories" target="_blank"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/candrasdk/" target="_blank"><BsInstagram /></a>
        </div>
    )
}

export default HeaderSocial