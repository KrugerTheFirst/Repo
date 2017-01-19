//hiragana z odpowiednim tłumaczeniem
var slownik = {};
slownik['あ'] = 'a';
slownik['い'] = 'i';
slownik['う'] = 'u';
slownik['え'] = 'e';
slownik['お'] = 'o';
slownik['か'] = 'ka';
slownik['き'] = 'ki';
slownik['く'] = 'ku';
slownik['け'] = 'ke';
slownik['こ'] = 'ko';
slownik['さ'] = 'sa';
slownik['し'] = 'shi';
slownik['す'] = 'su';
slownik['せ'] = 'se';
slownik['そ'] = 'so';
slownik['た'] = 'ta';
slownik['ち'] = 'chi';
slownik['つ'] = 'tsu';
slownik['て'] = 'te';
slownik['と'] = 'to';
slownik['な'] = 'na';
slownik['に'] = 'ni';
slownik['ぬ'] = 'nu';
slownik['ね'] = 'ne';
slownik['の'] = 'no';
slownik['は'] = 'ha';
slownik['ひ'] = 'hi';
slownik['ふ'] = 'fu';
slownik['へ'] = 'he';
slownik['ほ'] = 'ho';
slownik['ま'] = 'ma';
slownik['み'] = 'mi';
slownik['む'] = 'mu';
slownik['め'] = 'me';
slownik['も'] = 'mo';
slownik['や'] = 'ya';
slownik['ゆ'] = 'yu';
slownik['よ'] = 'yo';
slownik['ら'] = 'ra';
slownik['り'] = 'ri';
slownik['る'] = 'ru';
slownik['れ'] = 're';
slownik['ろ'] = 'ro';
slownik['わ'] = 'wa';
slownik['を'] = 'wo';
slownik['ん'] = 'n';

//sortowanie obiektów
function slownikDlugosc(object) {
    var length = 0;
    for (var hiragana in object) {
        ++length;
    }
    return length;
}

//losowanie obiektów słownika po jego długości
function losowanie(slownik) {
    return Math.floor(Math.random() * slownikDlugosc(slownik));
}
//usuwa wybrane już elementy ze słownika zwracając je
function usuwaniePowtorzenZeSlownika(object, index) {
    var i = 0;
    var elementDoUsuniecia
    for (var element in object) {
        if (i == index) {
            elementDoUsuniecia = element;
            delete object[element];
        }
        ++i;
    }
    return [object, elementDoUsuniecia];
}

wypelnijEtykietki(slownik);

//losuje na "kopi" słownika 10 jego elementów i wypluwa je
function LosowanieBezPowtorzen(slownik) {
    var slownikKopia = JSON.parse(JSON.stringify(slownik));
    var wylosowane = [];
    var i = 0;
    while (i < 10) {
        var rand = losowanie(slownikKopia);
        var zwrotka = usuwaniePowtorzenZeSlownika(slownikKopia, rand);
        slownikKopia = zwrotka[0]
        ++i;
        wylosowane.push(zwrotka[1]);
    }
    return wylosowane;
}

//wypełnia etykiety HTMLA wylosowanymi elementami
function wypelnijEtykietki(wylosowaneElementy) {
    for (var i = 0; i < wylosowaneElementy.length; i++) {
        document.querySelectorAll('[for ="mark0' + i + '"]')[0].innerHTML = wylosowaneElementy[i]
    }
}


//sprawdza poprawność odpowiedzi usera z oryginalną odpowiedzią
function sprawdzanie(wylosowaneElementy, slownik) {
    for (var i = 0; i < wylosowaneElementy.length; i++) {
        var label =  document.querySelectorAll('[for ="mark0' + i + '"]')[0];
        var userInput = document.getElementById('mark0' + i);


        var wylosowanaHiragana = wylosowaneElementy[i];
        var poprawnaOdp = slownik[wylosowanaHiragana];
        if(userInput.value != poprawnaOdp){
            label.style = 'color:red';
        }else{

            label.style = 'color:black';
        }
    }
}

//1. Wylosowanie Elementów (przypisanie do zmiennnych)
//2. Wypełnienie Etykietek
//3. Sprawdzanie po kliku na sprawdź

var wylosowaneElementy = (LosowanieBezPowtorzen(slownik));
wypelnijEtykietki(wylosowaneElementy)

var checkButton =  document.getElementById("checkButton")
checkButton.onclick = function(){
    sprawdzanie(wylosowaneElementy, slownik);

}

//ZROZUMIENIE KRÓTKIE I KONKRETNE!
//HTML
//PIxele (choinka)