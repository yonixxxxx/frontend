import styles from './CreateProduct.module.css';

function CreateProduct() {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Разместить объявление</h1>
        <p className={styles.subtitle}>Заполните информацию о товаре</p>

        <form className={styles.form}>
        
          <div className={styles.form_group}>
            <label className={styles.label}>Категория</label>
            <select className={styles.input}>
              <option>Выберите категорию</option>
              <option>Транспорт</option>
              <option>Недвижимость</option>
              <option>Электроника</option>
              <option>Одежда и обувь</option>
            </select>
          </div>

          <div className={styles.form_group}>
            <label className={styles.label}>Название товара</label>
            <input type="text" className={styles.input} placeholder="Введите название" />
          </div>

        
          <div className={styles.form_group}>
            <label className={styles.label}>Цена (₽)</label>
            <input type="number" className={styles.input} placeholder="0" />
          </div>

       
          <div className={styles.form_group}>
            <label className={styles.label}>Описание</label>
            <textarea className={styles.textarea} placeholder="Опишите ваш товар..." rows="5"></textarea>
          </div>

        
          <div className={styles.form_group}>
            <label className={styles.label}>Фотографии</label>
            <div className={styles.file_upload}>
              <span className={styles.file_upload_text}>📷 Нажмите или перетащите фото</span>
              <input type="file" className={styles.file_input} multiple />
            </div>
          </div>

        
          <button type="submit" className={styles.submit_btn}>Опубликовать объявление</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;