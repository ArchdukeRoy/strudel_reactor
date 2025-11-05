const SettingsButton = ({ }) => {
    return (
    <div>
        <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
            <img src="/iconImages/settings.png" alt="Settings" style={{ height: "40px", width: "40px" }}/>
        </button>
                    {/* <!-- Modal -->*/ }
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Settings</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row text-center justify-content-center">
                                <div className="col-6 d-flex justify-content-center align-items-center mb-3">
                                    <span className="me-2">Save: </span>
                                    <button type="button" className="btn btn-outline-dark me-2">Button 1</button>
                                </div>
                                <div className="col-6 d-flex justify-content-center align-items-center mb-3">
                                    <span className="me-2">Upload: </span>
                                    <button type="button" className="btn btn-outline-dark me-2">Button 2</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default SettingsButton