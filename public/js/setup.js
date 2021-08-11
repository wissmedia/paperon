// Pop Up Menu Add di halaman Setup
$(document).ready(function(){
    $("#add").click(function(){
        $(".add-list").show();
        $("footer").css("background-color","transparent");
    });
});

// Hide Pop Up menu saat klik outside content
$(document).mouseup(function(e) {
    var container = $(".add-list");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        $("footer").css("background-color","#F9F9F9");
    }
});

// Tambah Pertanyaan
$(document).ready(function(){
    // Jawab Singkat
    $("#jawabSingkat").click(function(){
      $(".setup").append(`
        <div class="content addjawabSingkat">
            <div class="line"></div>
            <div class="bungkus-content edit">
                <p>*Pertanyaan Singkat</p>
                <input type="text" name="tanya" id="tanya" class="text tanya" placeholder="Masukan pertanyaan untuk jawaban singkat">
                <!-- Pratinjau kolom jawaban -->
                <input type="text" name="jawab" id="jawab" class="pratinjau" placeholder="Teks jawaban singkat" disabled>

                <div class="control-edit">
                    <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                    <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                    <span class="divider">|</span>
                    <span class="wajib"><input type="checkbox" id="wajib-js1" name="wajib" class="wajib"><label for="wajib-js1" class="wajib">Wajib diisi</label></span>
                </div>
            </div>
        </div>
      `);
        
        // Hide Pop Up Menu Add setelah pilih
        $(".add-list").hide();
        $("footer").css("background-color","#F9F9F9");
    });
    
    // Jawab Panjang
    $("#jawabPanjang").click(function(){
        $(".setup").append(`
            <div class="content addjawabPanjang">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Panjang</p>
                    <input type="text" name="tanyapanjang" id="tanyapanjang" class="text" placeholder="Masukan pertanyaan untuk jawaban panjang">
                    <!-- Pratinjau kolom jawaban -->
                    <textarea name="" id="" cols="30" rows="10" class="pratinjau" disabled>Teks jawaban panjang</textarea>

                    <div class="control-edit">
                        <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                        <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                        <span class="divider">|</span>
                        <span class="wajib"><input type="checkbox" id="wajib-jp1" name="wajib" class="wajib"><label for="wajib-jp1" class="wajib">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `);
          
          // Hide Pop Up Menu Add setelah pilih
          $(".add-list").hide();
          $("footer").css("background-color","#F9F9F9");
    });

    // Pilihan Ganda
    $("#pilihanGanda").click(function(){
        $(".setup").append(`
            <div class="content addpilihanGanda">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Pilihan Ganda</p>
                    <input type="text" name="pilihanganda" id="pilihanganda" class="text" placeholder="Masukan pertanyaan pilihan ganda">
                        
                    <div class="edit-group textpilihanGanda">
                        <input type="radio" name="pilih" id="pilih1" disabled>
                        <input type="text" name="opsi" id="opsi" class="text" placeholder="Opsi">
                        <button class="del"><i class="fas fa-times"></i></button>
                    </div>

                    <div class="opsipilihanGanda"></div>

                    <div class="edit-group">
                        <input type="radio" name="pilih" id="pilih1" disabled>
                        <input type="text" name="opsi" class="addOpsipilihanGanda" class="text" placeholder="Tambah opsi">
                        <button id="add-lain" class="add-lain">atau tambahkan "Lainnya"</button>
                    </div>

                    <div class="control-edit">
                        <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                        <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                        <span class="divider">|</span>
                        <span class="wajib"><input type="checkbox" id="wajib-pg1" name="wajib" class="wajib"><label for="wajib-pg1" class="wajib">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `);
          
          // Hide Pop Up Menu Add setelah pilih
          $(".add-list").hide();
          $("footer").css("background-color","#F9F9F9");
    });

    // Kisi Pilihan Ganda
    $("#kisiPilihanGanda").click(function(){
        $(".setup").append(`
            <div class="content addkisipilihanGanda">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Pilihan Ganda v2</p>
                    <input type="text" name="pilihanganda" id="pilihanganda" class="text" placeholder="Masukan pertanyaan pilihan ganda">
                    <div class="baris">
                        <label for="">Baris</label>
                        <div class="edit-group">
                            <input type="radio" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Baris">
                            <button id="del"><i class="fas fa-times"></i></button>
                        </div>

                        <div class="edit-group">
                            <input type="radio" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Tambah baris">
                        </div>
                    </div>
                    <div class="kolom">
                        <label for="">Kolom</label>
                        <div class="edit-group">
                            <input type="radio" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Kolom">
                            <button id="del"><i class="fas fa-times"></i></button>
                        </div>

                        <div class="edit-group">
                            <input type="radio" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Tambah kolom">
                        </div>
                    </div>

                    <div class="container-control-edit">
                        <div class="control-edit">
                            <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                            <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                            <span class="divider">|</span>
                            <span class="wajib"><input type="checkbox" id="wajib-pgx1" name="wajib" class="wajib"><label for="wajib-pgx1" class="wajib">Wajib diisi</label></span>
                        </div>
                    </div>
                </div>
            </div>
        `);
          
          // Hide Pop Up Menu Add setelah pilih
          $(".add-list").hide();
          $("footer").css("background-color","#F9F9F9");
    });

    // Kotak Centang
    $("#kotakCentang").click(function(){
        $(".setup").append(`
            <div class="content addkotakCentang">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Pilihan Kotak Centang</p>
                    <input type="text" name="pilihanganda" id="pilihanganda" class="text" placeholder="Masukan pertanyaan pilihan kotak centang">
                        
                    <div class="edit-group">
                        <input type="checkbox" name="pilih" id="pilih1" disabled>
                        <input type="text" name="opsi" id="opsi" class="text" placeholder="Opsi">
                        <button id="del"><i class="fas fa-times"></i></button>
                    </div>

                    <div class="edit-group">
                        <input type="checkbox" name="pilih" id="pilih1" disabled>
                        <input type="text" name="opsi" id="opsi" class="text" placeholder="Tambah opsi">
                        <button id="add-lain" class="add-lain">atau tambahkan "Lainnya"</button>
                    </div>

                    <div class="control-edit">
                        <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                        <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                        <span class="divider">|</span>
                        <span class="wajib"><input type="checkbox" id="wajib-pk1" name="wajib" class="wajib"><label for="wajib-pk1" class="wajib">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `);
          
          // Hide Pop Up Menu Add setelah pilih
          $(".add-list").hide();
          $("footer").css("background-color","#F9F9F9");
    });

    // Petak Kotak Centang
    $("#petakKotakCentang").click(function(){
        $(".setup").append(`
            <div class="content addpetakkotakCentang">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Pilihan Kotak centang v2</p>
                    <input type="text" name="pilihanganda" id="pilihanganda" class="text" placeholder="Masukan pertanyaan pilihan kotak centang">
                    <div class="baris">
                        <label for="">Baris</label>
                        <div class="edit-group">
                            <input type="checkbox" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Baris">
                            <button id="del"><i class="fas fa-times"></i></button>
                        </div>

                        <div class="edit-group">
                            <input type="checkbox" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Tambah baris">
                        </div>
                    </div>
                    <div class="kolom">
                        <label for="">Kolom</label>
                        <div class="edit-group">
                            <input type="checkbox" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Kolom">
                            <button id="del"><i class="fas fa-times"></i></button>
                        </div>

                        <div class="edit-group">
                            <input type="checkbox" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Tambah kolom">
                        </div>
                    </div>

                    <div class="container-control-edit">
                        <div class="control-edit">
                            <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                            <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                            <span class="divider">|</span>
                            <span class="wajib"><input type="checkbox" id="wajib-pkx1" name="wajib" class="wajib"><label for="wajib-pkx1" class="wajib">Wajib diisi</label></span>
                        </div>
                    </div>
                </div>
            </div>
        `);
          
          // Hide Pop Up Menu Add setelah pilih
          $(".add-list").hide();
          $("footer").css("background-color","#F9F9F9");
    });

    // Daftar Pilihan
    $("#dropDown").click(function(){
        $(".setup").append(`
            <div class="content adddropDown">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Pilihan Dropdown</p>
                    <input type="text" name="pilihdropdown" id="pilihdropdown" class="text" placeholder="Masukan pertanyaan Daftar Pilihan">
                        
                    <div class="edit-group">
                        <span id="nomor">1</span>
                        <input type="text" name="opsi" id="opsi" class="text" placeholder="Opsi">
                        <button id="del"><i class="fas fa-times"></i></button>
                    </div>

                    <div class="edit-group">
                        <span id="nomor">2</span>
                        <input type="text" name="opsi" id="opsi" class="text" placeholder="Tambah opsi">
                    </div>

                    <div class="control-edit">
                        <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                        <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                        <span class="divider">|</span>
                        <span class="wajib"><input type="checkbox" id="wajib-dd1" name="wajib" class="wajib"><label for="wajib-dd1" class="wajib">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `);
          
          // Hide Pop Up Menu Add setelah pilih
          $(".add-list").hide();
          $("footer").css("background-color","#F9F9F9");
    });

    // Tanggal
    $("#tanggal").click(function(){
        $(".setup").append(`
            <div class="content addTanggal">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Tanggal</p>
                    <input type="text" name="tanya" id="tanya" class="text" placeholder="Masukan pertanyaan untuk jawaban singkat">
                    <!-- Pratinjau kolom jawaban -->
                    <input type="date" name="jawab" id="jawab" class="pratinjau" placeholder="Teks jawaban tanggal" disabled>

                    <div class="control-edit">
                        <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                        <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                        <span class="divider">|</span>
                        <span class="wajib"><input type="checkbox" id="wajib-tg1" name="wajib" class="wajib"><label for="wajib-tg1" class="wajib">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `);
          
          // Hide Pop Up Menu Add setelah pilih
          $(".add-list").hide();
          $("footer").css("background-color","#F9F9F9");
    });

    // Waktu
    $("#waktu").click(function(){
        $(".setup").append(`
            <div class="content addWaktu">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Waktu</p>
                    <input type="text" name="tanya" id="tanya" class="text" placeholder="Masukan pertanyaan untuk jawaban singkat">
                    <!-- Pratinjau kolom jawaban -->
                    <input type="time" name="jawab" id="jawab" class="pratinjau" placeholder="Teks jawaban tanggal" disabled>

                    <div class="control-edit">
                        <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                        <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                        <span class="divider">|</span>
                        <span class="wajib"><input type="checkbox" id="wajib-wt1" name="wajib" class="wajib"><label for="wajib-wt1" class="wajib">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `);
          
          // Hide Pop Up Menu Add setelah pilih
          $(".add-list").hide();
          $("footer").css("background-color","#F9F9F9");
    });

    // Skala Linear
    $("#skalaLinear").click(function(){
        $(".setup").append(`
            <div class="content addskalaLinier">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Skala Linier</p>
                    <input type="text" name="tanya" id="tanya" class="text" placeholder="Masukan pertanyaan untuk jawaban singkat">
                    <select name="sl" id="sl" class="dropdown">
                        <option value="0">0</option>
                        <option value="1">1</option>
                    </select>

                    <span>sampai</span>

                    <select name="sl" id="sl" class="dropdown">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <div class="label-skala">
                        <span id="skala-a">0</span>
                        <input type="text" name="tanya" id="tanya" class="" placeholder="Label (optional)">
                    </div>
                    <div class="label-skala">
                        <span id="skala-b">10</span>
                        <input type="text" name="tanya" id="tanya" class="" placeholder="Label (optional)">
                    </div>

                    <div class="control-edit">
                        <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                        <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                        <span class="divider">|</span>
                        <span class="wajib"><input type="checkbox" id="wajib-sl1" name="wajib" class="wajib"><label for="wajib-sl1" class="wajib">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `);
          
          // Hide Pop Up Menu Add setelah pilih
          $(".add-list").hide();
          $("footer").css("background-color","#F9F9F9");
    });
});

// Hapus Pertanyaan
$(document).ready(function(){
    $("body").on("click",".remove",function(){ 
        $(this).parents(".addjawabSingkat").remove();
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addjawabPanjang").remove();
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addpilihanGanda").remove();
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addkisipilihanGanda").remove();
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addkotakCentang").remove();
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addpetakkotakCentang").remove();
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".adddropDown").remove();
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addTanggal").remove();
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addWaktu").remove();
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addskalaLinier").remove();
    });
});