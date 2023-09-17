import Experience from '@/components/Experience/experience'
import React from 'react'

export default function page() {
    const role = '<Frontend Developer/>'
    return (
        <div className='p-8 -mt-8 pt-0'>

            <div className='flex items-center p-8 justify-center'>
                <div className='my-4 mx-2'>
                    <img src="https://images.unsplash.com/photo-1694746027247-4b6f9c6b261d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" alt="" className='rounded-lg' />
                </div>
                <div className="greet -mt-12">
                    <div className='nam'>
                        <ul>
                            <li>
                                <div id="letter">N</div>
                            </li>
                            <li>
                                <div id="letter">a</div>
                            </li>
                            <li>
                                <div id="letter">m</div>
                            </li>
                            <li>
                                <div id="letter">a</div>
                            </li>
                            <li>
                                <div id="letter">s</div>
                            </li>
                            <li>
                                <div id="letter">t</div>
                            </li>
                            <li>
                                <div id="letter">e</div>
                            </li>
                        </ul>
                    </div>
                    <span className='text-2xl'>I'm Prathamesh Lade</span>
                    <span className='text-3xl role my-1'>{role}</span>
                    <p className='text-2xl text-center'>{`I enjoy creating solid, scalable frontend products with excellent user experience. `}</p>
                </div>
            </div>

            <hr className='border-gray-500 border-2' />

            <Experience />
        </div>
    )
}
