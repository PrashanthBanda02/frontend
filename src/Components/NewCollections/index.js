import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from '../Item'
import './index.css'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections'>
            {new_collection.map((item)=>(
                <Item key={item.id} itemDetails={item} />
            ))}
        </div>
    </div>
  )
}

export default NewCollections