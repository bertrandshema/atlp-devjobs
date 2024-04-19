
function JobIntro({job}){

    return(
    <div className="min-h-24 -mt-10">
    <div className="max-w-4xl h-36 flex flex-row  mx-auto content-stretch p-0 bg-white rounded-md shadow-md dark:bg-darkBlue">
      <div className="basis-1/5 py-4 px-4 flex flex-row items-center justify-center" style={{backgroundColor: job.logoBackground}}>
        <img src={`http://localhost:3000/${job.logo}`} alt={job.company} className='job-logo'/>
      </div>
      <div className="basis-4/5 flex flex-row content-center justify-between p-10 ">
        <div className="content-center basis-1/2">
          <h1 className='text-darkBlue text-2xl font-bold dark:text-white '>{job.company}</h1>
          <p className="text-darkGrey dark:text-white" >{job.website}</p>
        </div>
        <div className="content-center basis-1/2 text-right">
          <a href={job.apply} className="bg-lightViolet text-darkBlue py-3 px-6 rounded-lg font-bold cursor-pointer">Company Site</a>
        </div>
  
      </div>
    </div>
  </div>
    );
  }

  export default JobIntro;