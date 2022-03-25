import React, {useState} from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'

const Create = () => {
    // keep key names the same as they are named in model
    const [Name, setName] = useState("")
    const [Awesome, setAwesome] = useState(false)
    const [errors, setErrors] = useState([]); 
    const history = useHistory()

const handleSubmit =(e)=> {
    e.preventDefault()
    console.log({Name, Awesome})
    axios.post(`http://localhost:8000/api/authors`, {Name, Awesome})
    .then(res=>{
            history.push("/")
        }) // If successful, do something with the response. 
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

// const clearForm = () => {
//     setTitle("");
//     setPrice("");
//     setDescription("");
// }

    return (
        <div className="col-6 mx-2">
            <h3><Link to ={ `/` }>Home</Link></h3>
            <h3>Add A New Author:</h3>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label className="mx-2">Name:</label>
                    <input type="text" name="Name" value={Name}
                        onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="mx-2">Awesome:</label>
                    <input type="checkbox" name="Awesome" checked={Awesome}
                        onChange={e=>setAwesome(e.target.checked)}
                    />
                </div>
                <div className="d-flex align-items-center">
                    <Link className="btn btn-danger mx-2" to ={ `/` }>Cancel</Link>
                    <input className="btn btn-success mx-2"type="submit" value="Submit" />
                </div>
            </form>
            {
                errors.map((err,i) => (
                    <p key={i} style={{color:"red"}}>{err}</p>
                ))
            }
        </div>
    )
}
export default Create