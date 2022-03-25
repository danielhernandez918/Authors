import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const Main = () => {

    const [authors, setAuthors] = useState([]);
    const [refresh, setRefresh] = useState(true)

    const reload = () => {
        setRefresh(!refresh)
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            // .then(response => console.log(response.data))
            .then(response => setAuthors(response.data))
            .catch(err => console.log(err))
    },[refresh]);

    return (
        <div className="col-6 mx-2">
            <h3><Link to ={ `/authors` }>Add An Author</Link></h3>
            <h3>We have quotes by:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Awesome?</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors &&
                            authors.map((author, i) =>(
                                <tr key = {i}>
                                    <td>{author.Name}</td>
                                    {   
                                        author.Awesome === true ?
                                            <td>Yes</td>:
                                            <td>No</td>
                                    }
                                    
                                    <td >
                                        <Link className="mx-2" to ={ `/authors/${author._id}/edit` }><button>Edit</button></Link>
                                        <DeleteButton authorId={author._id} successCallback={()=>reload()}/>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Main