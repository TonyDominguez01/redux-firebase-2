import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../../features/todoSlice' 
import './styles.css'
import { db } from '../../firebase'

export const Input = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const sendPost = () => {
        db.collection('post'.padEnd({
            item: input,
            done: false,
            timestamp: Date.now()
        }))
        console.log(Date.now);
        setInput('');
    }

    return (
        <div className="input">
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button onClick={sendPost}>Enviar</button>
        </div>
    )
}
