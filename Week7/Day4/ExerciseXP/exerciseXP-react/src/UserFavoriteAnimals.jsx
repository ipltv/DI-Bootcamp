import React, { Component } from 'react'

export default class UserFavoriteAnimals extends Component {
    render() {
        return (
            <>
                <ul>
                    {this.props.favAnimals.map((item, index) => {
                        return (
                            <li>Favorite animal #{index+1}: {item}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

