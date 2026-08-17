import styles from './authorization.module.css';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/logo1.png';
import logo1 from '../../assets/img1.png';

function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
        <div className={styles.content_headar}>
          <div className={styles.content_logo}>
            <img src={logo} className={styles.logo} alt="Logo" />
          </div>

          <div className={styles.div_now_acc_reg}>
            <div className={styles.text_div}>
              <p className={styles.text}>Нет аккаунта</p>
            </div>
            <div className={styles.a_regestration_div}>
               <Link to="/" className={styles.a_regestration}>Зарегистрироваться</Link>
            </div>
          </div>
        </div>

        <div className={styles.content_body}>
          <div className={styles.left}>
            <div className={styles.left_text}>
              <span className={styles.text1}>Покупай и продавай легко</span>
              <p className={styles.text2}>
                Онлайн площадка для покупки <br />
                и продажи товаров в Абхазии
              </p>
            </div>

            <div className={styles.div_img_left}>
              <img src={logo1} className={styles.img_left} alt="Illustration" />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.right_contant}>
              
              <div className={styles.right_div_text}>
                <h2 className={styles.right_text}>Вход в аккаунт</h2>
                <p className={styles.right_text_p}>Добро пожаловать! Пожалуйста, войдите в свой аккаунт</p>
              </div>

              <div className={styles.right_div_inputs}>
                
                <div className={styles.right_div_inputs1}>
                  <p className={styles.right_inputs1_text_email}>Email</p>
                  <input className={styles.right_inputs1_input} type="text" />
                </div>

                <div className={styles.right_div_inputs1}>
                  <p className={styles.right_inputs1_text_email}>Password</p>
                  <input className={styles.right_inputs1_input} type="text" />
                </div>

              </div>

              <div className={styles.button_div}>
                <button className={styles.button}>Войти</button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;