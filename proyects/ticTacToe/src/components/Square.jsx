//React fuctinal component
import React from 'react';

const Square = ({children, isSelected, updateBoard, index}) => {
    const clgStyle = "color: yellow; font-size: 16px";
    const className = isSelected ? 'square is-selected' : 'square';

    const handleClick = () => {
        updateBoard(index); 
    }


    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )
}

export default Square