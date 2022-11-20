
const Signup =() =>{
    return(
        <div>
            <div className="container text-center signup">
            
            <div className="card ">
                <div className="card-body cards">
                <div className="row p-2 m-2">
                <input type="text" className="form-control" placeholder="Enter your Full Name"/>
                </div>
                <div className="row p-2 m-2">
                <input type="text" className="form-control" placeholder="Enter your Email"/>
                </div>
                <div className="row p-2 m-2">
                <input type="text" className="form-control" placeholder="Password"/>
                </div>
                <div className="row p-2 m-2">
                <input type="text" className="form-control" placeholder="Confirm Password"/>
                </div>
                <div className="row p-2 m-2">
                <button className="btn btn-success">Register</button>
                </div>
            </div>
            </div>
            </div>
            
         </div>
        );
}
export default Signup