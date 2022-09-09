import React, { forwardRef } from "react";

const InputComponent = (props, ref) => {
    return (
        <input type={'text'} ref={ref} />
    )
}

// HOC
export default forwardRef(InputComponent);