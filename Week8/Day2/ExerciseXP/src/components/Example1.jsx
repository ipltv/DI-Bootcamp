import React, { Component } from 'react'
import data from '../assets/data2.json'

export default class Example1 extends Component {
    constructor(props) {
        super(props);
        this.socialMedias = data.SocialMedias;
    }

    render() {
        return (
            <ul>
                {this.socialMedias.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        )
    }
}
