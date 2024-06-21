import React, { useState } from 'react'
import { db } from '../Firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';

function ProjectTags({ path }) {

    const [hasLink, setHasLink] = useState(true);

    const query = collection(db, path);
    const [docs, loading, error, snapshot] = useCollectionData(query);

    console.log(`Fetching tags from path: ${path}`);
    console.log('Fetched tags:', docs);

    if (loading) return <div>Loading...</div>;
    if (error) {
        console.error('Error fetching tags:', error);
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='py-4 h flex flex-wrap gap-2 justify-center'>
            {docs?.map((doc, index) => (
                <p className='bg-white text-black p-2 rounded-3xl' key={ index }>#{ doc.name }</p>
            ))}
        </div>


    )
}

export default ProjectTags