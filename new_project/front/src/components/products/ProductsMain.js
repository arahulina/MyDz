import React from "react";
import ProductItem from "../products/ProductItem"

class ProductsMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    renderData() {
        console.log('Работает рендер данных')
        return (
            <>
                <div className="row">
                    {
                        this.state.items.map( item => (
                            <ProductItem key={item.id} item={item}></ProductItem>
                        ))
                    }
                </div>
            </>
        )
    }

    getSimpleData() {
        let product1 = {
            id: Date.now(),
            name: "наименование товара",
            imgUrl: "картинка товара",
            des: "описание товара"
        }

        const oldState = this.state
        oldState.items[0] = product1
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

export default ProductsMain;