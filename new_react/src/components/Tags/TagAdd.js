import React from "react";

class TagAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newTageName: '',
            help: ''
        }
        this.onChange = this.onChange.bind(this) //Дозволити методу доступ до класу
    }

    /**
     * Метод, який при будь-якій зміні буде переносити дані з поля вводу в state
     */
    onChange(e){
        console.log('OnChange' + e.target.name)
        const oldState = this.state;
        oldState[e.target.name] = e.target.value;
        if(oldState[e.target.name].length <3) {
            oldState.help = 'Мітка має бути більше 3 символів'
        } else {
            oldState.help = ''
        }
        this.setState(oldState);
    }

    /**
     * Викликаємо метод зовнішнього компоненту - передавши туди нову мітку
     */
    addNewTag(){
        this.props.addNewTag(this.state.newTagName)
    }

    render() {// Обов'язковий метод, який відповідає за вивід компонента на сторінку
        return(
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addTag">
                    Add
                </button>
                <div className="modal fade" id="addTag" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label> NewTag: <span>{this.state.help}</span> <input type="text" name="newTagName" onInput={this.onChange}/></label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={this.addNewTag.bind(this)} type="button"  data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default TagAdd;