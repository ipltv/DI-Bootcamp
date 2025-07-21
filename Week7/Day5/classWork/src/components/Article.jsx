import React from 'react'

const Article = ({ title, body }) => {
    // console.log(props);
    // const {title, body} = props
    if (!body) {
        return (
            <>
                <acticle>
                    <h2>{title}</h2>
                </acticle>
            </>
        )
    }
    return (
        <>
            <acticle>
                <h2>{title}</h2>
                <p>
                    {body}
                </p>
            </acticle>
        </>
    )

}

export default Article;