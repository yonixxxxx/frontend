import styles from './authorization.module.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import { useAuth } from "../../context/AuthProvider";
import logo from '../../assets/logo1.png';
import logo1 from '../../assets/img1.png';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
      alert('Вход выполнен успешно!');
      navigate('/home'); 
    } catch (err) {
      const errorMessage = err.response?.data?.detail || 'Ошибка входа. Проверьте почту и пароль.';
      setError(errorMessage);
      alert( errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

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
               <Link to="/register" className={styles.a_regestration}>Зарегистрироваться</Link>
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

              <form className={styles.right_div_inputs} onSubmit={handleSubmit}>
                
                <div className={styles.right_div_inputs1}>
                  <label className={styles.right_inputs1_text_email}>Email</label>
                  <input 
                    className={styles.right_inputs1_input} 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className={styles.right_div_inputs1}>
                  <label className={styles.right_inputs1_text_email}>Пароль</label>
                  <input 
                    className={styles.right_inputs1_input} 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className={styles.button_div}>
                  <button className={styles.button} type="submit" disabled={isLoading}>
                    {isLoading ? 'Вход...' : 'Войти'}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;