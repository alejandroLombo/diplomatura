const imagenes = require.context('../componentes/img/nosotros', true);


export function Nosotros() {
    return (
        <main class="holder">
            <div class="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
                    magni laboriosam architecto quia odit vero a vitae officiis in corrupti labore, ratione quo temporibus
                    aut repudiandae sit laudantium nobis molestiae. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Numquam cumque id placeat facere illo similique nihil rerum,
                    laboriosam repellat debitis dicta nemo voluptatibus dolore beatae quam quos soluta saepe nam!</p>
            </div>
            <div class="staff">
                <h2>Staff</h2>
                <div class="personas">
                    <div class="persona">
                        <img src={imagenes(`./nosotros1.jpg`)} alt=""></img>
                        <h5 class="nombre">Juan Gomez</h5>
                        <h6 class="puesto">Gerente General</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Harum natus obcaecati quia facilis temporibus modi ducimus voluptatem quo recusandae, quam quas
                            possimus incidunt animi laboriosam alias ipsa magnam ad a!</p>

                    </div>

                    <div class="persona">
                        <img src={imagenes(`./nosotros2.jpg`)} alt=""></img>
                        <h5 class="nombre">Juan Gomez</h5>
                        <h6 class="puesto">Gerente General</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Harum natus obcaecati quia facilis temporibus modi ducimus voluptatem quo recusandae, quam quas
                            possimus incidunt animi laboriosam alias ipsa magnam ad a!</p>
                    </div>

                    <div class="persona">
                        <img src={imagenes(`./nosotros3.jpg`)} alt=""></img>
                        <h5 class="nombre">Juan Gomez</h5>
                        <h6 class="puesto">Gerente General</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Harum natus obcaecati quia facilis temporibus modi ducimus voluptatem quo recusandae, quam quas
                            possimus incidunt animi laboriosam alias ipsa magnam ad a!</p>
                    </div>

                    <div class="persona">
                        <img src={imagenes(`./nosotros4.jpg`)} alt=""></img>
                        <h5 class="nombre">Juan Gomez</h5>
                        <h6 class="puesto">Gerente General</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Harum natus obcaecati quia facilis temporibus modi ducimus voluptatem quo recusandae, quam quas
                            possimus incidunt animi laboriosam alias ipsa magnam ad a!</p>
                    </div>

                    <div class="persona">
                        <img src={imagenes(`./nosotros5.jpg`)} alt=""></img>
                        <h5 class="nombre">Juan Gomez</h5>
                        <h6 class="puesto">Gerente General</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Harum natus obcaecati quia facilis temporibus modi ducimus voluptatem quo recusandae, quam quas
                            possimus incidunt animi laboriosam alias ipsa magnam ad a!</p>
                    </div>
                </div>

            </div>
        </main>
    );
}