import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: "Ahmad",
            age: 22,
            skill: "Crpto"
        },
        {
            id: 2,
            name: "Abba",
            age: 23,
            skill: "Networking"
        },
        {
            id: 3,
            name: "Ella",
            age: 21,
            skill: "Andriod Native"
        }
    ];
    const personList = persons.map(person => <Person person = {person} key = {person.id}/> )

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
