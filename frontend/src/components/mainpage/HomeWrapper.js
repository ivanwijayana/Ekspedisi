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

            <section id="cekres">
                <div class="container mt-5" id="main">
                    <div class="shadow p-3 bg-white rounded">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Masukkan No.Resi" id="search-input" />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <select class="form-control kurir">
                                    <option value="GoE">Go Express</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <button class="btn btn-primary" type="button" id="search-button">Cari</button>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-md-10 info"></div>
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
                            <section class="col-sm-8 maincontent">
                                <form id="basicBootstrapForm" class="form-horizontal" method="post">
                                    <div class="form-group">
                                        <label class="col-xs-3 control control-label">* Nama</label>
                                        <div class="col-xs-6">
                                            <div class="input-group margin-bottom-sm">
                                                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                                <input type="text" class="form-control" name="username" required placeholder="" />
                                            </div>											</div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-xs-3 control-label">* Alamat Email
                                        </label>
                                        <div class="col-xs-6">
                                            <div class="input-group margin-bottom-sm">
                                                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                                <input class="form-control" type="text" name="email" placeholder="" pattern="^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})" size="40" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-xs-3 control-label">* No. Telpon
                                        </label>
                                        <div class="col-xs-6">
                                            <div class="input-group margin-bottom-sm">
                                                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                                <input class="form-control" type="text" name="notelpon" placeholder="" pattern="^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})" size="40" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-xs-3 control-label">* Provinsi Kota Area
                                        </label>
                                        <div class="col-xs-6">
                                            <div class="input-group margin-bottom-sm">
                                                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                                <input class="form-control" type="text" name="kota" placeholder="" pattern="^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})" size="40" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-xs-3 control-label">  Detail Alamat
                                        </label>
                                        <div class="col-xs-6">
                                            <div class="input-group margin-bottom-sm">
                                                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                                <input class="form-control" type="text" name="alamat" placeholder="" pattern="^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})" size="40" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-xs-3 control-label">* No. Resi
                                        </label>
                                        <div class="col-xs-6">
                                            <div class="input-group margin-bottom-sm">
                                                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                                <input class="form-control" type="text" name="resi" placeholder="" pattern="^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})" size="40" />
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label for="name" class="col-xs-3 control-label">* Pesan
                                        </label>
                                        <div class="col-xs-6">
                                            <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required" placeholder="">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-xs-3 control-label" id="captchaOperation">
                                        </label>
                                        <div class="col-xs-5">
                                            <input type="text" class="form-control" name="captcha" required value="" />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-xs-7 col-xs-offset-3">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" name="agree" value="agree" required />Setuju dengan syarat dan ketentuan
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group" form action="mailto:vicozwar@$gmail.com" enctype="text/plain" method="post">
                                        <div class="form-group">
                                            <div class="col-xs-10 col-xs-offset-3">
                                                <button type="submit" class="btn btn-success" name="signup" placeholder="Sign up">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </section>
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