import React from "react";

function HomeWrapper() {
    return (
        <div class="wrapper">

            <section id="home">
                <img id="gambarhome" src="/kenapa/home.jpg" />
                <div class="kolom">
                    <p class="deskripsi">Kirim Paket #dirumahaja</p>
                    <h2>Tetap Sehat, Tetap Semangat</h2>
                    <p></p>
                    <p><a href="" class="tbl-pink">Go Express</a></p>
                </div>
            </section>

            <section id="courses">
                <div class="kolom">
                    <h2>Tentang Kami</h2>
                    <br /><br />
                    <div>
                        <img id="tentang" src="/kenapa/tentang.png" />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p class="deskripsi">Kenapa Sih Harus GoExpress ?</p>

                    <h2>3 Poin Penting</h2>

                    <p><a href="" class="tbl-biru">Tiga Poin Penting</a></p>
                    <br />
                    <div>
                        <img id="grup1" src="/kenapa/Group1.png" />
                        <img id="grup2" src="/kenapa/Group2.png" />
                        <img id="grup3" src="/kenapa/Group3.png" /> <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </section>

            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="login-panel panel panel-info">
                        <div class="panel-heading">
                            <h3 class="heading"><i class="fa fa-phone"></i> Hubungi Kami</h3>
                        </div>
                        <div class="panel-body">
                            <section class="col-sm-4 maincontent">
                                <form>
                                    <address>
                                        <i class="fa fa-map-marker"></i>
                                        <strong>Go Express</strong>
                                        <br />
                                        Jl. Cigagak, cipadung
                                        Ci Biru, kota Bandung
                                        Kode Pos: 22381<br />
                                        <i class="fa fa-phone-square"></i> Telp : +62 632 331234<br />
                                        <i class="fa fa-fax"></i> Fax  : +62 632 331116
                                    </address>
                                </form>
                            </section>

                        </div>
                    </div>
                </div>
            </div>

            <section id="partners">
                <div class="tengah">
                    <div class="kolom">
                        <p class="deskripsi">Our Top Partners</p>
                        <h2>Partners</h2>

                    </div>

                    <div class="partner-list">
                        <div class="kartu-partner">
                            <img src="/kenapa/bl.jpg" />
                        </div>
                        <div class="kartu-partner">
                            <img src="/kenapa/bli.jpg" />
                        </div>
                        <div class="kartu-partner">
                            <img src="/kenapa/lazada.jpg" />
                        </div>
                        <div class="kartu-partner">
                            <img src="/kenapa/tokped.png" />
                        </div>
                        <div class="kartu-partner">
                            <img src="/kenapa/shopee.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeWrapper;