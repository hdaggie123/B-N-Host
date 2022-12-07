// import React from 'react';
// import axios from 'axios';

// export default class MenuAdd extends React.Component {
//     state = {
//         menu: [],
//     }

//     handleChange = event => {
//         this.setState({ state => ({
//             menu: [state.menu, event],
//         }))
//     }

//     handleSubmit = event => {
//         event.preventDefault();

//         const newItem = [
//             {
//                 menu_id: this.state.menu_id,
//                 inventory_id: this.state.inventory_id,
//                 menu_item: this.state.menu_item,
//                 item_size: this.state.item_size,
//                 item_price: this.state.item_price,
//                 customizations: this.state.customizations
//             }
//         ]
//         //     {
//         //         menu_id: this.state.menu_id,
//         //         inventory_id: this.state.inventory_id,
//         //         menu_item: this.state.menu_item,
//         //         item_size: this.state.item_size,
//         //         item_price: this.state.item_price,
//         //         customizations: this.state.customizations
//         //     }
//         //     // menu_id: this.state.menu_id,
//         //     // inventory_id: this.state.inventory_id,
//         //     // menu_item: this.state.menu_item,
//         //     // item_size: this.state.item_size,
//         //     // item_price: this.state.item_price,
//         //     // customizations: this.state.customizations
//         //     //addedItem: this.state.addedItem
//         // };

//         axios.post("http://localhost:3001/menu", { newItem })
//             .then(res => {
//                 console.log(res);
//                 console.log(res.data);
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         New Menu Item:
//                         <input type="text" name="menu_id" onChange={this.handleChange} />
//                         <input type="text" name="inventory_id" onChange={this.handleChange} />
//                         <input type="text" name="menu_item" onChange={this.handleChange} />
//                         <input type="text" name="item_size" onChange={this.handleChange} />
//                         <input type="text" name="item_price" onChange={this.handleChange} />
//                     </label>
//                     <button type="submit">Add</button>
//                 </form>
//             </div>
//         )
//     }
// }