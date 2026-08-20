import styles from './CreateProduct.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axiosConfig';

function CreateProduct() {
 
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    price: '',
    description: '',
    image_url: '',
    location: '' 
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      
      await api.post('/products/', {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        image_url: formData.image_url,
        location: formData.location 
      });
      
      alert(' Товар успешно создан!');
      navigate('/home'); 
    } catch (err) {
      const errorMessage = err.response?.data?.detail || 'Ошибка при создании товара.';
      alert( + errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Разместить объявление</h1>
        <p className={styles.subtitle}>Заполните информацию о товаре</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          
          <div className={styles.form_group}>
            <label className={styles.label}>Категория</label>
            <select 
              className={styles.input} 
              name="category" 
              value={formData.category} 
              onChange={handleChange}
              required
            >
              <option value="">Выберите категорию</option>
              <option value="Транспорт">Транспорт</option>
              <option value="Недвижимость">Недвижимость</option>
              <option value="Электроника">Электроника</option>
              <option value="Одежда и обувь">Одежда и обувь</option>
            </select>
          </div>

          <div className={styles.form_group}>
            <label className={styles.label}>Название товара</label>
            <input 
              type="text" 
              className={styles.input} 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введите название" 
              required 
            />
          </div>

          <div className={styles.form_group}>
            <label className={styles.label}>Цена (₽)</label>
            <input 
              type="number" 
              className={styles.input} 
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="0" 
              required 
            />
          </div>

          <div className={styles.form_group}>
            <label className={styles.label}>Описание</label>
            <textarea 
              className={styles.textarea} 
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Опишите ваш товар..." 
              rows="5"
            ></textarea>
          </div>

          <div className={styles.form_group}>
            <label className={styles.label}>Ссылка на фото</label>
            <input 
              type="text" 
              className={styles.input} 
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg" 
            />
          </div>

         
          <div className={styles.form_group}>
            <label className={styles.label}>Город</label>
            <select 
              className={styles.input} 
              name="location" 
              value={formData.location} 
              onChange={handleChange}
              required
            >
              <option value="">Выберите город</option>
              <option value="Сухум">Сухум</option>
              <option value="Гудаута">Гудаута</option>
              <option value="Гагра">Гагра</option>
              <option value="Пицунда">Пицунда</option>
              <option value="Новый Афон">Новый Афон</option>
              <option value="Очамчира">Очамчира</option>
              <option value="Ткуарчал">Ткуарчал</option>
              <option value="Гал">Гал</option>
            </select>
          </div>

          <button type="submit" className={styles.submit_btn} disabled={isLoading}>
            {isLoading ? 'Отправка...' : 'Опубликовать объявление'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;