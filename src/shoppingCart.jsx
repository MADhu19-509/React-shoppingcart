import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Product from "./product"
export default class ShoppingCart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
    }
    render() {
        return <div >
            <h2>shopping cart</h2>
            <div className="row">

                {this.state.product.map((prod) => {
                    return <Product key={prod.id}
                        id={prod.id}
                        productName={prod.productName}
                        price={prod.price}
                        quantity={prod.quantity}
                        HandleIncrement={prod.HandleIncrement}
                        HandleDecrement={prod.HandleDecrement}
                        prodict={prod.product}
                        HandleDelete={prod.HandleDelete}

                    >
                        <button className="btn btn-primary ">Buy Now </button>
                    </Product>
                })}


            </div>
        </div>

    }

    HandleIncrement = (prodict, max_value) => {
        let allproducts = [...this.state.product]
        let index = allproducts.indexOf(prodict)
        if (allproducts[index].quantity < max_value) {
            allproducts[index].quantity++
            this.setState({ product: allproducts })
        }
    }
    HandleDecrement = (prodict, min_value) => {
        let allproducts = [...this.state.product]
        let index = allproducts.indexOf(prodict)
        if (allproducts[index].quantity > min_value)
            allproducts[index].quantity--
        this.setState({ product: allproducts })

    }

    HandleDelete = (prodict) => {
        let allproducts = [...this.state.product]
        let index = allproducts.indexOf(prodict)
        if (window.confirm("Are you sure to delete")) {
            allproducts.splice(index, 1)
            this.setState({ product: allproducts })
        }

    }

    componentDidMount = async () => {
        var response = await fetch("http://localhost:5000/product", { method: "GET" })
        var prods = await response.json()
        this.setState({ product: prods })
        console.log(prods)


    }
}
