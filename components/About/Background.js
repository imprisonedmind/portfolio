

const Background = () => {
    return (
        <div className="h-[600px] w-full grid grid-cols-2 mt-[150px]">
            <div className="flex col-span-1 px-12 py-20">
                <div className="w-full h-full m-auto rounded-xl backdrop-blur-md bg-gray-50/20">

                </div>
            </div>
            <div className="flex flex-col py-20 col-span-1">
                <div className="text-[60px]  font-bold">
                    <h1>{`Who are you Luke?`}</h1>
                </div>
                <div className="text-2xl mt-7">
                    <h1>Truthfully... Still figuring that out but enjoying the journey!</h1>
                </div>

            </div>
        </div>
    )
}

export default Background