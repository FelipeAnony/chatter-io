import { Navigate } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext";
import { ChildrenProp } from "../../types/mainTypes";

function PrivateRoute({ children }: ChildrenProp) {
  const { userAuth } = useMainContext();

  if(!userAuth) {
    return(
      <Navigate to='/login' />
    )
  } else {
    return (
      <>
        { children }
      </>
    )
  }
}

export default PrivateRoute;