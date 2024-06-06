import axios from 'axios';

const fetchData = async () => {
    try {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');

        // Include token in request headers
        const response = await axios.get('/protected', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Handle response data
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error:', error.response.data.message);
    }
};

export default fetchData; 
