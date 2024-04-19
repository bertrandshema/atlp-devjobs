function JobFooter({job}){
    return(
    <div className="min-h-14 bg-white dark:bg-darkBlue">
      <div className="max-w-4xl grid grid-cols-1 gap-5 py-8 px-0 mx-auto">
        <div className="basis-1/1 flex flex-row items-center justify-between">
          <div className="basis-2/3">
            <h2 className="text-midnight mt-2 font-extrabold text-2xl dark:text-white">{job.position}</h2>
            <p className="text-darkGrey text-md mt-4 dark:text-lightGrey">{job.company}</p>
          </div>
          <div className="basis-1/3 text-right">
            <a href={job.website} className="bg-violet text-white py-3 px-6 rounded-lg font-bold cursor-pointer">Company Site</a>
          </div>
        </div>
      </div>
    </div>
    );
  }

export default JobFooter;