import React, {Component} from "react";

export default class Navbar extends Component {
    render() {
        return (<nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">Navbar{" "}
                <span className="badge rounded-pill bg-secondary">
                {this.props.totalCounters}
                </span>
            </a>
        </nav>);
    }
}
