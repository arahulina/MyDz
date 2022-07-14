import React from "react";
import CatsAdd from "./CatsAdd";
import CatsItem from "./CatsItem";
import "./CatsCSS.css"

class CatsMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    saveAll(){
        localStorage.setItem("cats", JSON.stringify(this.state.items))
    }

    loadAll(){
        const oldState = this.state
        if (localStorage.getItem("cats"))
            oldState.items = JSON.parse(localStorage.getItem("cats"))
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
        return (
            <>
            <div className="row">
                {
                    this.state.items.map( item => (
                        <CatsItem key={item.id} item={item}></CatsItem>
                    ))
                }
            </div>
                <div className="row">
                    <div className="col-2">
                        <CatsAdd save={this.saveItem.bind(this)}></CatsAdd>
                    </div>
                    <div className="col-2">
                        <button onClick={this.saveAll.bind(this)} type="button" className="btn btn-info"> Save </button>
                    </div>
                    <div className="col-2">
                        <button onClick={this.loadAll.bind(this)} type="button" className="btn btn-danger"> Load </button>
                    </div>
                </div>
            </>
        )
    }


    getSimpleData() {
        let cat1 = {
            id: Date.now(),
            name: "Абиссинская кошка",
            imgUrl: "https://petsi.net/images/catbreed/big/abissinskaya-koshka.jpg",
            des: "Абиссинская кошка - это популярная порода, в значительной степени благодаря своему необычному интеллекту и игривым качествам. Она заинтересована во всем, что происходит вокруг нее. "
        }

        let cat2 = {
            id: Date.now(),
            name: "Австралийская дымчатая",
            imgUrl: "https://petsi.net/images/catbreed/big/avstraliyskaya-dymchataya.jpg",
            des: "Австралийская дымчатая порода идеально сочетает в себе все характерные внешние черты домашних кошек с естественным окрасом, и лучшие внутренние качества этих животных."
        }

        let cat3 = {
            id: Date.now(),
            name: "Азиатская табби",
            imgUrl: "https://petsi.net/images/catbreed/big/aziatskaya-tabbi.jpg",
            des: "Добрый, милый, ласковый, очень умный и, к тому же, очень красивый питомец - это, несомненно, азиатская табби. Эти кошки - лучший друг каждого человека, включая детей."
        }

        let cat4 = {
            id: Date.now(),
            name: "Американская длинношерстная",
            imgUrl: "https://petsi.net/images/catbreed/big/amerikanskaya-dlinnosherstnaya-koshka.jpg",
            des: "Американская длинношерстная - это очень добрая и милая кошка с прекрасным характером."
        }

        let cat5 = {
            id: Date.now(),
            name: "Американская жесткошерстная",
            imgUrl: "https://petsi.net/images/catbreed/big/amerikanskaya-zhestkosherstnaya.jpg",
            des: "Это добродушное, любвеобильное создание, которое отличается большой привязанностью к своей семье и хозяину."
        }

        let cat6 = {
            id: Date.now(),
            name: "Американская короткошерстная",
            imgUrl: "https://petsi.net/images/catbreed/big/amerikanskaya-korotkosherstnaya.jpg",
            des: "Эти очаровательные домашние животные будут идеальным компаньоном, ласковым и понятливым, с которым никогда не возникает лишних проблем."
        }

        let cat7 = {
            id: Date.now(),
            name: "Американский бобтейл\n",
            imgUrl: "https://petsi.net/images/catbreed/big/amerikanskiy-bobteyl.jpg",
            des: "С одной стороны, американский бобтейл любит каждого из членов своей семьи, с другой, он, скорее всего, выберет одного человека, которому будет беззаветно предан."
        }

        let cat8 = {
            id: Date.now(),
            name: "Американский керл",
            imgUrl: "https://petsi.net/images/catbreed/big/amerikanskiy-kerl.jpg",
            des: "Данная порода имеет выраженные личностные особенности и характер, фактически, вам иногда может даже казаться, что вы общаетесь не с котом, а с человеком."
        }

        const oldState = this.state
        oldState.items[0] = cat1
        oldState.items[1] = cat2
        oldState.items[2] = cat3
        oldState.items[3] = cat4
        oldState.items[4] = cat5
        oldState.items[5] = cat6
        oldState.items[6] = cat7
        oldState.items[7] = cat8
        oldState.isLoaded = true
        this.setState(oldState)

    }

    componentDidMount(){
        this.getSimpleData()
    }

    render(){
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

export default CatsMain;