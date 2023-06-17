import React from 'react';
const imagenes = require.context('../componentes/img/galeria', true);

export function Galeria() {
    return (
        <main className="holder">
            <div className="galeria">
                <img src={imagenes(`./img01.jpg`)} alt=""></img>
                    <img src={imagenes(`./img02.jpg`)}alt=""></img>
                        <img src={imagenes(`./img03.jpg`)}alt=""></img>
                            <img src={imagenes(`./img04.jpg`)}alt=""></img>
                                <img src={imagenes(`./img05.jpg`)}alt=""></img>
                                    <img src={imagenes(`./img06.jpg`)}alt=""></img>
                                        <img src={imagenes(`./img07.jpg`)}alt=""></img>
                                        </div>

                                    </main>
                                    );
}

