import React from "react";
import Contact from "./Contact";
import ContactAdd from "./ContactAdd";

class PhoneBook extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contacts: [] // Коллекция телефонной книги
        }
    }

    saveToLS(){
        localStorage.setItem("phoneBook", JSON.stringify(this.state.contacts))
    }

    loadFromLS(){
        const oldState = this.state // Получаю состояние хранилища компонента
        if(localStorage.getItem("phoneBook")) // Если в локальном хранилище есть данные
            oldState.contacts = JSON.parse(localStorage.getItem("phoneBook")); // получаю их
        else
            oldState.contacts = [] // Если данных нет - оставляю пустым
        this.setState(oldState) // Обновляю хранилище компонента
    }

    create(newContact) {
        let newEl = {
            id: Date.now() + "_" + Math.random(),
            name: newContact.name,
            subName: newContact.subName,
            number: newContact.number
        }
        const oldState = this.state
        oldState.contacts.push(newEl)
        this.setState(oldState)
    }

    update(id, newData){
        const oldState = this.state
        oldState.contacts[oldState.contacts.findIndex(el=> el.id === id)] = {
            id: id,
            name: newData.name,
            subName: newData.subName,
            number: newData.number
        }
        this.setState(oldState)
    }

    deleteById(contactId){
        const oldState = this.state
        let index = oldState.contacts.findIndex(c=> c.id === contactId)
        console.log(index)
        oldState.contacts.splice( index, 1)
        this.setState(oldState)
    }

    deleteByEl(el){
        let id = el.target.getAttribute('data-id')
        console.log(id)
        this.deleteById(id)
    }

    loadSimpleData(){
        // Создадим контакт с полями, по описанию задачи
        let contact = {
            id: Date.now()  + "_" +  Math.random(), // Случайный номер
            name: "Имя", // поля для хранения имени контакта
            subName: "Фамилия", // фамилия
            number: "Номер телефона" // номер его телефона
        }

        const oldState = this.state // Взять старый стейт (мы не знаем что там храниться - но хотим оставить)
        oldState.contacts = [contact] // Поместим в контакты массив (коллекцию) с 1 контактом
        this.setState(oldState) // Поместим стейт обратно
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.loadFromLS.bind(this)}> Load </button>
                    <button onClick={this.saveToLS.bind(this)}> Save </button>
                    <button onClick={this.loadSimpleData.bind(this)}> Simple </button>
                    <ContactAdd save={this.create.bind(this)}></ContactAdd>
                </div>
                <table  className="table" id="tblPhoneBook">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subname</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.contacts.map(contact => (
                            <>
                                <Contact  key={contact.id} contact={contact}
                                          update={this.update.bind(this)}
                                          delete={this.deleteByEl.bind(this)}></Contact>
                            </>

                        ))
                    }
                    </tbody>
                </table>
            </>
        )
    }


}

export default PhoneBook;
