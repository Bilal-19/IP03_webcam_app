import '../App.css'
import { Link, Outlet } from 'react-router-dom'

export default function Mainpage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <p className='h4 mt-5'>Webcam App</p>
                    </div>
                </div>

                <div className="row">
                    <div className="d-flex justify-content-center align-items-center">
                        <Link className='btn btn-primary' to='/camera'>Open Camera</Link>
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}