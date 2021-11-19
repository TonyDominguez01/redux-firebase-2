import React from 'react'
import { Checkbox } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setCheck } from '../../features/todoSlice'
import './styles.css'

export const ListaItem = ({item, done, id}) => {
    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id));
    }
    return (
        <div className="listaItem">
            <Checkbox
                checked={done}
                onChange={handleCheck}
                value="checkedB"
                color="primary"
            />

            <p className={done ? 'listaItem--done' : ''}>{item}</p>
        </div>
    )
}
