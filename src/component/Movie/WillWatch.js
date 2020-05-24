import React from "react";

export  default class WillWatch extends React.Component{
    constructor() {
        super();
        this.state={
            will:[],
        }
    }

    addForWatch = item => {
        this.setState(
            {will: this.will.push(item)}
        );
        this.render()
    }
        render() {
            return (
                <div>
                    <h2 style={{textAlign: "center"}}>Will Watch</h2>
                </div>
            );

                    }
}

