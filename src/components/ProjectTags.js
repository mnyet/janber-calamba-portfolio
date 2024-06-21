import { db } from '../Firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';

function ProjectTags({ path }) {
    const query = collection(db, path);
    const [docs] = useCollectionData(query);

    return (
        <div className='py-4 h flex flex-wrap gap-2 justify-center'>
            {docs?.map((doc, index) => (
                <p className='bg-white text-black p-2 rounded-3xl' key={ index }>#{ doc.name }</p>
            ))}
        </div>


    )
}

export default ProjectTags