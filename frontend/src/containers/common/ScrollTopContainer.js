import React, { Component } from "react";
import ScrollTop from "../../components/common/ScrollTop";

class ScrollTopContainer extends Component{

    componentDidUpdate(){
        let scroll = document.getElementsByClassName("fas fa-arrow-up");
        scroll.ScrollTop = 0;
    }

    render(){
        return <ScrollTop />
    }
}

export default ScrollTopContainer;