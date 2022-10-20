function RenderMain(url){
    if (url === "/index.html"){
        const main = document.createElement('main');
        document.getElementById('body').appendChild(main);
        main.innerHTML = Main();
    } if
        (url === "/buyTickets.html"){
            const main = document.createElement('main');
            document.getElementById('body').appendChild(main);
            main.innerHTML = BuyTickets();
        }
}