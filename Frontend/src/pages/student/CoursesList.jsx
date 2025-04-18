import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SearchBar from '../../components/student/SearchBar'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../components/student/CourseCard'


const CoursesList = () => {
  const { allCourse } = useContext(AppContext)

  const navigate = useNavigate()
  const input = useParams()
  const [filteredCourse, setfilteredCourse] = useState([])


  useEffect(() => {
    if(allCourse && allCourse.length > 0){
      const tempCourses = allCourse.slice()

      input ? setfilteredCourse(
        tempCourses.filter(
          item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
        )
      )
      :setfilteredCourse(tempCourses)
    }
  }, [allCourse,input])
  
  return (
    <div className='relative md:px-36 px-8 pt-20 text-left '>
      <div className='flex flex-col md:flex-row gap-6  items-start w-full justify-between'>

        <div>
          <h1 className="text-4xl font-semibold text-gray-800 ">Course List</h1>
          <p className='text-gray-500 '>
            <span className='text-blue-600 cursor-pointer' onClick={() => {
              navigate('/')
            }}>Home</span>/ <span>Course List</span>
          </p>
        </div>
        <SearchBar data={input} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
        {allCourse.map((course ,index)=><CourseCard key={index} course={course}/>)}
      </div>
    </div>
  )
}

export default CoursesList