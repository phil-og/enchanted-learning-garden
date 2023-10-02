import {useEffect} from "react";
import * as React from "react";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import About from "../../pages/About";

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
            default:
                return <Home/>;
        }
    }


    return (
        <>
            {renderSwitchPageContent(pageContent)}
        </>
    );
}