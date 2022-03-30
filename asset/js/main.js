// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue(
    {
        el: '#root',
        data: {
            message: 'Ciao sto stampando un data.. Sotto invece stampo Milano',
            image: 'gianpaolo-antonucci-Ha6TaqlGu8c-unsplash.jpg',
            box: 'container d-flex-justify-center',
            classiH1: 'center marginY',
            classiImg: 'middle'
        },

}
)