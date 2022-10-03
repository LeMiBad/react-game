import css from './Loading.module.sass'
import { useState, useEffect } from 'react';

const Loading = () => {
    const [textI, setTextI] = useState(0)

    const loadingTextArr = ['Загрузка.', 'Загрузка..', 'Загрузка...']

    console.log('Рендер')

    useEffect(() => {
        const interval = setInterval(() => {
            if(textI === 2) setTextI(0)
            else if(textI === 1) setTextI(2)
            else setTextI(1)
        }, 500)

        return () => clearInterval(interval)
    }, [textI])

    return <div className={css.loading}>
        <div>{loadingTextArr[textI]}</div>
    </div>
}

export default Loading