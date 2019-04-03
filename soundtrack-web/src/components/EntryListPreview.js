import React from 'react'
import EntryPreview from './EntryPreview'



const EntryListPreview = (props) => {


        const entryList = props.entries.entries.map(entry => <EntryPreview entry={entry} key={entry.id} />)
        return (
            
            <div>
                <ul>
                {entryList}
                </ul>
                
            </div>
        )
    }

export default EntryListPreview