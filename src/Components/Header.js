import { useLocation } from 'react-router-dom'
import Button from "./Button"


const Header = ({ title, onAdd, showAdd }) => {
const location = useLocation()

  return (
    <header style={headingStyle} className="header">
      <h1>{title}</h1>
     {location.pathname === '/' && (
       <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "close" : "Add"}
          onClick={onAdd}
        />
        )}
     
    </header>
  );
};

Header.defaultProps = {
  title: "welcome",
};

// header.Prototypes = {
//     title : PropTypes.string.isRequired,
// }
const headingStyle = {
  color: "white",
  backgroundColor: "black",
};

export default Header;
