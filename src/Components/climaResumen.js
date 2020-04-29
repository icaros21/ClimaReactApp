import React,{Component} from 'react';

export default class ClimaResumen extends Component {

    render() {
        const {ciudad, main} = this.props.busqueda;

        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Clima para {ciudad}
                        </h1>
                        <h2 className="subtitle">
                            Temperatura actual: {main.temp}
                        </h2>
                        <h2 className="subtitle">
                            Máxima: {main.temp_max}
                        </h2>
                        <h2 className="subtitle">
                            Mínima: {main.temp_min}
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}