import { db } from '../Firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import noimage from '../img/noimage.png';
import ProjectTags from './ProjectTags';
import BarLoader from 'react-spinners/BarLoader';

function ProjectCard() {

    const query = collection(db, '/projects')
    const [docs, loading] = useCollectionData(query);

    if (loading) {
        return (
            <div className="text-center my-12">
                <BarLoader color='#FFFFFF' width={200} />
            </div>
        );
    }
    else {
        return (
            <div className='flex flex-wrap gap-10 justify-center py-20 w-10/12'>
                {docs?.map((doc, index) => (
                    <div className="relative flex flex-col mt-6 bg-darkGray shadow-md bg-clip-border rounded-xl h-fit w-96" key={ index }>
                        <img
                            className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 object-cover"
                            src={`${doc.imglink === "#" ? noimage : doc.imglink}`}
                            alt={doc.imgalt}>
                        </img>
                        <div className="p-6 h-56 flex flex-col justify-between">
                            <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {doc.name}
                            </h5>
                            <p className="block  text-base antialiased font-light leading-relaxed text-inherit">
                                {doc.desc}
                            </p>
                            <ProjectTags path={`/projects/${doc.name}/tags`} />
                        </div>
                        <div className="flex border-t-2 border-t-white">
                            {doc.demolink !== "#" && (
                                <a className='p-3 w-1/2 rounded-bl-xl hover:bg-lightGreen' href={doc.demolink} target='_blank' rel="noreferrer">
                                    Preview
                                </a>
                            )}
                            <a href={doc.link} target='_blank' rel="noreferrer"
                                className={`p-3 hover:bg-lightGreen ${doc.demolink !== "#" ? 'w-1/2 rounded-br-xl' : 'w-full rounded-b-xl'}`}>
                                Source Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ProjectCard