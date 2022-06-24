import React from "react";

class TagsList extends React.Component{

    // Фоагмент коду, який буде обов'язково запущено в момент створення елементу
    // Тут прийнято оптсувати усі дані, з якими ми будемо працювати в компоненті
    // props - те, що ми йому надіслали
    // state - дані всередині компонента
    constructor(props) {
        super(props);

        console.log ('Працює конструктор')

        // Описуємо дані, які у нас є для виведення
        this.state = {
            error: null, // Зберігаємо стан помилки
            isLoaded: false, //
            tags : [
                {id: 1, name: "Asp"},
                {id: 2, name: "Php"},
                {id: 3, name: "C#"},
                {id: 4, name: "C++"},
                {id: 5, name: "Asp"},
                {id: 6, name: "Html"},
                {id: 7, name: "Css"}
            ]
        }
    }

    // Відповідає за те, як буде виглядати компонент
    renderData() {
        console.log('Працює рендер')
        return(
            <ul>
                {
                    this.state.tags.map( tag => (
                        <li key={tag.id}>{tag.name}</li>
                    ))
                }

            </ul>
        )
    }
    //Приймаємо рішення як відображити
    render(){
        // Якщо в компоненті сталась помилка - вивести її
        if(this.state.error){
            return this.renderError()
        }
        // Якщо дані ще не отримано - вивести - очікування даних
        if(this.state.isLoaded){
            return this.renderPreload()
        }
        // Якщо немає ні помилок, ні отримання даних - отже виводимо дані
        return this.renderData()
    }
    /**
     * Виводить, що сталась помилка
     */
    renderError(){
        return (
        <div>
            <header> Відбулась помилка компонента </header>
            <div> {this.state.error} </div>
        </div>
        )
    }

    /**
     *
     * @returns {JSX.Element}
     */
    renderPreload(){
        return(
            <div>Очікую надходження даних</div>
        )
    }
}

export default TagsList;