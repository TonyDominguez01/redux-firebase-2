import React, {useState, useEffect} from 'react';
import './App.css';
import { Input } from './components/Input';
import { ListaItem } from './components/ListaItem';
import { useSelector, useDispatch } from 'react-redux'; 
import { selectTodoLista, saveTodo } from './features/todoSlice';
import { Login } from './components/Login';
import { db } from './firebase';

function App() {
    
    const todoLista = useSelector(selectTodoLista);
    const [user, setUser] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('re render');
        db.collection('post').orderBy('timestamp', "asc")
            .onSnapshot((snapshot) => {
                dispatch(saveTodo(snapshot.docs.map(doc => ({
                    id: doc.id,
                    item: doc.data().item,
                    done: doc.data().done
                }))))
            })
    }, [])

    return (
        <div className="App">
            <div className="container">
                {
                    user ? <>
                <div className="lista">
                    {
                        todoLista.map(item => (
                            <ListaItem
                                key={item.id}
                                item={item.item}
                                done={item.done}
                                id={item.id}
                            />
                        ))
                    }
                </div>
                <Input/>

                </> :
                <Login />
                }
            </div>
        </div>
    );
}

export default App;
