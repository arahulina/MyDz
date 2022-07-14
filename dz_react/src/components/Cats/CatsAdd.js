import React from "react";

class CatsAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }

        this.onChange = this.onChange.bind(this) //Дозволити методу доступ до класу
    }

    onSave(){
        this.props.save(this.state)
    }

    /**
     * Динапический перенос данных в стейт
     * @param e
     */
    onChange(e){
        const oldState = this.state;
        oldState[e.target.name] = e.target.value;
        this.setState(oldState);
    }

    render() {
        return(
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCat">
                    Add
                </button>
                <div className="modal fade" id="addCat" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label> Cat Name: <input type="text" name="name" onChange={this.onChange}/></label>
                                <label> Cat Img: <input type="text" name="imgUrl" onChange={this.onChange}/></label>
                                <label> Cat Des:
                                    <textarea name="des" onChange={this.onChange}></textarea>
                                </label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={this.onSave.bind(this)} type="button"  data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default CatsAdd;