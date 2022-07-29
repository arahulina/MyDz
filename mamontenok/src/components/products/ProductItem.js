import React from "react";

class ProductItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={this.props.item.imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.name}</h5>
                    <p className="card-text">{this.props.item.des}</p>
                </div>
            </div>
        )
    }
}
export default ProductItem;