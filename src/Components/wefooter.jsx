import React from "react";
import burger from "../Assets/buger.jpg";
import styled from "styled-components";
export default function Footer() {
  const Footer = styled.footer`
    background-color: black;
    color: white;
    padding: 7rem 0;
    .right {
      h1 {
        color: orange;
        font-size: 3.5rem;
      }
    }
    .inner-right {
      gap: 5rem;
    }
    li {
      list-style: none;
      margin: 1rem;
      &:nth-child(1) {
        color: gray;
        font-size: 2rem;
        margin-left: -30px;
      }
    }
  `;
  return (
    <>
      <Footer>
        <div className="footer d-flex justify-content-around ">
          <div className="left">
            <img src={burger} alt="" />
          </div>
          <div className="right">
            <h1 className="text-center">Zomato</h1>
            <div className="inner-right d-flex ">
              <div className="company">
                <li>COMPANY</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Who We Are</li>
              </div>
              <div className="foodies">
                <li>FOR FOODIES</li>
                <li>community</li>
                <li>Blogger Help</li>
                <li>Mobile Apps</li>
                <li>code of product</li>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}