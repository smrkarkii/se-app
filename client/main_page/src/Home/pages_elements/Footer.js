import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
          	<div className="row">
      	<div className="col-md-2 mt-3"> 
      			<center><img src="call.png" alt="call" style={{height: "80px", width: "80px"}} className="img-fluid"/></center>
      			<br/>
      			<p className="text-center mt-3">9813977980</p>

     	</div>
	      		<div className="col-md-2 mt-3"> 
      			<center><img src="email.png" alt="call" style={{height: "80px", width: "80px"}} className="img-fluid"/></center>
      			<br/>
      			<p className="text-center mt-3">SyntaxERROR!@hacker.com</p>


      	</div>
      	
      		<div className="col-md-2 mt-3"> 
      			<center><img src="location.png" alt="call" style={{height: "80px", width: "80px"}} className="img-fluid"/></center>
      			<br/>
      			<p className="text-center mt-3">Dharan</p>

     		</div>
     	</div>
    </>
  );
};

export default Footer;
