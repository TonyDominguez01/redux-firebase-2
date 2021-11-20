import React, {useState, useEffect} from 'react';
import './App.css';
import { Input } from './components/Input';
import { ListaItem } from './components/ListaItem';
import { useSelector, useDispatch } from 'react-redux'; 
import { selectTodoLista, saveTodo } from './features/todoSlice';
import { Login } from './components/Login';
import { sesion, logout, selectUser } from './features/userSlice';
import { auth, db } from './firebase';

function App() {
    
    const todoLista = useSelector(selectTodoLista);
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch(sesion({
                    email:userAuth.email,
                    name: userAuth.displayName,
                    uid: userAuth.uid
                }))
            }
            else {
                dispatch(logout)
            }
        })
    },[])

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

    const salir = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="App">
            <div className="container">
                {
                    user ? <>
                    <button className="salir" onClick={salir}>Salir</button>
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
