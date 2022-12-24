import React from "react";
import HomeFooterA from "./mainpage/HomeFooterA";
import HomeFooterB from "./mainpage/HomeFooterB";
import HomeWrapper from "./mainpage/HomeWrapper";
import HomeHeader from "./header/HomeHeader";

function Home(){
    return(
        <div>
        <HomeHeader/>
        <HomeWrapper/>
        <HomeFooterA/>
        <HomeFooterB/>
        </div>
    )
}

export default Home;