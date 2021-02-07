import React from 'react'

const Cards = ({ news, error }) => {
    return (
        <>
            {
                error ?
                    (<div className='p-10 min-h-screen flex items-center justify-center'>
                        {error}
                    </div>)

                    :

                    (news.length !== 0 ? (<div
                        className="container my-5 mx-1 md:m-auto grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4">
                        {news.map((x, key) => (<div key={key} className="rounded-lg overflow-hidden hadow-md bg-blue-50 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <div className="relative overflow-hidden pb-60">
                                <img
                                    className="absolute h-full w-full object-cover object-center"
                                    src={x.urlToImage ? x.urlToImage : './Desktop-ModelS.jpeg'}
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <div className="h-72 py-10 px-8">
                                    <h3 className="text-base font-bold">{x.title}</h3>
                                    <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                                        <p>Provided by&nbsp;</p>
                                        <p className="hover:text-black transition duration-300 ease-in-out font-bold">
                                            {x.source.name}
                                        </p>
                                    </div>
                                    <p className="leading-7 text-xs">
                                        {x.description}
                                    </p>
                                </div>
                            </div>
                            <div className="py-10 px-8 flex justify-between items-center">
                                <div>
                                </div>
                                <a href={x.url} rel="noopener noreferrer" target="_blank" className="flex items-center">
                                    <p className="mr-4" href={x.url}>Read more</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14.125"
                                        height="13.358"
                                        viewBox="0 0 14.125 13.358"
                                    >
                                        <g transform="translate(-3 -3.293)">
                                            <path
                                                id="Path_7"
                                                data-name="Path 7"
                                                d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                                                fill="#1d1d1d"
                                                fillRule="evenodd"
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        ))}
                    </div>
                    ) : (
                            <div className="p-10 min-h-screen flex items-center justify-center ">
                                <div className="animate-spin">
                                    <div className="h-16 w-16 bg-white bg-opacity-50 rounded-full flex items-center justify-center">
                                        <span className="text-5xl">🌎</span>
                                    </div>
                                </div>
                            </div>
                        ))
            }
            {/* {news.length !== 0 ? (<div
                className="container my-5 mx-1 md:m-auto grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4">
                {news.map((x, key) => (<div key={key} className="rounded-lg overflow-hidden hadow-md bg-blue-50 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="relative overflow-hidden pb-60">
                        <img
                            className="absolute h-full w-full object-cover object-center"
                            src={x.urlToImage ? x.urlToImage : './Desktop-ModelS.jpeg'}
                            alt=""
                        />
                    </div>
                    <div className="">
                        <div className="h-72 py-10 px-8">
                            <h3 className="text-base font-bold">{x.title}</h3>
                            <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                                <p>Provided by&nbsp;</p>
                                <p className="hover:text-black transition duration-300 ease-in-out font-bold">
                                    {x.source.name}
                                </p>
                            </div>
                            <p className="leading-7 text-xs">
                                {x.description}
                            </p>
                        </div>
                    </div>
                    <div className="py-10 px-8 flex justify-between items-center">
                        <div>
                        </div>
                        <a href={x.url} rel="noopener noreferrer" target="_blank" className="flex items-center">
                            <p className="mr-4" href={x.url}>Read more</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.125"
                                height="13.358"
                                viewBox="0 0 14.125 13.358"
                            >
                                <g transform="translate(-3 -3.293)">
                                    <path
                                        id="Path_7"
                                        data-name="Path 7"
                                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                                        fill="#1d1d1d"
                                        fillRule="evenodd"
                                    ></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>

                ))}
            </div>
            ) : (
                    <div className="p-10 min-h-screen flex items-center justify-center ">
                        <div className="animate-spin">
                            <div className="h-16 w-16 bg-white bg-opacity-50 rounded-full flex items-center justify-center">
                                <span className="text-5xl">🌎</span>
                            </div>
                        </div>
                    </div>
                )
            } */}

        </>
    )
}

export default Cards
