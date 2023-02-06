import styles from "./Email.module.css";

function MyEmail() {
  return (
    <div className={styles.inputContainer}>

    <form action="https://formsubmit.co/arielalegre98@gmail.com" method="POST">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="email"
          />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Comment
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="Comment"
          ></textarea>
        <input type="hidden" name="_next" value="http://localhost:3000/home" />
        <input type="hidden" name="_captcha" value="false" />
      </div>
      <button type="submit">Send</button>
    </form>
          </div>
  );
}



export default MyEmail;
