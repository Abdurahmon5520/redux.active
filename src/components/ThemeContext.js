import React from 'react';



const ThemeContext = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <div className="card-header">
                        <div className="d-flex  justify-content-center  align-items-center" >
                            <button className="btn btn-primary w-25">-</button>
                            <button className="btn btn-success w-25">+</button>
                        </div>
                    </div>
                    </div>

                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                            <h1>1-component</h1>
                            <div className="card">
                            <div className="card-header">
                <h3>A component</h3>
                </div>
                            <div className="card-body">
                            <h5>count: 0</h5>
                        </div>
                            <div className="card-footer">
                            <div className="d-flex  justify-content-center  align-items-center" >
                            <button className="btn btn-primary ">-</button>
                            <button className="btn btn-success ">+</button>
                        </div>
                            </div>
                        
                            </div>
                            <div className="card mt-5">
                            <div className="card-header">
                <h3>C component</h3>
                </div>
                            <div className="card-body">
                            <h5>count: 0</h5>
                        </div>
                            <div className="card-footer">
                            <div className="d-flex  justify-content-center  align-items-center" >
                            <button className="btn btn-primary ">-</button>
                            <button className="btn btn-success ">+</button>
                        </div>
                            </div>
                        
                            </div>
                        .   
                        </div>

                            <div className="col-6">
                            <h1>2-component</h1>
                            <div className="card">
                            <div className="card-header">
                <h3>B component</h3>
                </div>
                            <div className="card-body">
                            <h5>count: 0</h5>
                        </div>
                            <div className="card-footer">
                            <div className="d-flex  justify-content-center  align-items-center" >
                            <button className="btn btn-primary ">-</button>
                            <button className="btn btn-success ">+</button>
                        </div>
                            </div>
                        
                            </div>
                            <div className="card mt-5">
                            <div className="card-header">
                <h3>D component</h3>
                </div>
                            <div className="card-body">
                            <h5>count: 0</h5>
                        </div>
                            <div className="card-footer">
                            <div className="d-flex  justify-content-center  align-items-center" >
                            <button className="btn btn-primary ">-</button>
                            <button className="btn btn-success ">+</button>
                        </div>
                            </div>
                        
                            </div>
                            </div>
                        </div>
                    </div>

            </div>

        </div>
    );
};

export default ThemeContext;