import styles from "./Info.module.css";
// import img from '../assets/imgs/js icon.png'
function Info() {
  return (
    <div className={styles.main}>
      <h2>IDENTITY</h2>
      <div className={styles.card}>
        <div className={styles["card-body"]}>
          <i className={(styles["fa fa-pen fa-xs"], ["edit"])}></i>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td> Abdelrahman Abubakr</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>

                <td>abdelrahmanabubakr@gmail.com</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>:</td>
                <td>Aswan, Egypt</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>Trainee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Info;
