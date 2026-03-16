import React from 'react'
import { db } from '../Firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import BarLoader from 'react-spinners/BarLoader';

function ExperienceSection() {

    const query = collection(db, '/profile/basic-info/work-experience')
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
            <div className='overflow-hidden md:w-6/12 pt-20 w-10/12'>
                {docs?.map((doc, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div 
                            key={index} 
                            className={`flex flex-col mb-16 w-full ${isEven ? 'items-start text-left' : 'items-end text-right'}`}
                        > 
                            {/* Position Title */}
                            <h3 className="text-xl font-bold text-white">
                                {doc.position}
                            </h3>

                            {/* Company Name */}
                            <p className="font-medium text-lg text-gray-300">
                                {doc.company_name}
                            </p>

                            {/* Work Duration */}
                            <p className="text-sm text-gray-500">
                                {doc.work_duration}
                            </p>

                            {/* Description - added max-width to keep it readable */}
                            <p className="w-full text-gray-400">
                                {doc.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }


}

export default ExperienceSection