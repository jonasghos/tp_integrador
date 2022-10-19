function Render(){

    const url = window.location.pathname;

    console.log(url);

        const header = document.createElement('header');
        document.getElementById('body').appendChild(header);

        const navbar = NavBar();
        header.innerHTML = navbar;

        RenderMain(url);

        const footer = document.createElement('footer');
        document.getElementById('body').appendChild(footer);
        footer.innerHTML = Footer();




}

Render();