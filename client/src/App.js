import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ImgGallary from './components/ImgGallary';

const App = () => {
  const [imageGallery, setImageGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/api/getall');
      setImageGallery(res.data.imageGallary);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = imageGallery.slice(indexOfFirstPost, indexOfLastPost);

  // Change page with infinite scroll
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-5 text-center'>Image Gallary</h1>
      <ImgGallary posts={currentPosts} loading={loading} paginate={paginate} currentPage={currentPage} postsPerPage={postsPerPage} />
    </div>
  );
};

export default App;