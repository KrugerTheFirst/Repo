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


//losowanie znaków hiragany
//tip 1)iteracja obiektów js
// 2)math.random
//W danym zakresie random (zmiana)
function slownikDlugosc(object) {
    var length = 0;

    for (var hiragana in object) {
        ++length;
    }
    return length;
}

function losowanie(slownik) {
    return Math.floor(Math.random() * slownikDlugosc(slownik));

}

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

//Przetwarzam JSONA na obiekt, słownik i kopiuje go
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
//Funkcja (math.floor) najpierw zbiera informacje co do tablicy zapisanej, potem dopiero system zastanawia się nad znaczeniem "slownikDlugosc"
//"slownikDlugosc" przypisuje znaki slownika jako cyfry i wpisuje je jako liczby, dzieki czemj Math.random może je wypluć jako liczby

console.log (LosowanieBezPowtorzen(slownik));

//Zrozumienie kodu
//podmiana "mark" na hiragane
//system sprawdzania poprawności (jakie funkcje)