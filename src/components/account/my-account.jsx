import styles from './my-account.module.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import api from '../../api/axiosConfig';

function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

 
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    fetchMyProducts();
  }, []);

  const fetchMyProducts = async () => {
    try {
      const response = await api.get('/products/user/me');
      setMyProducts(response.data);
    } catch (error) {
      console.error('Ошибка загрузки товаров:', error);
    }
  };

  
  const handleLogout = async () => {
    if (window.confirm('Вы уверены, что хотите выйти из аккаунта?')) {
      try {
        await logout();
        navigate('/login');
      } catch (error) {
        alert('Ошибка при выходе из аккаунта');
      }
    }
  };


  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Вы уверены, что хотите удалить это объявление?')) {
      setIsDeleting(true);
      try {
        await api.delete(`/products/${productId}`);
        
        setMyProducts((prev) => prev.filter((p) => p.id !== productId));
        alert(' Объявление успешно удалено!');
      } catch (error) {
        alert('Ошибка при удалении объявления.');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.container}>
        
       
        <h1 className={styles.title}>Мой аккаунт</h1>
        <p className={styles.subtitle}>Управление вашим профилем и объявлениями</p>

        <form className={styles.form}>
          <div className={styles.form_group}>
            <label className={styles.label}>Email</label>
            <input type="email" className={styles.input} defaultValue={user?.email || 'user@example.com'} />
          </div>
          <div className={styles.form_group}>
            <label className={styles.label}>Полное имя</label>
            <input type="text" className={styles.input} defaultValue={user?.full_name || 'Иван Иванов'} />
          </div>

      
          <div className={styles.actions}>
          
            
            <button type="button" className={styles.btn_delete} onClick={() => {
              if(window.confirm('Вы уверены, что хотите удалить свой аккаунт? Это действие необратимо!')) {
                alert('Аккаунт удален (демонстрация)');
              }
            }}>
              Удалить аккаунт
            </button>
            
            <button type="button" className={styles.btn_logout} onClick={handleLogout}>
              Выйти из аккаунта
            </button>
          </div>
        </form>

    
        <div className={styles.my_products_section}>
          <h3 className={styles.section_title}>Мои объявления</h3>
          
          {myProducts.length === 0 ? (
            <p className={styles.empty_text}>У вас пока нет активных объявлений.</p>
          ) : (
            <div className={styles.products_list}>
              {myProducts.map((product) => (
                <div key={product.id} className={styles.product_item}>
                  <div className={styles.product_info}>
                    <img src={product.image_url || 'https://via.placeholder.com/60'} alt={product.name} className={styles.product_thumb} />
                    <div>
                      <div className={styles.product_name}>{product.name}</div>
                      <div className={styles.product_price}>{product.price} ₽</div>
                    </div>
                  </div>
                  <button 
                    className={styles.btn_remove_product} 
                    onClick={() => handleDeleteProduct(product.id)}
                    disabled={isDeleting}
                  >
                    Удалить
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        
        <div className={styles.back_link}>
          <Link to="/home" className={styles.back_home}>← Вернуться на главную</Link>
        </div>

      </div>
    </div>
  );
}

export default Account;