import React from "react";
import classNames from "classnames";

export default (props) => {
    const {fixedTo, label, action} = props;
    return (
        <div className={classNames('arrowLink', fixedTo)} onClick={action}>
            <div>
                <span>{label}</span>
            </div>
        </div>
    )
};