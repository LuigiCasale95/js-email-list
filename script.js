/* SELEZIONIAMO LE VARIABILI API*/
const endPointApi = "https://flynn.boolean.careers/exercises/api/random/mail"

console.log(endPointApi);


/* OUTPUT */
const stamp = document.querySelector(".boxList")



        for (i = 0; i < 10; i++) {
               /* Chiamata AJAX */
            axios.get(endPointApi)
            .then(rispApi => {
                 /* Codice da eseguite in caso di successo */
                const mailRandom = rispApi.data.response;
                console.log(mailRandom)
                stamp.innerHTML += `<li> ${mailRandom}</li>`        




                })
            .catch(error => {
            /* Codice da esewguire in caso di errore */
                console.error(error)
            })

        }