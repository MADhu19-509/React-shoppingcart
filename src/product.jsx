import React, { Component } from "react";
export default class Product extends Component {
    state = {
        id: this.props.id, productName: this.props.productName,

        quantity: this.props.quantity,
        prodict: this.props.prodict,

    };
    render() {

        return (

            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">

                        <div className="text-muted">#{this.state.id}
                            <span className=" pull-right handicon " onClick={() => { this.props.onDelete(this.state.prodict) }}>
                                <i className="fa fa-times"> </i>
                            </span>
                            <h5 className="pt-2 border-top">{this.state.productName}</h5>
                            <div>{this.props.price} Rs</div>
                        </div>
                    </div>
                    <div className="text-left card-footer">
                        <div className="float-end">

                            <div className=" btn-group">

                                <button className="btn btn-outline-success" onClick={() => { this.props.HandleIncrement(this.state.prodict, 10); }}>+</button>
                                <span className="badge bg-secondary " > {this.state.quantity} </span>
                                <button className="btn btn-outline-success" onClick={() => { this.props.HandleDecrement(this.state.prodict, 0); }}>-</button>

                            </div>
                        </div>
                        <div className="float-right">
                            {this.props.children}</div>
                    </div>
                </div>
            </div>


        )
    }
}