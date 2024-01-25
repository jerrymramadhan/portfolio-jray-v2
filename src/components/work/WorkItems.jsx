import React from "react";

function WorkItems({item}) {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <a href="https://github.com/jerrymramadhan" target="_blank" rel="noreferrer" className="work__button">
                Go to Sourcecode <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    );
};

export default WorkItems;