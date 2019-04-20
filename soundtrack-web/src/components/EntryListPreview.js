import React from 'react'
import EntryPreview from './EntryPreview'



const EntryListPreview = (props) => {


        const entryList = props.entries.entries.map(entry => <EntryPreview entry={entry} key={entry.id} />)
        const cloudList = props.clouds.map(cloud => <p > {cloud} </p>)
        return (
            
            <div>
                <div className="cloud-show">
                    {cloudList}
                </div>
                
                <ul>
                    {entryList}
                </ul>
                
            </div>
        )
    }

export default EntryListPreview