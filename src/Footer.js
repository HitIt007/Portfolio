import React from "react";
import styled from "styled-components";
import gmail_icon from "./icons/gmail-logo.png";
import linkedin_icon from "./icons/linkedin-logo.png";



const FooterWrapper =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    background-color: gray;
    font-size: 1rem;
    .icon-container{
            a{
                margin: 1rem;
                img{
                    height: 2.5rem;
                    width: 2.5rem;
            }
        }
    }
`
function Footer() {
    return(
        <FooterWrapper>
            <div className="icon-container">
                <a href="https://www.linkedin.com/in/utkarsh-kumar-9006791b3/">
                    <img src={linkedin_icon} />
                </a>
                <a href="mailto:https://mail.google.com/mail/u/0/?pli=1#inbox">
                    <img src={gmail_icon} />
                </a>
            </div>
            © Copyright 2020
            

        </FooterWrapper>);

}

export default Footer;