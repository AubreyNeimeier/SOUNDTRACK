import React from 'react'
import EntryPreview from './EntryPreview'


const EntryListPreview = (props) => {

debugger
        const entryList = props.entries.entries.map(entry => <div><EntryPreview entry={entry} key={entry.id} /></div>)
        return (
            
            <div>
                <ul>
                {entryList}
                </ul>
                
            </div>
        )
    }

export default EntryListPreview