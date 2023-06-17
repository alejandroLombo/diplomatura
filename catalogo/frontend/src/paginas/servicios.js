import React from 'react';
const imagenes = require.context('../componentes/img/servicios', true);

export function Servicios() {
    return (
        <main class="holder">
        <h2>Servicios</h2>
        <div class="servicio">
            <img src={imagenes(`./ferroviario.jpg`)} alt=""></img>
            <div class="info">
                <h4>Transporte Ferroviario</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio debitis inventore. 
                    Officia voluptatum laboriosam blanditiis eos natus! Impedit, voluptatum? Rem ipsam hic cum quae placeat quas. Nobis, maxime excepturi.</p>
            </div>
        </div>
        <div class="servicio">
            <img src={imagenes(`./aereo.jpg`)} alt=""></img>
            <div class="info">
                <h4>Transporte aereo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio debitis inventore. 
                    Officia voluptatum laboriosam blanditiis eos natus! Impedit, voluptatum? Rem ipsam hic cum quae placeat quas. Nobis, maxime excepturi.</p>
            </div>
        </div>
        <div class="servicio">
            <img src={imagenes(`./terrestre.jpg`)} alt=""></img>
            <div class="info">
                <h4>Transporte Terrestre</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio debitis inventore. 
                    Officia voluptatum laboriosam blanditiis eos natus! Impedit, voluptatum? Rem ipsam hic cum quae placeat quas. Nobis, maxime excepturi.</p>
            </div>
        </div>
        <div class="servicio">
            <img src={imagenes(`./maritimo.jpg`)} alt=""></img>
            <div class="info">
                <h4>Transporte Maritimo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio debitis inventore. 
                    Officia voluptatum laboriosam blanditiis eos natus! Impedit, voluptatum? Rem ipsam hic cum quae placeat quas. Nobis, maxime excepturi.</p>
            </div>
        </div>

    </main>
    );
}

