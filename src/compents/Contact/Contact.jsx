

import StarDividerdark from "../StarDividerdark/StarDividerdark";

export default function Contact() {
  return (
    <section className="contact-section text-center">
      <div className="container">
        <h2 className="fw-bold mb-3 text-uppercase">conatct section</h2>
        <StarDividerdark/>  

        <form className="contact-form mx-auto mt-5">
          <div className="form-group">
            <input type="text" required />
            <label>Full Name</label>
          </div>

          <div className="form-group">
            <input type="email" required />
            <label>Email Address</label>
          </div>

          <div className="form-group">
            <input type="text" required />
            <label>Phone Number</label>
          </div>

          <div className="form-group">
            <textarea rows="4" required></textarea>
            <label>Message</label>
          </div>

          <button className=" send-btn mt-3">Send Message</button>
        </form>
      </div>
    </section>
  );
}
