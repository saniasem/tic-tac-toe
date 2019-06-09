import React from 'react';
import Cell from './Cell';

class Board extends React.Component {

    renderCells() {
        const {cells, onClick} = this.props;
        return cells.map( (cell, index) => {
            return (
                <Cell value={cell} 
                key={'cell-' + index} 
                onClick={() => onClick(index)}/>
            );
        })

    }

    render() {
        return (
        <div className='board'>
            {this.renderCells()}
        </div>
        );
    }
}

export default Board;