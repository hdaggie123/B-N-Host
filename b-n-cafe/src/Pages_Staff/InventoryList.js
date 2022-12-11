import React, {Component} from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://barnesandnoblecsce315-backend.onrender.com/inventory'
})

export default class InventoryList extends Component {

    state = {
        inventory: []
    }

    constructor() {
        super();
        this.getInventory();
    }

    getInventory = async () => {
        let data = await api.get('/').then(({data}) => data);
        this.setState({ inventory:data })
    }

    createInventoryItem = async () => {
        let res = await api.post('/', { inventory_item: "TEST", inventory_amount: 5, minimum_requirement: 4 })
        console.log(res)
        this.getInventory();
    }

    deleteInventoryItem = async (inventory_id) => {
        let data = await api.delete('/' + inventory_id)
        this.getInventory();
    }

    updateInventory = async(inventory_id, val1, val2, val3) => {
        let data = await api.patch('/' + inventory_id, {inventory_item: val1, inventory_amount: val2, minimum_requirement: val3 })
        this.getInventory()
    }

    render() {
        return (
            <ul>
                <button onClick={this.createInventoryItem}>createInventoryItem</button>
                
                {this.state.inventory.map(inventory => 
                    <h2 key={inventory.inventory_id} onClick={() => this.updateInventory(inventory.inventory_id, inventory.inventory_item + 'EDITED', inventory.inventory_amount, inventory.minimum_requirement)}>
                        {inventory.inventory_item} <button onClick={()=>this.deleteInventoryItem(inventory.inventory_id)}>x</button>
                    </h2>)}
            </ul>
        )
    }
}