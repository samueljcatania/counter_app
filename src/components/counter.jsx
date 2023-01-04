import React, {Component} from "react";

export default class Counter extends Component {
    render() {
        return (<div className="row">
            <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col-md-auto">
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary bt-sm m-1">+
                </button>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary bt-sm m-1"
                    disabled={this.props.counter.value === 0}>-
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn sm m-1">Delete
                </button>
            </div>
        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-3 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

}
