import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';
import Navbar from '../../../layouts/admin/Navbar';
import Sidebar from '../../../layouts/admin/Sidebar';
import Footer from '../../../layouts/admin/Footer';



function EditCategory(props) 
{
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [categoryInput, setCategory] = useState([]);
    const [error, setError] = useState([]);
   const { id } = useParams();
    console.log(id);
  

    useEffect(() => {

        axios.get(`/api/edit-category/${id}`).then(res=>{

            if(res.data.status === 200)
            {
                setCategory(res.data.category);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                navigate('/admin/view-category');
            }
            setLoading(false);
        });

    }, []);

    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name]: e.target.value });
    }

    const updateCategory = (e) => {
        e.preventDefault();
        
        //const category_id = props.match.params.id;
        const data = categoryInput;
        axios.put(`/api/update-category/${id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandatory","","error");
                setError(res.data.errors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                navigate('admin/view-category');
            }
        });
    }

    if(loading)
    {
        return <h4>Loading Edit Category...</h4>
    }

    return (
        <div className="sb-nav-fixed">
        <Navbar />
        
        <div id="layoutSidenav">
    
            <div id="layoutSidenav_nav">
                <Sidebar />
    
                </div>
        
                <div id="layoutSidenav_content">
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Edit Category 
                        <Link to="/admin/view-category" className="btn btn-primary btn-sm float-end">BACK</Link>
                    </h4>
                </div>
                <div className="card-body">

                    <form onSubmit={updateCategory}>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="seo-tags-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="seo-tags" aria-selected="false">SEO Tags</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                <div className="form-group mb-3">
                                    <label>Slug</label>
                                    <input type="text" name="slug" onChange={handleInput} value={categoryInput.slug} className="form-control" />
                                    <small className="text-danger">{error.slug}</small>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Name</label>
                                    <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control" />
                                    <small className="text-danger">{error.name}</small>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Description</label>
                                    <textarea name="description" onChange={handleInput} value={categoryInput.description} className="form-control"></textarea>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Status</label>
                                    <input type="checkbox" name="status" onChange={handleInput} value={categoryInput.status} /> Status 0=shown/1=hidden
                                </div>

                            </div>
                            <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">

                                <div className="form-group mb-3">
                                    <label>Meta Title</label>
                                    <input type="text" name="meta_title" onChange={handleInput} value={categoryInput.meta_title} className="form-control" />
                                    <small className="text-danger">{error.meta_title}</small>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Meta Keywords</label>
                                    <textarea name="meta_keyword" onChange={handleInput} value={categoryInput.meta_keyword} className="form-control"></textarea>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Meta Description</label>
                                    <textarea name="meta_descrip" onChange={handleInput} value={categoryInput.meta_descrip} className="form-control"></textarea>
                                </div>

                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary px-4 float-end">Update</button>
                    </form>

                </div>
            </div>
        </div>
        </div>
        </div>
        <Footer />
        </div>
    )
}
export default EditCategory;
