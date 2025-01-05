import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container" id="contact">
          <h1 className="text-center">CONTACT SECTION</h1>
          <div
            id="title"
            className="d-flex align-items-center justify-content-center gap-3"
          >
            <p className="bg-black"></p>
            <i class="bi bi-star-fill text-black"></i>
            <p className="bg-black"></p>
          </div>
          <form className="my-4">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="userName"
              />
              <label for="floatingInput">userName</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="userAge"
              />
              <label for="floatingInput">userAge</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">userEmail </label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">userPassword</label>
            </div>
            <button onclick="#" className="btn btn-success mt-4">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
