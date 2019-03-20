import React from 'react'
import Entry from './Entry'

const EntryList = props => {

        const entryList = props.entries.entries.map(entry => <Entry entry={entry} key={entry.id} />)
        return (
            <div>
                <ul>
                {entryList}
                </ul>
            </div>
        )
    }

export default EntryList