function BuyTickets(){
    const mainHtml = `
        <section class="categories" id="categories">
            <div class="card shadow-sm text-center border-primary rounded-0 student" id="student">
                <div class="card-body" >
                    <h5 class="card-title fs-2">Estudiante</h5>
                    <p class="card-text fs-4">Tienen un descuento</p>
                    <p class="card-text fw-bold fs-5">80%</p>
                    <p class="card-text text-muted fs-5">* presentar documentación</p>
                </div>
            </div>
            <div class="card shadow-sm text-center border-info rounded-0 trainee "id="trainee">
                <div class="card-body">
                    <h5 class="card-title fs-2">Trainee</h5>
                    <p class="card-text fs-4">Tienen un descuento</p>
                    <p class="card-text fw-bold fs-5">50%</p>
                    <p class="card-text text-muted fs-5">* presentar documentación</p>
                </div>
            </div>
            <div class="card shadow-sm text-center border-warning rounded-0 junior"  id="junior">
                <div class="card-body">
                    <h5 class="card-title fs-2">Junior</h5>
                    <p class="card-text fs-4">Tienen un descuento</p>
                    <p class="card-text fw-bold fs-5">15%</p>
                    <p class="card-text text-muted fs-5">* presentar documentación</p>
                </div>
            </div>
        </section>
        <section class="tickets">
        <p class="fs-4 text-center fw-light">VENTA</p>
        <h2 class="fs-3 text-center">VALOR DE TICKET $200</h2>
        <form class= "form-buy-tickets" action="">
            <div class="row mb-3">
                <div class="col">
                    <input type="text" class="form-control form-input" placeholder="Nombre" aria-label="First name">
                </div>
                <div class="col">
                    <input type="text" class="form-control form-input" placeholder="Apellido" aria-label="Last name">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Correo">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="inputEmail4" class="form-label">Cantidad</label>
                    <input type="email" class=" form-input form-control form-input" id="inputEmail4">
                </div>
                <div class="col">
                    <label for="validationCustom04" class="form-label">Categoría</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected  value="">Estudiante</option>
                        <option selected  value="">Trainee</option>
                        <option selected  value="">Junior</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <input class="form-control" type="text" placeholder="Total a Pagar: $" aria-label="Disabled input example" disabled>        
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <button type="submit" class="btn-form ">
                        <p class="fs-4" >Borrar</p>
                    </button>
                </div>
                <div class="col">
                    <button type="submit" class="btn-form ">
                        <p class="fs-4" >Resumen</p>
                    </button>
                </div>
            </div>
        </form>
    </section>
    `   
    return mainHtml;
}