import styles from './registration.module.css';
import logo from '../../assets/logo1.png';
import logo1 from '../../assets/img1.png';
import { Link } from 'react-router-dom'; 

function Registration() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
      
        <div className={styles.content_headar}>
          <div className={styles.content_logo}>
            <img src={logo} className={styles.logo} alt="Logo" />
          </div>

          <div className={styles.div_now_acc_reg}>
            <div className={styles.text_div}>
              <p className={styles.text}>Уже есть аккаунт?</p>
            </div>
            <div className={styles.a_regestration_div}>
       
              <Link to="/login" className={styles.a_regestration}>Войти</Link>
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
                <h2 className={styles.right_text}>Регистрация</h2>
                <p className={styles.right_text_p}>Создайте новый аккаунт для покупок и продаж</p>
              </div>

              <form className={styles.right_div_inputs} action="/api/register" method="POST">
                
                <div className={styles.right_div_inputs1}>
                  <label className={styles.right_inputs1_text_email}>Email</label>
                  <input className={styles.right_inputs1_input} type="email" name="email" required />
                </div>

                <div className={styles.right_div_inputs1}>
                  <label className={styles.right_inputs1_text_email}>Username (Логин)</label>
                  <input className={styles.right_inputs1_input} type="text" name="username" required />
                </div>

                <div className={styles.right_div_inputs1}>
                  <label className={styles.right_inputs1_text_email}>Полное имя</label>
                  <input className={styles.right_inputs1_input} type="text" name="full_name" required />
                </div>

                <div className={styles.right_div_inputs1}>
                  <label className={styles.right_inputs1_text_email}>Пароль</label>
                  <input className={styles.right_inputs1_input} type="password" name="password" required />
                </div>

                <div className={styles.button_div}>
                  <button className={styles.button} type="submit">Зарегистрироваться</button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Registration;