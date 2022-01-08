let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL"


    function converter(){
        let input = document.getElementById("valor");
        let valor = input.value;

        fetch(url)
            .then((res) => {

            return res.json()
            })

            .then((data) => {
            let rate = data.rates.BRL;

            document.getElementById("resultado").innerHTML = rate * valor;

            })

    }