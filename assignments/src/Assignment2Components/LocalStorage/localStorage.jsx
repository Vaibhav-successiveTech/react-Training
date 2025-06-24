const useLocalStorage = () => {
    const setter = (key,val) => {
        localStorage.setItem(`${key}`,val);
    }
    const getter = (val) => {
        let item = localStorage.getItem(`${val}`);
        return !item?'no text':item;
    }
    const remove = (val) => {
        localStorage.removeItem(`${val}`);
    }
    return [setter,getter,remove];
}

export {useLocalStorage};