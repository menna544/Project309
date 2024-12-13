import menu1 from '../../images/11.png';
import menu2 from '../../images/22.png';
import menu3 from '../../images/33.png';
import menu4 from '../../images/44.png';
import menu5 from '../../images/55.png';
import menu6 from '../../images/66.png';
import '../../Pages/home.css';
const menuData = [
    {
      id: 1,
      name: "Cappuccino",
      description:
        "Steamed milk and foam. This coffee is all about the structure and the even splitting of all elements into equal thirds.",
      price: "$8.99",
      image: menu1,
    },
    {
      id: 2,
      name: "Hot Chocolate",
      description:
        "Dark, semisweet, or bittersweet chocolate grated or chopped into small pieces and stirred into milk with the addition of sugar.",
      price: "$10",
      image: menu2,
    },
    {
      id: 3,
      name: "Lungo",
      description:
        "Italian means 'long coffee.' For you, it means even more time to enjoy this remarkably balanced cup with roasty notes and blackcurrant undertones.",
      price: "$10",
      image: menu3,
    },
    {
      id: 4,
      name: "Espresso",
      description:
        "Concentrated form of coffee brewed with high pressure, hot water and finely ground coffee beans.",
      price: "$6",
      image: menu4,
    },
    {
      id: 5,
      name: "Doppio",
      description:
        "Double shot which is extracted using double the amount of ground coffee in a larger-sized portafilter basket.",
      price: "$12",
      image: menu5,
    },
    {
      id: 6,
      name: "Cortado",
      description:
        "Beverage consisting of espresso mixed with a roughly equal amount of warm milk to reduce the acidity.",
      price: "$8.55",
      image: menu6,
    },
  ];
  
  function MenuSection() {
    return (
      <section className="menuhome" id="menu">
        <h1 className="heading">
          our <span>popular menu</span>
        </h1>
  
        <div className="box-container">
          {menuData.map((item) => (
            <div key={item.id} className="box">
              <img src={item.image} alt={item.name} />
              <div className="contet">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default MenuSection;