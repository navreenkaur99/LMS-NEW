import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/course/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.para}</h1>
      {/* Add other course details here */}
    </div>
  );
};

export default DetailPage;
