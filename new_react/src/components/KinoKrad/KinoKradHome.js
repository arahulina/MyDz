import React from "react";
import './kinokrad.css';
import KinoKradItem from "./KinoKradItem"
import KinoKradAdd from "./KinoKradAdd";

class KinoKradHome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    saveAll(){
        localStorage.setItem("films", JSON.stringify(this.state.items))
    }

    loadAll(){
        const oldState = this.state
        if (localStorage.getItem("films"))
            oldState.items = JSON.parse(localStorage.getItem("films"))
        else
            oldState.items=[]
        this.setState(oldState)
    }

    saveItem(item){
        const oldState = this.state
        oldState.items.push(item)
        this.setState(oldState)
    }

    renderData() {
        console.log('Работает рендер данных')
        return (
            <>
               <div className="row">
                   <div className="col-2">
                        <KinoKradAdd save={this.saveItem.bind(this)}></KinoKradAdd>
                   </div>
                   <div className="col-2">
                       <button onClick={this.saveAll.bind(this)} type="button" className="btn btn-info"> Save </button>
                   </div>
                   <div className="col-2">
                       <button onClick={this.loadAll.bind(this)} type="button" className="btn btn-danger"> Load </button>
                   </div>
               </div>
                <div className="row">
                    {
                        this.state.items.map( item => (
                            <KinoKradItem key={item.id} item={item}></KinoKradItem>
                        ))
                    }
                </div>
            </>
        )
    }

    getSimpleData() {
        let f1 = {
            id: Date.now(),
            name: "Человек из Торонто (2022)",
            imgUrl: "https://image.kinokrad.co/p/medium/1655662543_chelovek-iz-toronto.jpeg",
            des: "Тедди, работая консультантом по продажам, уверенно двигался вдоль черной полосы своей жизни. Его словно преследовали разнообразные несчастья. Он не успевал отойти от одной неудачи, как тут..."
        }

        const oldState = this.state
        oldState.items[0] = f1
        oldState.isLoaded = true
        this.setState(oldState)

    }

    componentDidMount(){
        this.getSimpleData()
    }

    render(){
        console.log('Render - строит внешний вид компонента')
        // Если в компоненте произошла ошибка - вывести ее
        if(this.state.error){
            return this.renderError()
        }
        // Если данные еще не получены - вывести - ожидаю данные
        if(!this.state.isLoaded){
            return this.renderPreload()
        }
        // Если нет ни ошибки ни получения данных - значит вывожу данные
        return this.renderData()
    }

    /**
     * Выводим что у нас проблемы Хьюстон
     */
    renderError(){
        return (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
                <div>
                    <header  className="alert-heading"> Произошла ошибка компонента </header>
                </div>
            </div>
        )
    }

    /**
     * Выводим состояние - жду получения данных
     */
    renderPreload(){
        return(
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
}

export default KinoKradHome;
