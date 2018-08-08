import React from "react";
import nav from "./model";
import classNames from "classnames";

const renderMenu = (lang) => {
    return (
        <ul className={'mainMenu'}>
            {Object.keys(nav).map((e, i) => {
                return <li key={i}>
                    <a href="!#" className={classNames({boxed: nav[e].boxed})}>{nav[e][lang]}</a>
                </li>
            })}
        </ul>
    )
};

export default (props) => {
    const {lang} = props;
    return (
        <header id={'header'} className={'header'}>
            <div className={'wrapper'}>
                <nav>
                    <a className={'logoLink'} href="!#">Miguel Rueda</a>
                    {renderMenu(lang)}
                </nav>
            </div>
        </header>
    )
};