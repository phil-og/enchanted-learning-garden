import {useEffect} from "react";
import * as React from "react";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import About from "../../pages/About";
import './PageContainer.scss'
import Vision from "../../pages/Vision";

export default function PageContainer(props: {pageContent: string}) {
    const [pageContent, setPageContent] = React.useState("HOME");


    useEffect(() => {
        setPageContent(props.pageContent)
    }, [props.pageContent])


    const renderSwitchPageContent = (param: string) => {
        switch(param) {
            case 'HOME':
                return <Home/>;
            case 'CONTACT':
                return <Contact/>;
            case 'ABOUT':
                return <About/>;
            case 'VISION':
                return <Vision/>;
            default:
                return <Home/>;
        }
    }


    return (
        <div className="page-container">

            <img src="/assets/home-image.jpg" alt="image" />

            {renderSwitchPageContent(pageContent)}
        </div>
    );
}