const imagenes = require.context('../componentes/img/home', true);

export function Home() {
    return (
        <main className="holder">
            <div>
                <img src={imagenes(`./img01.jpg`)} alt=""></img>
            </div>
            <div className="columnas">
                <section class="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, amet officia! Cum perspiciatis fuga numquam aliquid recusandae,
                        assumenda natus voluptatibus esse tempore autem, adipisci ut non atque voluptate ipsum odio? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Harum, ut mollitia aliquid odit nobis nesciunt nihil dolorum odio corporis! Doloremque eum dolores similique sint voluptatum saepe est eos quasi facilis!</p>
                </section>
                <section className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Excelente Servicio</span>
                        <span className="autor">Juan Correa - muebles.com</span>
                    </div>
                    <hr></hr>
                    <div className="testimonio">
                        <span className="cita">Excelente Velocidad</span>
                        <span className="autor">German Casas - plc.com</span>
                    </div>
                    <br></br>
                </section>

            </div>
            <div>
                <img src={imagenes(`./img02.jpg`)} alt=""></img>
            </div>
            <div className="columnas">
                <section class="bienvenidos">
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, amet officia! Cum perspiciatis fuga numquam aliquid recusandae,
                        assumenda natus voluptatibus esse tempore autem, adipisci ut non atque voluptate ipsum odio? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Harum, ut mollitia aliquid odit nobis nesciunt nihil dolorum odio corporis! Doloremque eum dolores similique sint voluptatum saepe est eos quasi facilis!</p>
                </section>
                

            </div>


        </main>
    )

}