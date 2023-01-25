import React from 'react'
import { Button } from 'antd';

const PageButton = ({index}) => {
    return (
        <Button onCl type="primary" shape="circle">
           {index}
        </Button>
    )
}

export default PageButton