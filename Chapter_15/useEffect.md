### 1. useEffect trong React Hooks

- Sử dụng trong functional component
- Thay thế cho 3 hàm lifecycle: 
    + componentDidMount
    + componentDidUpdate
    + componentWillUnmount 

### 2. Cách sử dụng useEffect

- Cú pháp

```angular2svg
import React, { useEffect } from 'react'
useEffect(effectFunction, arrayDependencies)
```

Trong đó:

    -> effectFunction: Xử lý logic cần thiết để render
    -> arrayDependencies: 1 mảng các giá trị phụ thuộc

- useEffect như componentDidMount

```angular2svg
useEffect(effectFunction, [])
```

Trong đó:

    -> Tham số thứ 2: là 1 array rỗng
    -> Thường được sử dụng để call API từ server trả về

- useEffect như componentDidUpdate

```angular2svg
useEffect(effectFunction, [element1, element2....])
```

Trong đó:

    -> Khi element1, element2...thay đổi thì useEffect được gọi

- useEffect như componentWillUnmount 

+ componentWillUnmount sẽ chạy mỗi khi một component chuẩn bị remove khỏi tree DOM
+ Để sử dụng chỉ cần return về 1 function trong effectFunction

```angular2svg
() => {
  useEffect(() => {
    const clickWindow = () => console.log('1')
    window.addEventListener('click', clickWindow)

    // return 1 function, sẽ được gọi ngay trước khi componentWillUnmount
    return () => {
      window.removeEventListener('click', clicked)
    }
  }, [])

  return <div>F12 check log của trình duyệt!</div>
}
```

### 3. useEffect cleanup (dọn dẹp)
- Có 1 số tình huống cần dọn dẹp trước khi unmouting
- Để tránh xảy ra tình trạng đầy bộ nhớ.
Ví dụ : setInterval, Scroll....