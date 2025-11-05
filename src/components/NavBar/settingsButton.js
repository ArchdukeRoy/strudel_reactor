const SettingsButton = ({ }) => {
    return (
    <div>
        <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Settings</button>
                    {/* <!-- Modal -->*/ }
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Settings</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row text-center justify-content-center">
                                <div class="col-6 d-flex justify-content-center align-items-center mb-3">
                                    <span className="me-2">Save: </span>
                                    <button type="button" class="btn btn-outline-dark me-2">Button 1</button>
                                </div>
                                <div class="col-6 d-flex justify-content-center align-items-center mb-3">
                                    <span className="me-2">Upload: </span>
                                    <button type="button" class="btn btn-outline-dark me-2">Button 2</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default SettingsButton