import React,{Component} from 'react';

export default class Header extends Component {

    render() {
        const {titulo} = this.props;

        return (
            <nav className="navbar is-warning">
                <div className="navbar-brand">  
                    <a href="#!">{titulo}</a>
                </div>    
            </nav>
        );
    }
}