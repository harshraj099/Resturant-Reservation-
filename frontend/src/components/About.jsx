import React from "react";
import{Link}from "react-router-dom";
import { HiOutlineArrowNarrowRight} from "react-icons/hi";

const About=()=>{
    return(
    <section className="about" id="about">
    <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing re serious about is food</p>
            </div>
            <p className="mid">
                Lorem ipsum dolor sit amet, consectetur
                 adipisicing elit. Veritatis, commodi. Laborum
                  molestiae veniam repellat ex ipsum ipsam cumque! Culpa 
                  nihil ab id, pariatur amet saepe dignissimos temporibus quas
                   nesciunt illo sint vero fugiat dolorum suscipit aperiam animi quae 
                   nisi, mollitia expedita. Nisi repellat fugiat soluta
                 quaerat dolore rem voluptatum corporis.
            </p>
            <Link to={"/"}>Explore Menu{" "}
            <span>
            <HiOutlineArrowNarrowRight />
            </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
    </div>
    </section>
    );
};

export default About;