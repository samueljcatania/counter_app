import React, {Component} from "react";
import Navbar from "./components/navbar";

import Counters from "./components/counters";
import './App.css';

export default class App extends Component {
    state = {
        counters: [{id: 1, value: 0}, {id: 2, value: 0}, {id: 3, value: 0}, {id: 4, value: 0}]
    }

    constructor(props) {
        super(props);
        console.log("App-Constructor", this.props)
    }

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({counters: counters});
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters: counters});
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters: counters});
    }

    render() {
        return (<React.Fragment>
            <Navbar totalCounters={this.state.counters.filter(counter => counter.value > 0).length}/>
            <main className="container">
                <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </main>
        </React.Fragment>);
    }
}

