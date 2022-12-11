import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";


export default function CreateProduct(){

    /**
     * Если в хранилище нет ключа - перейти на страницу логина
     */
    let navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('jwtToken') === null) {
            return navigate("/login");
        }
    },[]);



    const formSchema = Yup.object().shape({
        title: Yup.string()
            .required("Заголовок обязательный")
            .min(5, "Минимальная длинна заголовка 5 символов"),
        //description: Yup.string()
          //  .required("Текст описания обязательный")
            //.min(5, "Минимальная длинна 5 символов"),
        price: Yup.number()
            .required("Обязательно укажите стоимость"),
    })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState

    const onSubmit = function (data) {

        fetch('http://localhost:3333/api' + '/product',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('jwtToken')
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if(res.status !==201) {
                    toast.error("Ошибка")
                    return null
                }
                return res.json()
            })
            .then(data => {
                if(data === null) {
                    //console.log("Я ничего не делаю")
                    return
                }
                toast.success("Вы успешно создали объявление")
                console.log(data)
            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
            })

    }




    return (
        <div className="container mt-5">
            <h2>Создать объявление</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Назва товару</label>
                    <input
                        name="title"
                        type="text"
                        {...register('title')}
                        className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.title?.message}</div>
                </div>
                <div className="form-group">
                    <label>Опис товару</label>
                    <textarea
                        name="description"

                        {...register('message')}
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    />

                    <div className="invalid-feedback">{errors.description?.message}</div>
                </div>
                <div className="form-group">
                    <label>Ціна</label>
                    <input
                        name="price"
                        type="number"
                        {...register('price')}
                        className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.price?.message}</div>
                </div>
                <div className="form-group">
                    <label>Категорія товару</label>
                    <select {...register("category")}>
                        <option value="0" selected={true}>Пелюшки</option>
                        <option value="1">Боді</option>
                        <option value="2">Ковдри</option>
                    </select>
                </div>
                <div className="mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}