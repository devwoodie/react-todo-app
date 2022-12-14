import { MdAdd } from "react-icons/md";
import './TodoInsert.scss';
import {useCallback, useState} from "react";

const TodoInsert = ({onInsert}) => {
    let [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        if(value !== ''){
            onInsert(value);
            setValue('');
        }else{ alert('내용을 입력해주세요') };
    },[onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;