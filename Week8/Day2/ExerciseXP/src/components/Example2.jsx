import React, { Component } from 'react'
import data from '../assets/data2.json'

export default class Example2 extends Component {
    constructor(props) {
        super(props);
        this.skills = data.Skills;
    }
    render() {
        return (
            <>
                {this.skills.map((item, index) => {
                    return <React.Fragment key={index}>
                        <h2>{item.Area}</h2>
                        <ul>
                            {item.SkillSet.map((skillItem, i) => <li key={i}>{skillItem.Name}</li>)}
                        </ul>
                    </React.Fragment>
                })}
            </>
        )
    }
}
