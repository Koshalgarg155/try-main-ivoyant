export default function Banner() {
  return (
    <div
      className="container-fluid p-0 overflow-hidden"
      style={{ backgroundColor: '#090011' }}
    >
      <div className="row ">
        <div className="col-5 d-flex justify-content-center align-items-center ">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="row position-absolute  ps-5 col-md-7"
                style={{ marginLeft: '1rem' }}
              >
                <h3 className="white-text">
                  Scalable Technology Solutions for your Enterprise needs.
                </h3>
                <h5> Creating Digital Business from Strategy to Execution</h5>
              </div>
            </div>
          </div>
        </div>
        <img
          className="col-7"
          alt="Banner-home"
          src="./images/Home/rectangle-676@2x.png"
        />
      </div>
    </div>
  )
}
