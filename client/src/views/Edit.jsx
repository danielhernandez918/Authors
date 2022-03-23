import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useHistory, Link  } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams() //destructure id from params
    const [author, setAuthor] = useState()
    const [Name, setName] = useState()
    const history = useHistory()
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            // .then(response => console.log((response.data)))
            .then(res => {
                setAuthor(res.data)
                const author = res.data
                setName(author.Name)
            })
            .catch(err => console.log(err))
    },[id])

    const handleSubmit =(e)=> {
        e.preventDefault()
        console.log({Name})
        axios.put(`http://localhost:8000/api/authors/${id}`,{Name})
        .then(res=>history.push(`/`)) // If successful, do something with the response. 
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }
    
    return (
        <div>
            {
                author ?
                    <div className="col-6 mx-2">
                        <h3><Link to ={ `/` }>Home</Link></h3>
                        <h3>Edit This Author:</h3>
                        <form onSubmit={ handleSubmit }>
                            <div>
                                <label>Name: </label>
                                <input type="text" name="Name" value={Name}
                                    onChange={e=>setName(e.target.value)}
                                />
                            </div>
                            <div className="d-flex align-items-center">
                                <Link className="btn btn-danger" to ={ `/` }>Cancel</Link>
                                <input className="btn btn-success"type="submit" value="Submit" />
                            </div>
                        </form>
                        {
                            errors.map((err,i) => (
                                <p key={i} style={{color:"red"}}>{err}</p>
                            ))
                        }
                    </div>:
                    <div>
                        <h3><Link to ={ `/` }>Home</Link></h3>
                        <h1> "Author does not exist!"</h1>
                    </div>
            }
        </div>
    )
}
export default Edit