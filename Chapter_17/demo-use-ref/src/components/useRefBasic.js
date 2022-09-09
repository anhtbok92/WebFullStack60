import {useEffect, useRef} from "react";

const UseRefBasic = () => {
    // const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // lấy giá trị của thẻ input thông qua inputRef đã config
        // sử dụng biến inputRef đã gán giá trị cho nó ở bước useEffect
        console.log(inputRef.current.value);
    }

    useEffect(() => {
        // lấy thành phần dom nodes mà chúng ta đã đặt ref -> đây chính là thẻ input
        console.log('ref-input', inputRef.current);

        // focus -> gán các thuộc tính của thẻ hoặc node cho inputRef
        inputRef.current.focus();
    }, []);

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <input type='text' ref={inputRef} />
                </div>
                <button type={'submit'}>submit</button>
            </form>
        </>
    )
}

export default UseRefBasic;