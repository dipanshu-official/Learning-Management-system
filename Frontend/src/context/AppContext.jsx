import React, { createContext, useEffect, useState } from 'react';
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppContextProvider = (props) => {
    // Define the state and update function
    const currency = import.meta.env.VITE_CURRENCY

    const [allCourse, setAllCourse] = useState([])
    const [isEducator, setIsEducator] = useState(true)

    const fethchAllCourses = async () => {
        setAllCourse(dummyCourses)
    }
    // Function to calculate average raiting of course
    const calculateAverageRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating;  
        })

        return totalRating / course.courseRatings.length
    };

    useEffect(() => {
        fethchAllCourses()
    }
        , [])

    const value = {
        currency, allCourse, calculateAverageRating,isEducator ,setIsEducator,allCourse
    }

    return (
        <AppContext.Provider value={value}>
            {/* Render the children components */}
            {props.children}
        </AppContext.Provider>
    );
};