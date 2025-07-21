import React, { Component, Fragment } from 'react'
import data from '../assets/data2.json'


export default class Example3 extends Component {
    constructor(props) {
        super(props);
        this.experiences = data.Experiences;
    }
    render() {
        return (
            this.experiences.map((item, index) => {
                return <Fragment key={index}>
                    <img src={item.logo} alt="NO IMAGE AVAILABLE"
                        style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'contain',
                            border: '1px solid #ccc',
                            marginBottom: '10px'
                        }} />
                    <p><a href={item.url}>{item.companyName}</a></p>
                    {item.roles.map((roleItem, i) => {
                        return <Fragment key={i}>
                            <h3>{roleItem.title}</h3>
                            <p>{roleItem.startDate} {roleItem.endDate ? "- " + roleItem.endDate : null} {roleItem.location}</p>
                            <p>{roleItem.description}</p>
                        </Fragment>
                    })}
                </Fragment>
            })
        )
    }
}
