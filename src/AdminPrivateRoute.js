import React,{useState,useEffect} from 'react';
import {Route,useNavigate} from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import axios from 'axios';
import swal from 'sweetalert';

function AdminPrivateRoute(props) {

  const[Authenticated,setAuthenticated] = useState(false);
//   const [loading,setLoading] = useState(true);

    let Cmp = props.Cmp
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`/api/checkingAuthenticated`).then(res =>{
            if(res.status === 200){
                setAuthenticated(true);

            }
         
          
        });
    
      if(!localStorage.getItem('auth_token')){
        swal("Unauthorized");
        navigate('/');
      }
    if(Authenticated === true)
      {
        navigate('/login');
      }
     
    

      return () => {
        setAuthenticated(false);
      };
     
  
    },[])

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if(err.response.status === 401)
        {
            swal("Unauthorized",err.response.data.message,"warning");
            navigate('/');
        }
        return Promise.reject(err);
    });

    axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if(error.response.status === 403) // Access Denied
            {
                swal("Forbidden",error.response.data.message,"warning");
                navigate('/403');
            }
            else if(error.response.status === 404) //Page Not Found
            {
                swal("404 Error","Url/Page Not Found","warning");
                navigate('/404');
            }
            return Promise.reject(error);
        }
    );
  
    return (
      <div>
     <Cmp/>
        </div>
    )




//     const navigate = useNavigate();
//   return (

//     <Route {...rest}
//     render={ ({props, location}) => 
//      localStorage.getItem('auth_token') ?
//         ( <MasterLayout {...props} /> ) :
//         navigate("/login" , { replace: location } )
       
//     }
// />
  
//   )
}

export default AdminPrivateRoute