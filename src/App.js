import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import searchIcon from './images/icon-search.svg';
import locIcon from './images/icon-location.svg';

import '@fortawesome/fontawesome-free/css/all.css';
import JobCard from './components/jobcard';
import logo from './images/logo.svg';
import data from './data/data.json';

import JobSingle from './components/jobSingle';

function App() {
  return (
    <Router>
      <div className='bg-lightGrey dark:bg-midnight min-h-screen'>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<Job />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>


  );
}
let darkModeTrue = 'false';
function AppHeader(){
  function darkmodeToggle(){
      document.documentElement.classList.toggle("dark")
      document.body.style.backgroundColor = "#121721";
      if(document.documentElement.classList.contains("dark")){
        darkModeTrue = 'true';
      }
      else{
        darkModeTrue = 'false';
      }
  }

  return (
  <div className="w-100 min-h-32 bg-header-hero bg-cover bg-left bg-no-repeat py-20 px-20">
    <div className="container flex flex-row py-4 mx-auto">
      <div className="basis-1/2">
        <img src={logo} alt='' />
      </div>
      <div className="basis-1/2 flex flex-row gap-3 justify-end content-center">
        
        <button onClick={darkmodeToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="112"
                  height="24"
                  viewBox="0 0 112 24"
                  fill="none"
                >
                  <rect x="36" width="48" height="24" rx="12" fill="white" />
                  {darkModeTrue ? (
  <circle cx="73" cy="12" r="7" fill="#5964E0" />
) : (
  <circle cx="48" cy="12" r="7" fill="#5964E0" />
)}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 5.36491C9.67033 5.36491 9.38775 5.07034 9.38775 4.72667V2.83649C9.38775 2.49282 9.67033 2.19824 10 2.19824C10.3297 2.19824 10.6122 2.49282 10.6122 2.83649V4.72667C10.6122 5.07034 10.3297 5.36491 10 5.36491ZM6.40172 7.95241C7.31472 7.10241 8.60365 6.55241 10 6.55241C11.3963 6.55241 12.6853 7.07741 13.5983 7.95241C14.5113 8.80241 15.102 10.0024 15.102 11.3024C15.102 12.6024 14.5113 13.8024 13.5983 14.6524C12.6853 15.5024 11.3963 16.0524 10 16.0524C8.60365 16.0524 7.31472 15.5274 6.40172 14.6524C5.48872 13.8024 4.89796 12.6024 4.89796 11.3024C4.89796 10.0024 5.46187 8.80241 6.40172 7.95241ZM3.0593 5.71033L4.54178 7.14803C4.83827 7.40943 5.26954 7.40943 5.51213 7.14803C5.78167 6.88663 5.78167 6.46839 5.51213 6.20699L4.02965 4.76929C3.76011 4.50789 3.32884 4.50789 3.0593 4.76929C2.78976 5.03069 2.78976 5.44893 3.0593 5.71033ZM0.658124 10.9066H2.60718C2.96156 10.9066 3.26531 11.1806 3.26531 11.5003C3.26531 11.82 2.96156 12.0941 2.60718 12.0941H0.658124C0.303749 12.0941 0 11.82 0 11.5003C0 11.1806 0.303749 10.9066 0.658124 10.9066ZM5.51213 15.8526C5.24259 15.5912 4.81132 15.5912 4.54178 15.8526L3.0593 17.2903C2.78976 17.5517 2.78976 17.97 3.0593 18.2314C3.32884 18.4928 3.76011 18.4928 4.02965 18.2314L5.51213 16.7937C5.78167 16.5323 5.78167 16.114 5.51213 15.8526ZM10 17.6357C10.3297 17.6357 10.6122 17.9303 10.6122 18.274V20.1642C10.6122 20.5078 10.3297 20.8024 10 20.8024C9.67033 20.8024 9.38775 20.5078 9.38775 20.1642V18.274C9.38775 17.9303 9.67033 17.6357 10 17.6357ZM16.9407 17.2903L15.4582 15.8526C15.1617 15.5912 14.7305 15.5912 14.4879 15.8526C14.2183 16.114 14.2183 16.5323 14.4879 16.7937L15.9704 18.2314C16.2399 18.4928 16.6712 18.4928 16.9407 18.2314C17.2102 17.97 17.2102 17.5517 16.9407 17.2903ZM16.7347 11.5003C16.7347 11.1806 17.0384 10.9066 17.3928 10.9066H19.3419C19.6963 10.9066 20 11.1806 20 11.5003C20 11.82 19.6963 12.0941 19.3419 12.0941H17.3928C17.0384 12.0941 16.7347 11.82 16.7347 11.5003ZM14.4879 7.14803C14.7574 7.40943 15.1887 7.40943 15.4582 7.14803L16.9407 5.71033C17.2102 5.44893 17.2102 5.03069 16.9407 4.76929C16.6712 4.50789 16.2399 4.50789 15.9704 4.76929L14.4879 6.20699C14.2183 6.46839 14.2183 6.88663 14.4879 7.14803Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M106 6C104.358 6 102.842 6.69474 101.768 7.76842C100.663 8.84211 100 10.3579 100 12C100 13.6421 100.695 15.1579 101.768 16.2316C102.842 17.3368 104.358 18 106 18C107.642 18 109.158 17.3053 110.232 16.2316C111.305 15.1579 112 13.6421 112 12C112 11.8147 111.991 11.631 111.974 11.4494C111.867 12.369 111.438 13.2044 110.821 13.8211C110.105 14.5368 109.095 15 108 15C106.905 15 105.895 14.5579 105.179 13.8211C104.463 13.1053 104 12.0947 104 11C104 9.90526 104.442 8.89474 105.179 8.17895C105.895 7.46316 106.905 7 108 7C108.716 7 109.397 7.18933 109.982 7.52669C108.929 6.56718 107.519 6 106 6Z"
                    fill="white"
                  />
                </svg>
              </button>
        
        
      </div>
    </div>
  </div>
  );
}

function Home() {
  return (
    <>
      <AppSearchBar />
      <HomeContent />
    </>
  );
}

function Job() {
  return (
    <JobSingle />
  );
}


function AppSearchBar(){
  return(
  <div className="min-h-24 -mt-10">
    <form className="container flex flex-row  mx-auto content-stretch bg-white rounded-xl shadow-md dark:bg-darkBlue">
      <div className="basis-1/3 py-4 px-4 flex flex-row items-center ">
        <img src={searchIcon} className='form-icon' alt="icon"/>
        <input type="text" name="" id="" placeholder="Filter by company, title, expertise..." className="w-full border-0 text-darkGrey dark:bg-darkBlue" />
      </div>
      <div className="basis-1/3 py-4 px-6 flex flex-row items-center border-r-2 border-l-2 border-lightGrey dark:border-midnight">
        <img src={locIcon} className="form-icon"  alt="icon" />
        <input type="text" name="" id="" placeholder="Filter by location..." className=" w-full border-0 text-darkGrey dark:bg-darkBlue"/>
      </div>
      <div className="basis-1/3 flex flex-row content-center justify-between py-4 px-6 ">
        <div className="content-center ">
        <input className='form-input w-4 h-6 mr-2 rounded bg-gray' type="checkbox" name="" id="" value="Fulltime Only" /> <b className='text-sm mt-4 dark:text-white '>Fulltime Only</b>
        </div>
        <input type="button" value="Search" className="bg-violet hover:bg-lightViolet text-white py-3 px-6 rounded-lg font-bold cursor-pointer"/>
      </div>
    </form>
  </div>
  );
}

function HomeContent(){
  return (
    <div className="min-h-24 mt-10 pb-16">
      <div className="container grid  gap-5 py-4 mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {
          data.map((item) => {
            return (
            <JobCard key={item.id} jobId={item.id} jobImage={item.logo} jobTitle={item.position} jobComp={item.company} jobTime={item.postedAt} jobType={item.contract} jobLoc={item.location} logoBg={item.logoBackground} />
            );
          })
        }
      </div>
    </div>
  );
}


export default App;
