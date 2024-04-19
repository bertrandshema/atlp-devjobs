import { useParams } from 'react-router-dom';
import jobsData from '../data/data.json';
import JobIntro from "./JobIntro";
import JobContent from "./jobContent";
import JobFooter from "./jobFooter";
function JobSingle() {
  const { id } = useParams(); // Access the ID parameter from the URL
  const job = jobsData.find(job => job.id === id); // Find the job with the matching ID

  if (!job) {
    return <div>missing</div>; // Handle case where job is not found
  }
  
  return (
    <>
      <JobIntro job={job} />
      <JobContent job={job} />
      <JobFooter job={job} />
    </>
  );
}
export default JobSingle;
  
  
  
