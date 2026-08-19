import stylesHome from './Home.module.css';
import { Link } from 'react-router-dom';
import LogoNavigation from '../../assets/navigation.png';
import logo from '../../assets/logo1.png';
import bannerImg from '../../assets/baner.png';

function Home() {
    return (
        <div className={stylesHome.page_wrapper}>
            <header className={stylesHome.header}>
             
                <div className={stylesHome.header_first_floor}>
                    <div className={stylesHome.header_left}>
                        <img src={LogoNavigation} alt="" className={stylesHome.navigation_logo} />
                        <span className={stylesHome.navigation_text}>Абхазия</span>
                    </div>
                    <div className={stylesHome.header_right}>
                        <button className={stylesHome.button_create_product}> 
                            <span className={stylesHome.button_plus}>+</span> 
                            Разместить объявление
                        </button>
                    </div>
                </div>

               
                <div className={stylesHome.header_second_floor}>
                    <div className={stylesHome.header_logo_block}>
                        <img src={logo} alt="ORA Logo" className={stylesHome.logo_img} />
                    </div>
                    <div className={stylesHome.search_container}>
                        <select className={stylesHome.search_select}>
                            <option>Все категории</option>
                            <option>Транспорт</option>
                            <option>Недвижимость</option>
                            <option>Электроника</option>
                            <option>Одежда</option>
                        </select>
                        <input type="text" className={stylesHome.search_input} placeholder="Поиск товаров и объявлений" />
                        <button className={stylesHome.search_button}>Найти</button>
                    </div>
                    <div className={stylesHome.header_auth_block}>
                        <div className={stylesHome.auth_text_block}>
                            <span className={stylesHome.auth_login}>Войти</span>
                            <span className={stylesHome.auth_register}>или зарегистрироваться</span>
                        </div>
                    </div>
                </div>
            </header>

           
            <section className={stylesHome.main_section}>
                
              
                <aside className={stylesHome.sidebar}>
                    <ul className={stylesHome.sidebar_list}>
                        
                        <Link to="/" className={stylesHome.sidebar_link}>
                            <li className={`${stylesHome.sidebar_item} ${stylesHome.sidebar_item_active}`}>
                                <span className={stylesHome.icon}>▦</span> Все категории
                            </li>
                        </Link>

                        <Link to="/transport" className={stylesHome.sidebar_link}>
                            <li className={stylesHome.sidebar_item}>
                                <span className={stylesHome.icon}>🚗</span> Транспорт
                            </li>
                        </Link>

                        <Link to="/real-estate" className={stylesHome.sidebar_link}>
                            <li className={stylesHome.sidebar_item}>
                                <span className={stylesHome.icon}>🏠</span> Недвижимость
                            </li>
                        </Link>

                        <Link to="/electronics" className={stylesHome.sidebar_link}>
                            <li className={stylesHome.sidebar_item}>
                                <span className={stylesHome.icon}>📱</span> Электроника
                            </li>
                        </Link>

                        <Link to="/appliances" className={stylesHome.sidebar_link}>
                            <li className={stylesHome.sidebar_item}>
                                <span className={stylesHome.icon}>📺</span> Бытовая техника
                            </li>
                        </Link>

                        <Link to="/clothing" className={stylesHome.sidebar_link}>
                            <li className={stylesHome.sidebar_item}>
                                <span className={stylesHome.icon}>👕</span> Одежда и обувь
                            </li>
                        </Link>

                        <Link to="/home-garden" className={stylesHome.sidebar_link}>
                            <li className={stylesHome.sidebar_item}>
                                <span className={stylesHome.icon}>🛋️</span> Дом и сад
                            </li>
                        </Link>

                        <Link to="/kids" className={stylesHome.sidebar_link}>
                            <li className={stylesHome.sidebar_item}>
                                <span className={stylesHome.icon}>👶</span> Детские товары
                            </li>
                        </Link>

                        <Link to="/sport" className={stylesHome.sidebar_link}>
                            <li className={stylesHome.sidebar_item}>
                                <span className={stylesHome.icon}>⚽</span> Спорт и отдых
                            </li>
                        </Link>

                        <Link to="/construction" className={stylesHome.sidebar_link}>
                            <li className={stylesHome.sidebar_item}>
                                <span className={stylesHome.icon}>🔧</span> Стройка и ремонт
                            </li>
                        </Link>
                    </ul>

                   
                    <div className={stylesHome.sidebar_footer}>
                        <div className={stylesHome.footer_card}>
                            <div className={stylesHome.footer_icon_block}></div>
                            <div className={stylesHome.footer_text_block}>
                                <span className={stylesHome.footer_title}>Безопасные сделки</span>
                                <span className={stylesHome.footer_desc}>Проверенные продавцы и безопасная оплата</span>
                            </div>
                        </div>
                    </div>
                </aside>

             
                <main className={stylesHome.main_content}>
                    <div className={stylesHome.banner_wrapper}>
                        <img src={bannerImg} className={stylesHome.banner_image} alt="Главный баннер" />
                    </div>

                   
                    <div className={stylesHome.categories_section}>
                        
                        <div className={stylesHome.category_card}>
                            <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_red}`}>🚗</div>
                            <div className={stylesHome.cat_title}>Транспорт</div>
                            <div className={stylesHome.cat_count}>1 245 объявлений</div>
                        </div>

                        <div className={stylesHome.category_card}>
                            <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_green}`}>🏠</div>
                            <div className={stylesHome.cat_title}>Недвижимость</div>
                            <div className={stylesHome.cat_count}>2 358 объявлений</div>
                        </div>

                        <div className={stylesHome.category_card}>
                            <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_red}`}>📱</div>
                            <div className={stylesHome.cat_title}>Электроника</div>
                            <div className={stylesHome.cat_count}>3 112 объявлений</div>
                        </div>

                        <div className={stylesHome.category_card}>
                            <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_green}`}>👕</div>
                            <div className={stylesHome.cat_title}>Одежда и обувь</div>
                            <div className={stylesHome.cat_count}>4 257 объявлений</div>
                        </div>

                        <div className={stylesHome.category_card}>
                            <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_red}`}>🛋️</div>
                            <div className={stylesHome.cat_title}>Дом и сад</div>
                            <div className={stylesHome.cat_count}>2 719 объявлений</div>
                        </div>

                        <div className={stylesHome.category_card}>
                            <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_green}`}>🔧</div>
                            <div className={stylesHome.cat_title}>Стройка и ремонт</div>
                            <div className={stylesHome.cat_count}>1 343 объявлений</div>
                        </div>

                        <div className={`${stylesHome.category_card} ${stylesHome.category_card_all}`}>
                            <div className={stylesHome.cat_icon_all}>▦</div>
                            <div className={stylesHome.cat_title}>Все категории</div>
                            <div className={stylesHome.cat_count}>Смотреть все</div>
                        </div>

                    </div>
                </main>

            </section>
        </div>
    );
}

export default Home;