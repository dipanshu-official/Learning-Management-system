import React, { useState } from "react";

const AddCourse = () => {
    const [courseData, setCourseData] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Course Data Submitted:", courseData);
        // Add logic to send courseData to the backend
    };

    return (
        <div className="add-course-container">
            <h2>Add New Course</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Course Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={courseData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={courseData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={courseData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={courseData.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourse;