/**
 * Funzione per creare la stringa di una figure da inserire nella gallery
 * 
 * @param {*} obj - L'oggetto da cui prendere i valori delle chiavi
 * @returns - La stringa di una figure con immagine e figcaption
 */
const getFigureString = (obj) =>{
    const figure = `
    <figure>
        <img src="${obj.url}" alt="">
        <figcaption>
            <h2>${obj.title}</h2>
            <p>${obj.description}</p>
        </figcaption>
    </figure>`;

    return figure;
}