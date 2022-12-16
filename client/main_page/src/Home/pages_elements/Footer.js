import logo from "../images/logo.png";

const Footer = () => {
  return (
    <>

<footer style={{backgroundColor: "rgb(0, 2, 141)"}} className="text-center text-lg-start text-muted">
  {/* <!-- Section: Social media --> */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* <!-- Left --> */}
    <div className="me-5 d-none d-lg-block text-white">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* <!-- Left -->

    <!-- Right --> */}
    <div>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-google"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="text-white">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          
		 <center> <img src={logo} className="logo" alt="logo" />
		 <hr></hr>
         
          <h6 className="no css">
            Here You can get info about every events & services provided by ICTC and can also reserve and contact us. Thank You!
          </h6></center>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          {/* <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p className="no css">
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p className="no css">
            <a href="#!" className="text-reset">React</a>
          </p>
          <p className="no css">
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p className="no css">
            <a href="#!" className="text-reset">Laravel</a>
          </p> */}
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          {/* <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p className="no css">
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p className="no css">
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p className="no css">
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p className="no css">
            <a href="#!" className="text-reset">Help</a>
          </p>*/}
        </div> 
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <center><h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <h6 className="no css"><i className="fas fa-home me-3 text-secondary"></i>Pulchowk, Lalitpur</h6>
          <h6 className="no css">
            <i className="fas fa-envelope me-3 text-secondary"></i>
            ictc@ictc.com
          </h6>
          <h6 className="no css"><i className="fas fa-phone me-3 text-secondary"></i> + 977 ..........</h6>
          <h6 className="no css"><i className="fas fa-print me-3 text-secondary"></i> + 977 ..........</h6>
		  </center>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  -->

  <!-- Copyright --> */}
  <div className="text-center p-4 text-white" >
    © 2022 Copyright: ICTC
   
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}

    </>
  );
};

export default Footer;
