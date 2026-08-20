import stylesHome from './Home.module.css';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../api/axiosConfig';
import LogoNavigation from '../../assets/navigation.png';
import logo from '../../assets/logo1.png';
import bannerImg from '../../assets/baner.png';
import Chel_my_acc from '../../assets/Chel_my_acc.png';

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

   
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get('category') || '';
    const searchFromUrl = searchParams.get('search') || '';
    

    const [inputCategory, setInputCategory] = useState(categoryFromUrl);
    const [inputSearch, setInputSearch] = useState(searchFromUrl);
    
    const navigate = useNavigate();

    
    useEffect(() => {
        setInputCategory(categoryFromUrl);
        setInputSearch(searchFromUrl);
    }, [categoryFromUrl, searchFromUrl]);

 
    const handleSearch = () => {
        const params = new URLSearchParams();
        if (inputCategory) params.set('category', inputCategory);
        if (inputSearch) params.set('search', inputSearch);
        
        
        const queryString = params.toString();
        navigate(queryString ? `/home?${queryString}` : '/home');
    };

 
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
               
                let url = '/products/?limit=6';
                if (categoryFromUrl) {
                    url += `&category=${encodeURIComponent(categoryFromUrl)}`;
                }
                if (searchFromUrl) {
                    url += `&search=${encodeURIComponent(searchFromUrl)}`;
                }

                const response = await api.get(url);
                const data = response.data;

               
                const productsWithMeta = data.map((p) => ({
                    ...p,
                    location: ['Сухум', 'Гудаута', 'Гагрa', 'Пицунда', 'Новый Афон'][Math.floor(Math.random() * 5)],
                    timeAgo: ['Сегодня', 'Вчера', '2 дня назад', '3 дня назад'][Math.floor(Math.random() * 4)],
                }));

                setProducts(productsWithMeta);
            } catch (error) {
                console.error('Ошибка загрузки товаров:', error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [categoryFromUrl, searchFromUrl]); 

    return (
        <div className={stylesHome.page_wrapper}>
            <header className={stylesHome.header}>
               
                <div className={stylesHome.header_first_floor}>
                    <div className={stylesHome.header_left}>
                        <img src={LogoNavigation} alt="" className={stylesHome.navigation_logo} />
                        <span className={stylesHome.navigation_text}>Абхазия</span>
                    </div>
                    <div className={stylesHome.header_right}>
                        <Link to="/create-product" className={stylesHome.sidebar_link}>
                            <button className={stylesHome.button_create_product}> 
                                <span className={stylesHome.button_plus}>+</span> 
                                Разместить объявление
                            </button>
                        </Link>
                    </div>
                </div>

               
                <div className={stylesHome.header_second_floor}>
                    <div className={stylesHome.header_logo_block}>
                        <img src={logo} alt="ORA Logo" className={stylesHome.logo_img} />
                    </div>
                    <div className={stylesHome.search_container}>
                        <select 
                            className={stylesHome.search_select} 
                            value={inputCategory}
                            onChange={(e) => setInputCategory(e.target.value)}
                        >
                            <option value="">Все категории</option>
                            <option value="Транспорт">Транспорт</option>
                            <option value="Недвижимость">Недвижимость</option>
                            <option value="Электроника">Электроника</option>
                            <option value="Одежда">Одежда</option>
                        </select>
                        <input 
                            type="text" 
                            className={stylesHome.search_input} 
                            placeholder="Поиск товаров и объявлений"
                            value={inputSearch}
                            onChange={(e) => setInputSearch(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button className={stylesHome.search_button} onClick={handleSearch}>Найти</button>
                    </div>
                    <div className={stylesHome.header_auth_block}>
                        <Link to="/my-account" className={stylesHome.sidebar_link}>
                            <div className={stylesHome.auth_text_block}>
                                <img src={Chel_my_acc} alt="" className={stylesHome.Chel_my_acc} />
                                <span className={stylesHome.auth_login}>Мой аккаунт</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

           
            <section className={stylesHome.main_section}>
                {/* САЙДБАР */}
                <aside className={stylesHome.sidebar}>
                    <ul className={stylesHome.sidebar_list}>
                        <Link to="/home" className={stylesHome.sidebar_link}>
                            <li className={`${stylesHome.sidebar_item} ${!categoryFromUrl ? stylesHome.sidebar_item_active : ''}`}>
                                <span className={stylesHome.icon}>▦</span> Все категории
                            </li>
                        </Link>
                        <Link to="/home?category=Транспорт" className={stylesHome.sidebar_link}>
                            <li className={`${stylesHome.sidebar_item} ${categoryFromUrl === 'Транспорт' ? stylesHome.sidebar_item_active : ''}`}>
                                <span className={stylesHome.icon}>🚗</span> Транспорт
                            </li>
                        </Link>
                        <Link to="/home?category=Недвижимость" className={stylesHome.sidebar_link}>
                            <li className={`${stylesHome.sidebar_item} ${categoryFromUrl === 'Недвижимость' ? stylesHome.sidebar_item_active : ''}`}>
                                <span className={stylesHome.icon}>🏠</span> Недвижимость
                            </li>
                        </Link>
                        <Link to="/home?category=Электроника" className={stylesHome.sidebar_link}>
                            <li className={`${stylesHome.sidebar_item} ${categoryFromUrl === 'Электроника' ? stylesHome.sidebar_item_active : ''}`}>
                                <span className={stylesHome.icon}>📱</span> Электроника
                            </li>
                        </Link>
                        <Link to="/home?category=Бытовая техника" className={stylesHome.sidebar_link}>
                            <li className={`${stylesHome.sidebar_item} ${categoryFromUrl === 'Бытовая техника' ? stylesHome.sidebar_item_active : ''}`}>
                                <span className={stylesHome.icon}>📺</span> Бытовая техника
                            </li>
                        </Link>
                        <Link to="/home?category=Одежда и обувь" className={stylesHome.sidebar_link}>
                            <li className={`${stylesHome.sidebar_item} ${categoryFromUrl === 'Одежда и обувь' ? stylesHome.sidebar_item_active : ''}`}>
                                <span className={stylesHome.icon}>👕</span> Одежда и обувь
                            </li>
                        </Link>
                        <Link to="/home?category=Дом и сад" className={stylesHome.sidebar_link}>
                            <li className={`${stylesHome.sidebar_item} ${categoryFromUrl === 'Дом и сад' ? stylesHome.sidebar_item_active : ''}`}>
                                <span className={stylesHome.icon}>🛋️</span> Дом и сад
                            </li>
                        </Link>
                        <Link to="/home?category=Детские товары" className={stylesHome.sidebar_link}>
                            <li className={`${stylesHome.sidebar_item} ${categoryFromUrl === 'Детские товары' ? stylesHome.sidebar_item_active : ''}`}>
                                <span className={stylesHome.icon}>👶</span> Детские товары
                            </li>
                        </Link>
                        <Link to="/home?category=Спорт и отдых" className={stylesHome.sidebar_link}>
                            <li className={`${stylesHome.sidebar_item} ${categoryFromUrl === 'Спорт и отдых' ? stylesHome.sidebar_item_active : ''}`}>
                                <span className={stylesHome.icon}>⚽</span> Спорт и отдых
                            </li>
                        </Link>
                        <Link to="/home?category=Стройка и ремонт" className={stylesHome.sidebar_link}>
                            <li className={`${stylesHome.sidebar_item} ${categoryFromUrl === 'Стройка и ремонт' ? stylesHome.sidebar_item_active : ''}`}>
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
                        <Link to="/home?category=Транспорт" className={stylesHome.sidebar_link}>
                            <div className={`${stylesHome.category_card} ${categoryFromUrl === 'Транспорт' ? stylesHome.category_card_active : ''}`}>
                                <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_red}`}>🚗</div>
                                <div className={stylesHome.cat_title}>Транспорт</div>
                                <div className={stylesHome.cat_count}>1 245 объявлений</div>
                            </div>
                        </Link>

                        <Link to="/home?category=Недвижимость" className={stylesHome.sidebar_link}>
                            <div className={`${stylesHome.category_card} ${categoryFromUrl === 'Недвижимость' ? stylesHome.category_card_active : ''}`}>
                                <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_green}`}>🏠</div>
                                <div className={stylesHome.cat_title}>Недвижимость</div>
                                <div className={stylesHome.cat_count}>2 358 объявлений</div>
                            </div>
                        </Link>

                        <Link to="/home?category=Электроника" className={stylesHome.sidebar_link}>
                            <div className={`${stylesHome.category_card} ${categoryFromUrl === 'Электроника' ? stylesHome.category_card_active : ''}`}>
                                <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_red}`}>📱</div>
                                <div className={stylesHome.cat_title}>Электроника</div>
                                <div className={stylesHome.cat_count}>3 112 объявлений</div>
                            </div>
                        </Link>

                        <Link to="/home?category=Одежда и обувь" className={stylesHome.sidebar_link}>
                            <div className={`${stylesHome.category_card} ${categoryFromUrl === 'Одежда и обувь' ? stylesHome.category_card_active : ''}`}>
                                <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_green}`}>👕</div>
                                <div className={stylesHome.cat_title}>Одежда и обувь</div>
                                <div className={stylesHome.cat_count}>4 257 объявлений</div>
                            </div>
                        </Link>

                        <Link to="/home?category=Дом и сад" className={stylesHome.sidebar_link}>
                            <div className={`${stylesHome.category_card} ${categoryFromUrl === 'Дом и сад' ? stylesHome.category_card_active : ''}`}>
                                <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_red}`}>🛋️</div>
                                <div className={stylesHome.cat_title}>Дом и сад</div>
                                <div className={stylesHome.cat_count}>2 719 объявлений</div>
                            </div>
                        </Link>

                        <Link to="/home?category=Стройка и ремонт" className={stylesHome.sidebar_link}>
                            <div className={`${stylesHome.category_card} ${categoryFromUrl === 'Стройка и ремонт' ? stylesHome.category_card_active : ''}`}>
                                <div className={`${stylesHome.cat_icon} ${stylesHome.cat_icon_green}`}>🔧</div>
                                <div className={stylesHome.cat_title}>Стройка и ремонт</div>
                                <div className={stylesHome.cat_count}>1 343 объявлений</div>
                            </div>
                        </Link>

                        <Link to="/home" className={stylesHome.sidebar_link}>
                            <div className={`${stylesHome.category_card} ${stylesHome.category_card_all} ${!categoryFromUrl ? stylesHome.category_card_active : ''}`}>
                                <div className={stylesHome.cat_icon_all}>▦</div>
                                <div className={stylesHome.cat_title}>Все категории</div>
                                <div className={stylesHome.cat_count}>Смотреть все</div>
                            </div>
                        </Link>
                    </div>

                    
                    <div className={stylesHome.products_section}>
                        <div className={stylesHome.products_header}>
                            <h3 className={stylesHome.products_title}>
                                {categoryFromUrl ? `Товары в категории «${categoryFromUrl}»` : 'Рекомендуемые товары'}
                            </h3>
                            {categoryFromUrl && (
                                <Link to="/home" className={stylesHome.products_see_all}>Сбросить фильтр</Link>
                            )}
                        </div>

                        {loading ? (
                            <p style={{ color: '#a1a3a2' }}>Загрузка товаров...</p>
                        ) : products.length === 0 ? (
                            <p style={{ color: '#a1a3a2' }}>По вашему запросу ничего не найдено.</p>
                        ) : (
                            <div className={stylesHome.products_grid}>
                                {products.map((product) => (
                                    <div key={product.id} className={stylesHome.product_card}>
                                        <div className={stylesHome.product_img_wrap}>
                                            <img 
                                                src={product.image_url || 'https://images.unsplash.com/photo-1592750475338-74b7b21085c0?w=400'} 
                                                alt={product.name} 
                                                className={stylesHome.product_img} 
                                            />
                                            <span className={stylesHome.product_heart}>♡</span>
                                        </div>
                                        <div className={stylesHome.product_info}>
                                            <div className={stylesHome.product_name}>{product.name}</div>
                                            <div className={stylesHome.product_price}>{product.price.toLocaleString()} ₽</div>
                                            <div className={stylesHome.product_bottom}>
                                                <span className={stylesHome.product_location}>📍 {product.location}</span>
                                                <span className={stylesHome.product_time}>{product.timeAgo}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </section>
        </div>
    );
}

export default Home;