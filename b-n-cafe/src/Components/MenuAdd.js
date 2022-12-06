import React from 'react';
import axios from 'axios';

export default class MenuAdd extends React.Component {
    state = {
        addedItem: []
    }

    handleChange = event => {
        this.setState({ addedItem: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const newItem = {
            addedItem: this.state.addedItem
        };

        axios.post("http://localhost:3001/menu/1", { newItem })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        New Menu Item:
                        <input type="text" name="NEW" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}