import React, {Component} from 'react'
import connection from './connection'

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accounts: []
        }
        this.addAccount = this.addAccount.bind(this);
        this.editAccount = this.editAccount.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
    }

    deleteAccount(id) {
        connection.deleteAccount(id).then( res => {
            this.setState({accounts: this.state.accounts.filter(account => account.id != id)});
        });
    }

    viewAccount(id) {
        this.props.history.push('/view-account/${id}');
    }

    editAccount(id) {
        this.props.history.push('/add-account/${id}');
    }

    componentDidMount() {
        connection.getAccounts().then((res) => {
            this.setState({ accounts: res.data });
        });
    }

    addAccount() {
        this.props.history.push('/add-account/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Accounts List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addAccount}> Add Account</button>
                </div>

                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                {/* <th>Account ID</th> */}
                                <th>Account username</th>
                                <th>Account password</th>
                                <th>Account classification</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.accounts.map(
                                    account => 
                                    <tr key = {account.id}>
                                        <td>{account.username}</td>
                                        <td>{account.password}</td>
                                        <td>{account.classification}</td>
                                        <td>
                                            <button onClick={ () => this.editAccount(account.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAccount(account.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewAccount(account.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListComponent