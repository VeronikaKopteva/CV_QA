var ru = document.getElementById('ru_click'),
    english = document.getElementById('en_click'),
    ru_txt = document.querySelectorAll('#ru'),
    en_txt = document.querySelectorAll('#en'),
    nb_ru = ru_txt.length,
    nb_en = en_txt.length;

ru.addEventListener('click', function() {
    langue(ru,english);
}, false);

english.addEventListener('click', function() {
    langue(english,ru);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if(langueOn.innerHTML == 'Ru'){
        afficher(ru_txt, nb_ru);
        cacher(en_txt, nb_en);
    }
    else if(langueOn.innerHTML == 'En'){
        afficher(en_txt, nb_en);
        cacher(ru_txt, nb_ru);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(ru,english);
}
init();