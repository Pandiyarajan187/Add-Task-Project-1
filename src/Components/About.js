import { Link } from "react-router-dom";


const About = () => {
  return (
    <div >
      <h4>Version 8.0.0</h4>
      <button className="btn" >
      <Link to="/"style={{ textDecoration: 'none', color: 'white'  }} >Go Back</Link>
      </button>
    </div>
  );
};

export default About;
