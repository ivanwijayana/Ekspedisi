import React from "react";

function HomeHeader(){
    return(
      <nav class="nav">
        <div class="wrapper">
        <div class="logo"><a href="#home">Go_Express</a></div>
        <div class="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Tentang</a></li>
            <li><a href="#tutors">Cek Resi</a></li>
            <li><a href="#contact">kontak</a></li>
            <li><a href="" class="tbl-biru">Indonesia</a></li>
            <li><a href="/login" class="tbl-biru" >Masuk</a></li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default HomeHeader;