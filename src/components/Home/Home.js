import React from 'react';
import ArrowLink from "../ArrowLink/ArrowLink";
import Language from "../../config/lang";

export default (props) => {
    const {lang} = props;
    return (
        <section id={'home'} className={'home'}>
            <div className={'wrapper'}>
                <h1>Miguel Rueda.</h1>
                <p className={'description'}>Buenos Aires based <strong>designer</strong> and <strong>front-end
                    developer</strong> specialized
                    in creating beautiful and valuable user experiences</p>
            </div>
            <ArrowLink
                action={() => {console.log(Language.portfolio[lang])}}
                fixedTo={'bottom'}
                label={Language.portfolio[lang]}/>
        </section>
    )
};
