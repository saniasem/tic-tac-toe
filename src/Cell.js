import React from 'react';

function Cell(props) {
    const {value, onClick} = props;
    return (
        <div className="board-cell"  onClick={onClick}>
            {value}
        </div>
    );
}

export default Cell;