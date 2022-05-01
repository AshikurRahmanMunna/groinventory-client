import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const EmailVerify = () => {
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending, errorSending] = useSendEmailVerification(auth);
  if(loading || sending) {
    return <Loading></Loading>;
  }
    const handleSendVerification = () => {
        sendEmailVerification(user?.email);
        toast.success('Email Sent', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
          });
    }
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h2 className="text-danger">Your Email Is Not Verified</h2>
        <p className="text-success">You Can Also Verify Your Email Now</p>
        <button onClick={handleSendVerification} className="btn btn-success">Send Verification</button>
      </div>
    </div>
  );
};

export default EmailVerify;
