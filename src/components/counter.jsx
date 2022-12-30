import React, {Component} from "react";

export default class Counter extends Component {
    state = {
        count: 1, tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>;
        }
        return this.state.tags.map(tag => <li key={tag}>{tag}</li>);

    }

    handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (<React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
                onClick={() => this.handleIncrement(product)}
                className="btn btn-secondary bt-sm">Increment
            </button>
            <ul>
                {this.renderTags()}
            </ul>
        </React.Fragment>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

}
