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

//Przyporzadkowuje elementy tablicy odpowiednim liczbom by mogly pozniej zostac wylosowane przez funkcje "losowanie"
function slownikDlugosc(object) {
    var length = 0;

    for (var hiragana in object) {
        ++length;
    }
    return length;
}

//Funkcja (math.floor) najpierw zbiera informacje co do tablicy zapisanej, potem dopiero system zastanawia się nad znaczeniem "slownikDlugosc"
//Tworzy zakres losowania
function losowanie(slownik) {
    return Math.floor(Math.random() * slownikDlugosc(slownik));
}
//Funkcja zbiera obiekty ze "skopiowanej" tablicy i po wybraniu jednego "usuwa" go z tabeli losującej, by nie nastąpiły powtórzenia w losowaniu
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

function wypelnijEtykietki(slownik) {
    var wylosowaneElementy = (LosowanieBezPowtorzen(slownik));
    console.log(wylosowaneElementy[4]);
    for (var i = 0; i < wylosowaneElementy.length; i++) {
        document.querySelectorAll('[for ="mark0' + i + '"]')[0].innerHTML = wylosowaneElementy[i]
    }
}


wypelnijEtykietki(slownik);

//Przetwarzam JSONA na obiekt, słownik i kopiuje go
//Jednocześnie pobiera 10 elementów z tablicy, przechodząc najpierw przez dunkcję "usuwaniePowtorzenZeSlownika" by nie powtarzac elementow
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

//sprawdzanie z funkcji losującej do odpowiedzi zapisanej przez użytkownika
function sprawdzanie() {
}



//Zrozumienie kodu
//system sprawdzania poprawności (jakie funkcje)

//IF!!! Insturkcje warunkowe
//Pętle for while
//W jaki sposób sprawdzić