import axios from 'axios';

const API_BASE_URL = "http://localhost:3001";

class connection {
    getAccounts() {
        return axios.get(API_BASE_URL);
    }

    getAccountById(accountID) {
        return axios.get(API_BASE_URL + "/" + accountID);
    }

    createAccount(account) {
        return axios.post(API_BASE_URL, account);
    }

    updateAccount(account, accountID) {
        return axios.put(API_BASE_URL + "/" + accountID, account);
    }

    deleteAccount(accountID) {
        return axios.delete(API_BASE_URL + "/" + accountID);
    }
}

export default new connection();