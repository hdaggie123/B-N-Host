import React, { Component } from 'react';
import axios from 'axios';

export default class MenuList extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get("http://localhost:3001/menu/1")
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
    }

    render() {
        return (
            <div>
                <ul>
                {
                    this.state.items
                        .map(items =>
                            <li key={items.menu_id}>{items.menu_item}</li>
                        )
                }
                </ul>
            </div>
            // <ul>
            //     {
            //         this.state.items
            //             .map(menu =>
            //                 <li key={menu.id}>{menu.name}</li>
            //             )
            //     }
            // </ul>
        )
    }
}