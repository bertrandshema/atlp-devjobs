function JobContent({job}){
    return (
      <div className="min-h-24 mt-10 pb-16">

        <div className="max-w-4xl grid grid-cols-1 gap-5 p-10 mx-auto bg-white dark:bg-darkBlue rounded-md">
          <div className="basis-1/1 flex flex-row items-center justify-between">
            <div className="basis-2/3">
              <p className="text-darkGrey text-md mt-4 ">{job.postedAt} <span style={{fontSize: '52px', lineHeight: '14px'}}>.</span> {job.contract}</p>
              <h2 className="text-midnight mt-2 font-extrabold text-2xl dark:text-white">{job.position}</h2>
              <p className="font-bold text-violet mt-2 text-sm">{job.location}</p>
            </div>
            <div className="basis-1/3 text-right">
              <a href={job.website} className="bg-violet text-white py-3 px-6 rounded-lg font-bold cursor-pointer">Company Site</a>
            </div>
          </div>
          <div className="basis-1/1 flex flex-col gap-8 mt-7">
            <p className="text-darkGrey text-sm dark:text-lightGrey">
              {job.description}
            </p>
            <h3 className='text-darkBlue text-2xl font-bold dark:text-white'>Requiremnts</h3>
            <p className="text-darkGrey text-sm dark:text-lightGrey">
              {job.requirements.content}
            </p>
            <ul className="list-disc text-darkGrey text-sm list-inside">
                {job.requirements.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3 className='text-darkBlue text-2xl font-bold dark:text-white'>What you will do</h3>
            <p className="text-darkGrey text-sm dark:text-lightGrey">
            {job.role.content}</p>
            <ol className="list-decimal text-darkGrey text-sm list-inside">
                {job.role.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}               
            </ol>
          </div>
  
        </div>
      </div>
    );
  }

  export default JobContent;