import React from 'react'
import { db } from '../Firebase'
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import BarLoader from "react-spinners/BarLoader";
import SkillCarousel from "./SkillCarousel"

function ProfileTable() {

    const query = collection(db, '/profile/basic-info/main-profile')
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
            <>
                {docs?.map((doc, index) => (
                    <>
                        <p className='w-10/12 md:w-6/12 mt-12 text-center text-lg'>{doc.aboutme}</p>
                        <div className='grid items-start gap-7 grid-cols-2 mt-12 w-10/12 md:w-6/12'>
                            <h4 className='text-xl font-semibold text-left'>Name:</h4>
                            <p className='text-right'>{doc.name}</p>
                            <h4 className='text-xl font-semibold text-left'>Gender:</h4>
                            <p className='text-right'>{doc.gender}</p>
                            <h4 className='text-xl font-semibold text-left'>Birthday:</h4>
                            <p className='text-right'>{doc.birthday}</p>
                            <h4 className='text-xl font-semibold text-left'>MBTI:</h4>
                            <p className='text-right'>{doc.mbti}</p>
                            <h4 className='text-xl font-semibold text-left'>Interests:</h4>
                            <p className='text-right'>{doc.interests}</p>
                        </div>

                        <h3 className='text-4xl font-semibold mt-10' id="about">Skills</h3>
                        <SkillCarousel />
                    </>
                ))}
            </>

        )
    }
}

export default ProfileTable