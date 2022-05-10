let action = "txlist"
let address = "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a"
let startblock = "0"
let endblock = "99999999"
let page = "1"
let offset = "10"
let apiKey = "7GXJKJGSXUHP56ZUKKDTUUWQRUTN6UU318"

let button = document.getElementById("my-button")


const getWalletHistory = () => {
    var apiUrl = "https://api.etherscan.io/api?module=account&action=" + action + "&address=" + address + "&startblock=" + startblock + "&endblock=" + endblock + "&page=" + page + "&offset=" + offset + "&sort=asc&apikey=" + apiKey;

    fetch(apiUrl).
        then(function (response) {
            if (response.ok) {
                console.log(response)
            } else {
                console.log("Error: Something went wrong.");
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}

button.addEventListener("click", getWalletHistory);