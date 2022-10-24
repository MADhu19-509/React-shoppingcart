import React, { Component } from 'react'

export default class CustomerList extends Component {
    state = {
        pageTitle: "Customers",
        cust_count: 5,
        customers: [
            { id: 1, name: "scott", phone: "1344453326", address: { city: "banglore" }, photo: "https://picsum.photos/id/1010/60" },

            { id: 4, name: "Madhu", phone: "", address: { city: "delhi" }, photo: "https://picsum.photos/id/1008/60" },
            { id: 2, name: "loud", phone: "134444656", address: { city: "bangcock" }, photo: "https://picsum.photos/id/1018/60" },
            { id: 3, name: "rak", phone: "13444238964", address: { city: "mangalore" }, photo: "https://picsum.photos/id/1028/60" },
            { id: 5, name: "sus", phone: "1345389635", address: { city: "klkr" }, photo: "https://picsum.photos/id/1038/60" },
        ],
    };
    render() {
        return <div><h2 className="m-1 p-1">
            {this.state.pageTitle}
            <span className="badge bg-secondary m-2">
                {this.state.cust_count}
            </span>
            <button className="" onClick={this.onRefreshClick}>Refresh</button>

        </h2>
            <table className='table' >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th > Customer Name </th>
                        <th> Photo</th>
                        <th> Phone</th>
                        <th>City</th>

                    </tr>
                </thead>
                <tbody>{this.getCustomerRow()}</tbody>
            </table>
        </div>


    }

    onRefreshClick = () => {
        this.setState({ cust_count: 7 });
    }
    getPhoneToRender = (phone) => {
        if (phone)
            return phone
        else {
            return (
                <div className="bg-warning p-2">No Phone</div>)
        }
    }
    getCustomerRow = () => {
        return (

            this.state.customers.map((cust, index) => {
                return (
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td>{cust.name}</td>
                        <td><img src={cust.photo} alt="Customer" />
                            <div><button className=" btn btn-secondary" onClick={() => this.changePicture(cust, index)}>change</button></div></td>
                        <td>{this.getPhoneToRender(cust.phone)}</td>
                        <td>{cust.address.city}</td>

                    </tr>
                );
            })
        )
    }
    changePicture = (cust, index) => {
        var Arr = this.state.customers
        Arr[index].photo = "https://picsum.photos/id/1014/60"
        this.setState({ customers: Arr })
    }
}


