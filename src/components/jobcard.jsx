import { Link } from 'react-router-dom';
function JobCard({jobId, jobImage, jobTime, jobTitle, jobComp, jobType, jobLoc, logoBg}){

    return (
        <Link to={`/job/${jobId}`} className="block">
        <div className="flex flex-col items-center justify-center rounded-xl mx-6 z-10 w-12 h-12 absolute" style={{ backgroundColor: logoBg }}>
          <img src={jobImage} alt='' className='w-8' />
        </div>
        <div className="bg-[hsl(20%, 10%, 23%)]"></div>
        <div className="w-full px-6 py-8 rounded bg-white flex flex-col gap-3 mt-6 z-0 dark:bg-darkBlue">
          <p className="text-darkGrey text-md mt-4 ">{jobTime} <span style={{ fontSize: '52px', lineHeight: '14px' }}>.</span> {jobType}</p>
          <h3 className="text-midnight font-extrabold text-xl dark:text-white">{jobTitle}</h3>
          <p className="text-darkGrey text-md ">{jobComp}</p>
          <p className="font-bold mt-6 text-violet text-sm">{jobLoc}</p>
        </div>
      </Link>
    );
  }
  export default JobCard