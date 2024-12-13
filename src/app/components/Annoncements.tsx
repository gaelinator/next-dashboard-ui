const Annoncements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium">Annoncements</h1>
            <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-blueSkyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
                </div>
                <p className="text-xm text-gray-500"> 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Cumque odit quis a tenetur corrupti corporis voluptatibus porro. 
                </p>
            </div>
            <div className="bg-purpleSkyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
                </div>
                <p className="text-xm text-gray-500"> 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Cumque odit quis a tenetur corrupti corporis voluptatibus porro. 
                </p>
            </div>
            <div className="bg-yellowSkyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
                </div>
                <p className="text-xm text-gray-500"> 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Cumque odit quis a tenetur corrupti corporis voluptatibus porro. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Annoncements