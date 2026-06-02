import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
const [isLeftPressed, handleLeftClick] = React.useState(false);
    const [isRightPressed, handleRightClick] = React.useState(false);
    const leftButtonClasses = cn('btn', 'btn-secondary', 'left', {
        "active": isLeftPressed
    });
    const rightButtonClasses = cn('btn', 'btn-secondary', 'right', {
        "active": isRightPressed
    });
    return (
        <div className="btn-group" role="group">
            <button type="button" className={ leftButtonClasses } onClick={() => {
                handleLeftClick(true);
                handleRightClick(false);
            }}
            >Left</button>
            <button type="button" className={ rightButtonClasses } onClick={() => {
                handleLeftClick(false);
                handleRightClick(true);
            }}
            >Right</button>
        </div>
    )
  // END
};

export default BtnGroup;
