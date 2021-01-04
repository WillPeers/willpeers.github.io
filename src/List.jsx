import React from 'react'

const List = (props) => {
        const { people } = props
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;

        return people.map((person) => {
            if(person.birthday === day && person.birthmonth === month) {
                return (
                <article className="person">
                    <div>
                        <h4>{person.name}</h4>
                        <p>{person.birthday}/{person.birthmonth}</p>
                    </div>
                </article>
                )
            }
        })
}

export default List
