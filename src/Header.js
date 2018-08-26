import React from "react";
 
import { Link } from "react-router-dom";
 
const Header = (props) => {
  return (
   
// combined View & Add Recrods and View & Add Permissions 
 <div>
 <Link to='/record'><span>View/Add Records</span></Link>&nbsp;&nbsp; &nbsp;&nbsp; 
 <Link to='/permission'><span>View/Add Permissions</span></Link>&nbsp;&nbsp; &nbsp;&nbsp; 
 <Link to='/thirdparty'><span>Third Party</span></Link>&nbsp;&nbsp; &nbsp;&nbsp;    
</div>
 
  );
};

export default Header;
