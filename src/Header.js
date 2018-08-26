import React from "react";
 
import { Link } from "react-router-dom";
 
const Header = (props) => {
  return (
    
 <div>
 <Link to='/records'><span>View Records</span></Link>&nbsp;&nbsp; &nbsp;&nbsp; 
 <Link to='/addrecord'><span>Add Record</span></Link>&nbsp;&nbsp; &nbsp;&nbsp;  
 <Link to='/permissions'><span>View Permissions</span></Link>&nbsp;&nbsp; &nbsp;&nbsp; 
 <Link to='/addpermission'><span>Add Permission</span></Link>       
</div>
 
  );
};

export default Header;
