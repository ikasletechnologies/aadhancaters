import { Leaf } from 'lucide-react'
import feastImage from '@/assets/images/menu-hero-feast.png'
import './MenuProducts.css'

const categories = [
 {title:'Breakfast & Tiffin',tagline:'Timeless Favourites to Start Your Day Right.',items:['Idli','Mini Idli','Ghee Pongal','Ven Pongal','Masala Dosa','Plain Dosa','Onion Uthappam','Rava Dosa','Poori Masala','Medu Vada']},
 {title:'Traditional Meals',tagline:'Wholesome. Authentic. Unforgettable.',items:['Banana Leaf Meal','Mini Meals','Executive Meal','South Indian Meals','Wedding Feast','Festival Special','Housewarming Meal','Corporate Lunch Box','Veg Deluxe Meal','Traditional Thali']},
 {title:'Rice & Biryani',tagline:'Flavourful Rice Dishes for Every Mood.',items:['Vegetable Biryani','Hyderabadi Veg Biryani','Mushroom Biryani','Paneer Biryani','Jeera Rice','Lemon Rice','Tamarind Rice','Coconut Rice','Tomato Rice','Curd Rice']},
 {title:'Dinner & Night Specials',tagline:'Comforting Classics for Memorable Evenings.',items:['Chapati Kurma','Parotta Salna','Kothu Parotta','Idiyappam with Kurma','Appam with Stew','Kal Dosa','Ruchi Parotta','Set Dosa','Veg Fried Rice','Hakka Noodles']},
 {title:'Gravies & Sides',tagline:'Perfect Companions for a Richer Meal.',items:['Sambar','Vegetable Kurma','Channa Masala','Paneer Butter Masala','Avial','Beans Poriyal','Mixed Veg Kootu','Rasam','Mor Kuzhambu','Vatha Kuzhambu']},
 {title:'Snacks & Savories',tagline:'Crispy Bites for Every Occasion.',items:['Masala Vada','Bonda','Bajji Platter','Samosa','Veg Cutlet','Murukku','Thattai','Mixture','Sundal','Onion Pakoda']},
 {title:'Sweets & Desserts',tagline:'Sweet Moments, Sweeter Memories.',items:['Kesari','Gulab Jamun','Badam Halwa','Semiya Payasam','Carrot Halwa','Boondi Laddu','Jangri','Mysore Pak','Rasgulla','Ice Cream Cup']},
 {title:'Beverages',tagline:'Refreshing Sips for Every Gathering.',items:['Filter Coffee','Masala Tea','Sukku Coffee','Rose Milk','Badam Milk','Fresh Lime Juice','Watermelon Juice','Mango Juice','Buttermilk','Tender Coconut Water']},
 {title:'Live Counters & Specials',tagline:'Interactive Food Experiences for a Grand Celebration.',items:['Dosa Live','Chaat Counter','Sweet Counter','Juice Counter','Pan Counter','Ice Cream Counter','Appam Live Station','Mini Tiffin Counter','Biryani Counter','Dessert Counter']},
]

export function MenuProducts(){return <section id='menu' className='menu-products' aria-labelledby='menu-products-title'><div className='menu-products__intro'><p>Explore our flavours</p><h2 id='menu-products-title'>Our Complete Menu</h2></div><div className='menu-products__catalog'>{categories.map((category,categoryIndex)=><section className='menu-category' key={category.title}><header><b>{categoryIndex+1}</b><h3>{category.title}</h3><Leaf/><span>{category.tagline}</span></header><div className='menu-category__items'>{category.items.map((item,itemIndex)=><article className='menu-product' key={item}><div className='menu-product__photo'><img src={feastImage} alt='' style={{objectPosition:`${45+(itemIndex%5)*11}% ${35+(categoryIndex%3)*24}%`}}/></div><div><i>{itemIndex+1}</i><strong>{item}</strong></div></article>)}</div></section>)}</div></section>}
