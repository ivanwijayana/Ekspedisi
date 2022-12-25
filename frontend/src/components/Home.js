import React from "react";
import HomeFooterA from "./mainpage/HomeFooterA";
import HomeFooterB from "./mainpage/HomeFooterB";
import HomeWrapper from "./mainpage/HomeWrapper";
import HomeHeader from "./header/HomeHeader";

function Home() {
    return (
        <div>
            <link rel="stylesheet" href="css/style-index.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

            <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
                crossorigin="anonymous"></script>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <script src="js/script.js"></script>
            <HomeHeader />
            <HomeWrapper />
            <HomeFooterA />
            <HomeFooterB />
        </div>
    )
}

export default Home;