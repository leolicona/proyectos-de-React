

// Para entender los parametros nombrados, ver: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Par%C3%A1metros_por_defecto
export const saveToLocalStorage = (toStorage) => {
    toStorage.map(element => {
        console.log(element);
        const [ key, value ] = element
        window.localStorage.setItem(key, JSON.stringify(value))
    })
}

 export const removeLocalStorage = ({ key }) => {
    key.map((item) => {
        window.localStorage.removeItem(item)
    })
} 