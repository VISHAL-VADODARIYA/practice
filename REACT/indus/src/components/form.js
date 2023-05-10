import React from 'react'

export default function Form(props) {

    function gender(data) {
        return (<>
            {data.gender === male ? "Mr" : "Mrs"} {firstName} {middleName} {LastName}
        </>
        )

    }
    return (
        <div>
            <form>
                <div>
                    <h1>{props.d}</h1>

                    <label>first name :</label>
                    <input ></input>
                </div>
            </form>
        </div>
    )
}
