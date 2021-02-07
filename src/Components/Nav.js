import React, { useState } from 'react'
import categories from './CategoriesEntries'
const Nav = ({ fun }) => {

    // const btn = document.querySelector("button.mobile-menu-button");
    // const menu = document.querySelector(".mobile-menu");

    //const btn = useRef()
    //const menu = useRef()
    // // add event listeners
    // btn.addEventListener("click", () => {
    // menu.classList.toggle("hidden");
    // });

    // useEffect(() => {
    //     btn.current.addEventListener('click',() => {
    //         // menu.current.
    //     })
    //     return () => {}
    // }, [])
    const [click, setClick] = useState(1);
    const navClick = (id) => {
        const clickedVal = categories.filter(x => x.id === id)
        setClick(id)
        id !== 1 ? fun(clickedVal[0].name) : fun()
    }
    return (
        <div className='py-10'>
            <nav className="bg-gray-200 fixed left-0 right-0 top-0">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            <div className="hidden md:flex items-center space-x-1">
                                {
                                    categories.map((x, key) => {
                                        if (x.id !== 1) {
                                            return (
                                                <button className="py-5 px-5 text-gray-700 hover:text-gray-900" key={x.id} onClick={() => navClick(x.id)}>
                                                    <span className={click === x.id ? 'font-bold' : null}>{x.name}</span>
                                                </button>)
                                        } else {
                                            return (
                                                <div key={x.id}>
                                                    <button className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900" onClick={() => navClick(x.id)}>
                                                        <img className='h-6 w-6' src="./newspaper.svg" alt="*"></img>
                                                        <span className={click === x.id ? 'font-bold' : null}>{x.name}</span>
                                                    </button>
                                                </div>)
                                        }
                                    })
                                }
                            </div>
                        </div>

                        <div className="md:hidden flex items-center py-5">
                            <button className="mobile-menu-button">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>


                {/* <div ref={menu} className="mobile-menu hidden md:hidden">
                    <button className="block py-2 px-4 text-sm hover:bg-gray-200">Features</button>
                    <button className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</button>
                </div> */}
            </nav>

        </div>
    )
}

export default Nav
