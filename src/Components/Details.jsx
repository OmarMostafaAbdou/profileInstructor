import './Details.css'
import img from '../assets/imgs/js icon.png'
function Details() {
  return (
    <div className="main">
        <h2>IDENTITY</h2>
        <div className="card">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td> Abdelrahman Abubakr
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>

                            <td>abdelrahmanabubakr@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td>Aswan, Egypt</td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>:</td>
                            <td>Trainee</td>
                        </tr>
                        <tr>
                            <td className="dropdown  ">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Courses
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Html</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Css</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">JavaScript</a></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h2>COURSE</h2>
        <div className="course-card ">
            <div className="img">
                <img src={img}/>
            </div>
            <div className="content">
                <h2>The Complete JavaScript Course 2024: From Zero to Expert!</h2>
                <p>The modern JavaScript course for everyone! Master JavaScript with projects, challenges and
                    theory. Many courses in one!</p>
                
                <progress id="file" value="32" max="100"></progress>


                <a href="#" className="btn btn-primary">Start now <i className="fa-solid fa-chevron-right"></i></a>

            </div>
        </div>

    </div>
  )
}

export default Details