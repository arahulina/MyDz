import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export default function AllCard(){

    const [cards, setCards] = useState([])
    const [user, setUser] = useState({name: "гость", _id: 0}) // По умолчанию у нас гость
    // const [total, setTotal] = useState(null)
    const [page, setPage] = useState(1)
    const [per_page, setPerPage] = useState(2)

    let total = 0 // Формируем запись без стейта поскольку переменная статическая

    const loadCard = function () {
        // toast.error('?page=' + page + "&per_page=" + per_page)
        fetch('http://localhost:3333/api'
            + '/card?page=' + page + "&per_page=" + per_page  ,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('jwtToken')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(res => {
                // console.log(res)
                if(res.status !==200) {
                    toast.error("Ошибка")
                    return null
                }
                return res.json()
            })
            .then(data => {
                if(data === null) {
                    console.log("Я ничего не делаю")
                    return
                }
                // toast.success("Вы успешно получили объявления")
                console.log(data)
                total = data.total // Всего объявлений

                setCards(cards.concat(data.data)) // Объявления ????

                console.log(total)
                document.body.onscroll = function () {
                    scrollPos()
                }
            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
            })
    }

    const deleteCard = function (ev) {
        console.log("Start Del")
        console.log(ev.target.value)
        let id = ev.target.value

        fetch('http://localhost:3333/api' + '/card/' + id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('jwtToken')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(res => {
                console.log(res)
                console.log(res.status)
                if(res.status === 204) {
                    toast.success(" Вы успешно удалили запись")
                    loadCard()
                    return
                }
                toast.error(" Произошла ошибка удаления ")

            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
            })


    }


    useEffect(() => {
        loadCard()
        if ( localStorage.getItem('user') ){ // Если есть данные по пользователю - восстановить их
            setUser(JSON.parse (localStorage.getItem('user')))
        }
    }, [])



    useEffect(() => {
        loadCard()
    }, [page])


    const loadMore = function () {
        if (page * per_page > total) {
            toast.info(" Вы достигли дна" + page + " " +  per_page + " " + total)
            return
        }
        setPage(page+1)
    }

    const scrollPos = function() {
        // Нам потребуется знать высоту документа и высоту экрана:
        const height = document.body.offsetHeight
        const screenHeight = window.innerHeight
        // Они могут отличаться: если на странице много контента,
        // высота документа будет больше высоты экрана (отсюда и скролл).

        // Записываем, сколько пикселей пользователь уже проскроллил:
        const scrolled = window.scrollY

        // Обозначим порог, по приближении к которому
        // будем вызывать какое-то действие.
        // В нашем случае — четверть экрана до конца страницы:
        const threshold = height - screenHeight / 4

        // Отслеживаем, где находится низ экрана относительно страницы:
        const position = scrolled + screenHeight
        console.log("Scrolled " + scrolled)
        console.log("Position " + position)
        console.log( "hold " + threshold)

        if (position >= threshold) {
            document.body.onscroll = null
            toast.info("Load More " + page)
            loadMore()
        }
    }


    return (
        <div>
            <div> { user.name} </div>
            <div> Page {page} Total: {total} Per_page:{per_page} </div>
            <ul>
                {cards.map(card => (
                    <li key={card._id}>
                        <p>{card.title}</p>
                        { card.author_id === user._id ? <p> <button> Edit </button> <button value={card._id} onClick={deleteCard}> Delete </button>  </p> : " Не мое" }
                    </li>
                ))
                }
            </ul>
            <div onClick={loadMore}> Загрузить дальше </div>
        </div>
    )
}