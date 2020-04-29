import React,{Component} from 'react';

export default class Formulario extends Component {
    constructor(props){
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange = ((event) => {
        this.props.handleInputOnChange(event);
    });

    handleOnSubmit = (() => {
        this.props.handleFormSubmit();
    });

    render() {
        const {ciudad, pais} = this.props.busqueda;

        return (
            <form>
                <div className="field">
                    <label htmlFor="txtCiudad" className="label">Ciudad</label>
                    <div className="control">
                        <input 
                            className="input"
                            type="text" 
                            id="txtCiudad" 
                            name="ciudad" 
                            placeholder="Ciudad" 
                            value={ciudad} 
                            onChange={this.handleOnChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label htmlFor="lstPais" className="label">País</label>
                        <div className="select is-fullwidth">
                            <select 
                                id="lstPais" 
                                name="pais" 
                                value={pais} 
                                onChange={this.handleOnChange}
                            >
                                <option value="">--Seleccione un País--</option>

                                <option value="US">Estados Unidos</option>
                                <option value="MX">México</option>
                                <option value="AR">Argentina</option>
                                <option value="CO">Colombia</option>
                                <option value="CR">Costa Rica</option>
                                <option value="ES">España</option>
                                <option value="PE">Perú</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input type="button" className="button is-primary" value="Buscar" onClick={this.handleOnSubmit}></input>
                    </div>
                </div>
            </form>
        );
    }
}