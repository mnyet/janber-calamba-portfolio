import React from 'react'
import { db } from '../Firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import BarLoader from 'react-spinners/BarLoader';

function SkillCarousel() {

    const query = collection(db, '/profile/basic-info/skills')
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
            <div className='overflow-hidden w-full'>
                <div className='pt-20 flex gap-10 md:gap-20 animate-slide-left hover:animation-pause'>
                    {(docs?.concat(docs) || []).map((doc, index) => (
                        <img src={`${doc.icon}`} className='w-auto' style={{height: "15vh"}} alt={`${doc.skill}`}></img>
                    ))}
                </div>

            </div>
        )
    }


}

export default SkillCarousel