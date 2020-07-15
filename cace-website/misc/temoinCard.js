import React from 'react'

const temoinCard = (props) => {
    return (
        <div className="Card">
            <div className="quoteleft">
                <img src="/assets/svg/quote.svg" alt=""/>
            </div>
            <div className="text">
                {props.text}
            </div>
            <div className="quoteright">
                <img src="/assets/svg/quote.svg" alt=""/>
            </div>
            <div className="profile">
                <div className="pic">
                    <img src={props.pic} alt=""/>
                </div>
                <div className="info">
                    <h1 className="name">{props.name}</h1>
                    <p className="desc">{props.post}</p>
                </div>
            </div>
        </div>
    )
}

export default temoinCard
