import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Work from "../component/Work";
import Project from "../component/Project";
import Testimonials from "../component/Testimonials";
import Feature from "../component/Feature";
import Faq from "../component/Faq";
import Contact from "../component/Contact";
import OurBlog from "../component/OurBlog";
import Footer from "../component/Footer";
import Test from "../component/Test";
import TestFaq from "../component/TestFaq";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Work />
            <Project />
            <Testimonials />
            <Feature />
            {/* <Faq /> */}
            <TestFaq />
            <Contact />
            <OurBlog />
            <Footer />
            {/* <Test /> */}
        </div>
    );
};

export default Home;
