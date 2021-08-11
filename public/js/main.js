// Fungsi autofocus Checkbox Input
document.getElementById("ck_other").addEventListener('click',function(){
    let input_other = document.getElementById("input_other");
    input_other.focus();
});

// Tampilkan menu User
function tampilMenu(){
    let show = document.getElementById("menuakun");
    if (show.style.display === "block") {
        show.style.display = "none";
    }else{
        show.style.display = "block";
    }
    console.log('sukses');
    return show;
    
}

// Tampilkan menu shortcut
function tampilShortcut(){
    let shortcut = document.getElementById("container-shortcut");
    if (shortcut.style.display === "block") {
        shortcut.style.display = "none";
    }else{
        shortcut.style.display = "block";
    }
    console.log('sukses');
    return shortcut;
}