import React from 'react'
import CareerPageHeader from '../components/CareerPageComponents/CareerPageHeader.jsx'
import { FiSearch } from 'react-icons/fi'
import SelectionBox from '../components/CareerPageComponents/SelectionBox.jsx'
import JobCards from '../components/CareerPageComponents/JobCards.jsx'
import Logo from '../assets/hsi-logo.png'


export default function CareerPage() {
  const testing = <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
  return (
    <>
    <CareerPageHeader />
    <div className='w-full justify-center items-center flex flex-col'>
      {/* Configuration goes here */}
      <div className='w-[90%] bg-white rounded-t-xl justify-center items-center flex gap-5 p-5 border-b-2 shadow-md'>
          <input className='bg-gray-100 p-2 w-[70%] border border-gray-300 rounded-xl focus:outline focus:outline-yellow-400' type="text" placeholder={testing} />      
          <SelectionBox className="w-[30%]" test={[{value: "option1", label: "Tag"}, {value: "option2", label: "Tag 1"}, {value: "option2", label: "Tag 2"}]} />                  
      </div>
      <div className='w-[90%] bg-white rounded-b-xl justify-center items-center flex gap-5 p-5 shadow-md'>
          <SelectionBox test={[{value: "option1", label: "Department"}, {value: "option2", label: "Quality Assurance"}, {value: "option2", label: "Web Development"}, {value: "option2", label: "IT Sales"}]} />         
          <SelectionBox test={[{value: "option1", label: "Status"}, {value: "option2", label: "Urgent"}, {value: "option2", label: "New"}]} />         
          <SelectionBox test={[{value: "option1", label: "Role"}, {value: "option2", label: "Web Developer - Intern"}, {value: "option2", label: "Quality Assurance - Intern"}]} />         
          <SelectionBox test={[{value: "option1", label: "Tag"}, {value: "option2", label: "Tag 1"}, {value: "option2", label: "Tag 2"}]} />                  
          <button className='bg-yellow-500 p-2 w-[100%] border border-gray-300 rounded-xl mr-5'><span className='text-white'>CLEAR</span></button>
      </div>

{/* -------------------------------------------------------------------------- */}
      <div className='w-[90%] my-5 pt-5'>
        {/* Job Listings will go here */}
        <div className='grid grid-cols-2 gap-x-[50px] gap-y-5'>
          <JobCards JobTitle={"QA - Intern"} JobDescription={"Learn QA practices under mentor guidance"} spans={["Open", "Full-time"]}/>
          <JobCards JobTitle={"QA - Engineer"} JobDescription={"Ensuring product quality and reliability"}/>
          <JobCards JobTitle={"Web Developer - Intern"} JobDescription={"Work closely with developers on real-world tasks"}/>
          <JobCards JobTitle={"Web Developer - Intern"} JobDescription={"Work closely with developers on real-world tasks"}/>
          <JobCards JobTitle={"Web Developer - Intern"} JobDescription={"Work closely with developers on real-world tasks"}/>
          <JobCards JobTitle={"Web Developer - Intern"} JobDescription={"Work closely with developers on real-world tasks"}/>
        </div>
      </div>
    </div>
    </>

)
}
