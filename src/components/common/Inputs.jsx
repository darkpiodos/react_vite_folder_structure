import React from "react";
import "./Inputs.scss";
const Inputs = () => {
  return (
    <div className="inputs-container">
      <div className="group name-input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <input className="input" type="name" placeholder="name" />
      </div>
      <div className="group email-input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
          />
        </svg>

        <input className="input" type="email" placeholder="email" />
      </div>
      <div className="group name-input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>

        <input className="input" type="phone" placeholder="phone" />
      </div>

      <div className="group password-input">
        <svg
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
        <input className="input" type="password" placeholder="password" />
      </div>
      <div className="group confirm-password-input">
        <svg
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
        <input
          className="input"
          type="password"
          placeholder="confirm password"
        />
      </div>
      <div className="feedback-input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>

        <textarea
          cols="5"
          rows="10"
          wrap="hard"
          maxlength="100"
          placeholder="Send me a message"
          className="text-area-message"
        ></textarea>
      </div>
      <div className="checkbox-container">
        <label className="custom-checkbox">
          <input name="checkbox" type="checkbox" />
          <span className="checkmark" />
        </label>
        <div className="checkbox-description-and-link">
          <span>Remember Me</span>
          <a href="#">Forgot Password</a>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
