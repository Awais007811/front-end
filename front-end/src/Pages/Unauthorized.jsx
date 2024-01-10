import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function UnAuthorized() {

  const navigate= useNavigate();
  useEffect(() => {
    navigate('/login')
  }, [])
  
}
