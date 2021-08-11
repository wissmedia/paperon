// Pop Up Modal Add di halaman Setup.
$(document).ready(function(){
    $("#add").click(function(){
        $("#modalAddQuestion").show();
        $("#modalAddQuestion .modal-content").slideDown();
    });
});

// Hide Modal saat klik close
$(document).ready(function(){
    $(".close").click(function(){
        $("#modalAddQuestion").fadeOut();
        $("#modalAddQuestion .modal-content").slideUp();
    });
});

// Hide Modal saat klik diluar
window.onclick = function(event) {
    modalAdd = document.getElementById("modalAddQuestion");

    modalMenu = document.getElementById("modalMenuAkun");

    if (event.target == modalAdd) {
        modalAdd.style.display = "none";
        $("#modalAddQuestion .modal-content").slideUp();
    }else if(event.target == modalMenu) {
        modalMenu.style.display = "none";
        $("#modalMenuAkun .modal-content").slideUp();
    }
}

// Hide Pop Up menu saat klik outside content
$(document).mouseup(function(e) {
    var container = $(".add-list");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
});

// Tambah Pertanyaan
$(document).ready(function(){
    // Jawab Singkat
    $("#jawabSingkat").click(function(){
      $(".setup").append(`
        <div class="content addjawabSingkat" id="addjawabSingkat">
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
                    <span class="wajib"><input type="checkbox" name="wajib" class="wajibisi"><label class="wajiblabel">Wajib diisi</label></span>
                </div>
            </div>
        </div>
      `).hide().fadeIn();
        
        // Hide Pop Up Menu Add setelah pilih
        $("#modalAddQuestion").fadeOut();
        $("#modalAddQuestion .modal-content").slideUp();
    });
    
    // Jawab Panjang
    $("#jawabPanjang").click(function(){
        $(".setup").append(`
            <div class="content addjawabPanjang" id="addjawabPanjang">
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
                        <span class="wajib"><input type="checkbox" name="wajib" class="wajibisi"><label class="wajiblabel">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `).hide().fadeIn();
          
        // Hide Pop Up Menu Add setelah pilih
        $("#modalAddQuestion").fadeOut();
        $("#modalAddQuestion .modal-content").slideUp();
    });

    // Pilihan Ganda
    $("#pilihanGanda").click(function(){
        $(".setup").append(`
            <div class="content addpilihanGanda">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Pilihan Ganda</p>
                    <input type="text" name="pilihanganda" id="pilihanganda" class="text" placeholder="Masukan pertanyaan pilihan ganda">
                    
                    <div class="edit-group setInput">
                        <input type="radio" name="pilih" id="pilih1" disabled>
                        <input type="text" name="opsi" id="opsi" class="text" placeholder="Text ...">
                        <button class="del"><i class="fas fa-times"></i></button>
                    </div>
                    
                    <div class="edit-group addInput">
                        <input type="radio" name="pilih" id="pilih1" disabled>
                        <input type="text" name="opsi" class="text addOpsi" placeholder="Tambah opsi">
                        <button id="add-lain" class="add-lain addLain-radio">atau tambahkan "Lainnya"</button>
                    </div>

                    <div class="control-edit">
                        <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                        <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                        <span class="divider">|</span>
                        <span class="wajib"><input type="checkbox" name="wajib" class="wajibisi"><label class="wajiblabel">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `).hide().fadeIn();
          
        // Hide Pop Up Menu Add setelah pilih
        $("#modalAddQuestion").fadeOut();
        $("#modalAddQuestion .modal-content").slideUp();
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
                        <div class="edit-group setInput">
                            <input type="radio" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Text ...">
                            <button class="del"><i class="fas fa-times"></i></button>
                        </div>

                        <div class="edit-group addInput">
                            <input type="radio" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" class="text addOpsi" placeholder="Tambah baris">
                        </div>
                    </div>
                    <div class="kolom">
                        <label for="">Kolom</label>
                        <div class="edit-group setInput">
                            <input type="radio" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Text ...">
                            <button class="del"><i class="fas fa-times"></i></button>
                        </div>

                        <div class="edit-group addInput">
                            <input type="radio" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" class="text addOpsi" placeholder="Tambah kolom">
                        </div>
                    </div>

                    <div class="container-control-edit">
                        <div class="control-edit">
                            <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                            <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                            <span class="divider">|</span>
                            <span class="wajib"><input type="checkbox" name="wajib" class="wajibisi"><label class="wajiblabel">Wajib diisi</label></span>
                        </div>
                    </div>
                </div>
            </div>
        `).hide().fadeIn();
          
        // Hide Pop Up Menu Add setelah pilih
        $("#modalAddQuestion").fadeOut();
        $("#modalAddQuestion .modal-content").slideUp();
    });

    // Kotak Centang
    $("#kotakCentang").click(function(){
        $(".setup").append(`
            <div class="content addkotakCentang">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Pilihan Kotak Centang</p>
                    <input type="text" name="pilihanganda" id="pilihanganda" class="text" placeholder="Masukan pertanyaan pilihan kotak centang">
                        
                    <div class="edit-group setInput">
                        <input type="checkbox" name="pilih" id="pilih1" disabled>
                        <input type="text" name="opsi" id="opsi" class="text" placeholder="Text ...">
                        <button class="del"><i class="fas fa-times"></i></button>
                    </div>

                    <div class="edit-group addInput">
                        <input type="checkbox" name="pilih" id="pilih1" disabled>
                        <input type="text" name="opsi" class="text addOpsiCheck" placeholder="Tambah opsi">
                        <button id="add-lain" class="add-lain addLain-check">atau tambahkan "Lainnya"</button>
                    </div>

                    <div class="control-edit">
                        <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                        <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                        <span class="divider">|</span>
                        <span class="wajib"><input type="checkbox" name="wajib" class="wajibisi"><label class="wajiblabel">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `).hide().fadeIn();
          
        // Hide Pop Up Menu Add setelah pilih
        $("#modalAddQuestion").fadeOut();
        $("#modalAddQuestion .modal-content").slideUp();
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
                        <div class="edit-group setInput">
                            <input type="checkbox" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Text ...">
                            <button class="del"><i class="fas fa-times"></i></button>
                        </div>

                        <div class="edit-group addInput">
                            <input type="checkbox" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" class="text addOpsiCheck" placeholder="Tambah baris">
                        </div>
                    </div>
                    <div class="kolom">
                        <label for="">Kolom</label>
                        <div class="edit-group setInput">
                            <input type="checkbox" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" id="opsi" class="text" placeholder="Text ...">
                            <button class="del"><i class="fas fa-times"></i></button>
                        </div>

                        <div class="edit-group addInput">
                            <input type="checkbox" name="pilih" id="pilih1" disabled>
                            <input type="text" name="opsi" class="text addOpsiCheck" placeholder="Tambah kolom">
                        </div>
                    </div>

                    <div class="container-control-edit">
                        <div class="control-edit">
                            <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                            <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                            <span class="divider">|</span>
                            <span class="wajib"><input type="checkbox" name="wajib" class="wajibisi"><label class="wajiblabel">Wajib diisi</label></span>
                        </div>
                    </div>
                </div>
            </div>
        `).hide().fadeIn();
          
        // Hide Pop Up Menu Add setelah pilih
        $("#modalAddQuestion").fadeOut();
        $("#modalAddQuestion .modal-content").slideUp();
    });

    // Daftar Pilihan
    $("#dropDown").click(function(){
        $(".setup").append(`
            <div class="content adddropDown">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Pilihan Dropdown</p>
                    <input type="text" name="pilihdropdown" id="pilihdropdown" class="text" placeholder="Masukan pertanyaan Daftar Pilihan">
                        
                    <div class="edit-group setInput">
                        <span id="nomor" class="nomor">&#9672;</span>
                        <input type="text" name="opsi" id="opsi" class="text" placeholder="Text ...">
                        <button class="del"><i class="fas fa-times"></i></button>
                    </div>

                    <div class="edit-group addInput">
                        <span id="nomor">&#9672;</span>
                        <input type="text" name="opsi" class="text addOpsiDaftar" placeholder="Tambah opsi">
                    </div>

                    <div class="control-edit">
                        <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                        <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                        <span class="divider">|</span>
                        <span class="wajib"><input type="checkbox" name="wajib" class="wajibisi"><label class="wajiblabel">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `).hide().fadeIn();
          
        // Hide Pop Up Menu Add setelah pilih
        $("#modalAddQuestion").fadeOut();
        $("#modalAddQuestion .modal-content").slideUp();
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
                        <span class="wajib"><input type="checkbox" name="wajib" class="wajibisi"><label class="wajiblabel">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `).hide().fadeIn();
          
        // Hide Pop Up Menu Add setelah pilih
        $("#modalAddQuestion").fadeOut();
        $("#modalAddQuestion .modal-content").slideUp();
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
                        <span class="wajib"><input type="checkbox" name="wajib" class="wajibisi"><label class="wajiblabel">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `).hide().fadeIn();
          
        // Hide Pop Up Menu Add setelah pilih
        $("#modalAddQuestion").fadeOut();
        $("#modalAddQuestion .modal-content").slideUp();
    });

    // Skala Linear
    $("#skalaLinear").click(function(){
        $(".setup").append(`
            <div class="content addskalaLinier">
                <div class="line"></div>
                <div class="bungkus-content edit">
                    <p>*Pertanyaan Skala Linier</p>
                    <input type="text" name="tanya" class="text" placeholder="Masukan pertanyaan untuk jawaban singkat">
                    <select name="sl" class="dropdown ddA">
                        <option value="0">0</option>
                        <option value="1">1</option>
                    </select>

                    <span>sampai</span>

                    <select name="sl" class="dropdown ddB">
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
                        <span id="skala-a" class="skala-a">0</span>
                        <input type="text" name="tanya" class="" placeholder="Label (optional)">
                    </div>
                    <div class="label-skala">
                        <span id="skala-b" class="skala-b">10</span>
                        <input type="text" name="tanya" class="" placeholder="Label (optional)">
                    </div>

                    <div class="control-edit">
                        <button class="copy" type="button"><i class="fas fa-clone"></i></button>
                        <button class="remove" type="button"><i class="fas fa-trash"></i></button>
                        <span class="divider">|</span>
                        <span class="wajib"><input type="checkbox" name="wajib" class="wajibisi"><label class="wajiblabel">Wajib diisi</label></span>
                    </div>
                </div>
            </div>
        `).hide().fadeIn();
          
        // Hide Pop Up Menu Add setelah pilih
        $("#modalAddQuestion").fadeOut();
        $("#modalAddQuestion .modal-content").slideUp();
    });
});

// Hapus Pertanyaan
$(document).ready(function(){
    $("body").on("click",".remove",function(){
        $(this).parents(".addjawabSingkat").fadeOut(function(){
            $(this).remove();
        });
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addjawabPanjang").fadeOut(function(){
            $(this).remove();
        });
    });

    $("body").on("click",".remove",function(){
        $(this).parents(".addpilihanGanda").fadeOut(function(){
            $(this).remove();
        });
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addkisipilihanGanda").fadeOut(function(){
            $(this).remove();
        });
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addkotakCentang").fadeOut(function(){
            $(this).remove();
        });
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addpetakkotakCentang").fadeOut(function(){
            $(this).remove();
        });
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".adddropDown").fadeOut(function(){
            $(this).remove();
        });
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addTanggal").fadeOut(function(){
            $(this).remove();
        });
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addWaktu").fadeOut(function(){
            $(this).remove();
        });
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".addskalaLinier").fadeOut(function(){
            $(this).remove();
        });
    });
});

// Copy Pertanyaan
$(document).ready(function(){
    $("body").on("click",".copy",function(){
      $(this).parents(".addjawabSingkat").clone().appendTo(".setup").hide().fadeIn();
    });

    $("body").on("click",".copy",function(){
        $(this).parents(".addjawabPanjang").clone().appendTo(".setup").hide().fadeIn();
    });

    $("body").on("click",".copy",function(){
        $(this).parents(".addpilihanGanda").clone().appendTo(".setup").hide().fadeIn();
    });

    $("body").on("click",".copy",function(){ 
        $(this).parents(".addkisipilihanGanda").clone().appendTo(".setup").hide().fadeIn();
    });

    $("body").on("click",".copy",function(){ 
        $(this).parents(".addkotakCentang").clone().appendTo(".setup").hide().fadeIn();
    });

    $("body").on("click",".copy",function(){ 
        $(this).parents(".addpetakkotakCentang").clone().appendTo(".setup").hide().fadeIn();
    });

    $("body").on("click",".copy",function(){ 
        $(this).parents(".adddropDown").clone().appendTo(".setup").hide().fadeIn();
    });

    $("body").on("click",".copy",function(){ 
        $(this).parents(".addTanggal").clone().appendTo(".setup").hide().fadeIn();
    });

    $("body").on("click",".copy",function(){ 
        $(this).parents(".addWaktu").clone().appendTo(".setup").hide().fadeIn();
    });

    $("body").on("click",".copy",function(){
        $(this).parents(".addskalaLinier").clone().appendTo(".setup").hide().fadeIn();

        // Belum sempurna saat copy ke dua
        $(".ddA option[value='" + $(".ddA").val() + "'] , .ddB option[value='" + $(".ddB").val() + "']").attr("selected","selected");
    });
});

// Delete Text Input
$(document).ready(function(){
    $("body").on("click",".del",function(){
        $(this).parents(".setInput").fadeOut(function(){
            $(this).remove();
        });
    });
});

// Insert Text Input
$(document).ready(function(){
    // Input with radio
    $("body").on("click",".addOpsi",function(){ 
        $(this).parents(".addInput").before(`
            <div class="edit-group setInput">
                <input type="radio" name="pilih" id="pilih1" disabled>
                <input type="text" name="opsi" id="opsi" class="text" placeholder="Text ...">
                <button class="del"><i class="fas fa-times"></i></button>
            </div>
        `);
    });

    $("body").on("click",".addLain-radio",function(){ 
        $(this).parents(".addInput").before(`
            <div class="edit-group setInput">
                <input type="radio" name="pilih" id="pilih1" disabled>
                <div class="label">Lainnya :</div>
                <input type="text" name="opsi" id="opsi" class="text lainnya">
                <button class="del"><i class="fas fa-times"></i></button>
            </div>
        `);
    });

    // Input with checkbox
    $("body").on("click",".addOpsiCheck",function(){ 
        $(this).parents(".addInput").before(`
            <div class="edit-group setInput">
                <input type="checkbox" name="pilih" id="pilih1" disabled>
                <input type="text" name="opsi" id="opsi" class="text" placeholder="Text ...">
                <button class="del"><i class="fas fa-times"></i></button>
            </div>
        `);
    });

    $("body").on("click",".addLain-check",function(){ 
        $(this).parents(".addInput").before(`
            <div class="edit-group setInput">
                <input type="checkbox" name="pilih" id="pilih1" disabled>
                <div class="label">Lainnya :</div>
                <input type="text" name="opsi" id="opsi" class="text lainnya">
                <button class="del"><i class="fas fa-times"></i></button>
            </div>
        `);
    });

    // Input with number
    $("body").on("click",".addOpsiDaftar",function(){
        $(this).parents(".addInput").before(`
            <div class="edit-group setInput">
                <span id="nomor" class="nomor">&#9672;</span>
                <input type="text" name="opsi" id="opsi" class="text" placeholder="Text ...">
                <button class="del"><i class="fas fa-times"></i></button>
            </div>
        `);
    });
});

// Add Attribute ID on wajib isi checkbox
$(document).ready(function(){
    $("body").on("click",".wajiblabel",function(){

        if ($(this).prev().is(":checked")) {
            $(this).prev().prop("checked", false);
        } else {
            $(this).prev().prop("checked", true);
        }
    });
    
});

// Onchange Dropdown Skala Linear
$(document).ready(function(){
    $("body").on("change",".ddA",function(){
        let va = $(this).val();
        console.log(va);
        $(this).parents(".bungkus-content").find(".skala-a").text(va);
    });

    $("body").on("change",".ddB",function(){
        let va = $(this).val();
        console.log(va);
        $(this).parents(".bungkus-content").find(".skala-b").text(va);
    });
});