import AppleImg from '../assets/apple.png'
import AvocadoSingleImg from '../assets/avocado-single.png'
import AvocadoGroupImg from '../assets/avocado-group.jpeg'
import PearImg from '../assets/pear.png'
import GrapeImg from '../assets/grape.png'
import PeachImg from '../assets/peach.png'
import CashewGroupImg from '../assets/cashew-fruit-group.jpeg'
import CashewSingleImg from '../assets/cashew-fruit-single.png'
import DateSingleImg from '../assets/date-single.png'
import DateGroupImg from '../assets/date-group.jpg'
import GreenPepperSingleImg from '../assets/green-pepper-single.png'
import MangoGroupImg from '../assets/mango-group.jpg'
import MangoSingleImg from '../assets/mango-single.png'
import PalmKernelSingleImg from '../assets/palm-kernel-single.png'
import PalmKernelGroupImg from '../assets/palm-kernel-group.jpg'
import StrawBerrySingleImg from '../assets/strawbery-single.png'
import StrawBerryGroupImg from '../assets/strawberry-group.jpeg'

const ProductData = [
    {
        title: 'Cashew Fruit',
        shortDescription: 'Creamy and versatile seeds, favored for their rich taste and used in various culinary dishes.',
        funFact: "The cashew fruit, while well-known, is just one part of the cashew tree's offerings. The cashew apple, a fleshy and sweet swollen stalk attached to the nut, is also edible and used to create beverages, jams, and other culinary delights in certain regions.",
        fullDescription: "The cashew fruit, often overshadowed by its nut, is a tropical gem with distinct flavors. Residing at the base of the cashew nut, the juicy and pulpy cashew fruit is rich in vitamins and minerals. Known for its sweet and tangy taste, it offers a delightful tropical indulgence. Beyond its delectable flavor, the cashew fruit provides a good source of vitamin C, supporting immune health. In some regions, it's transformed into refreshing beverages or enjoyed as a standalone treat, showcasing its versatility. Discover the wholesome taste and nutritional benefits hidden within the vibrant shell of the cashew fruit.",
        singleImg: CashewSingleImg,
        groupImg: CashewGroupImg,
        coord: {lat: 6.649299879545282, lng: 3.956643868968972}
        
    },
    {
        title: 'Avocado',
        shortDescription: 'Creamy and buttery, avocados are green fruits celebrated for their versatility in salads and guacamole.',
        funFact: "Despite their creamy texture and savory flavor, avocados are technically classified as berries, belonging to the Lauraceae family, which includes aromatic plants like cinnamon and bay laurel. This surprising botanical fact highlights the diverse nature of avocados, contributing to their unique culinary and nutritional profile.",
        fullDescription: 'Avocado, celebrated for its creamy texture and exquisite taste, is a nutritional powerhouse with multifaceted health advantages. Abundant in heart-healthy monounsaturated fats, avocados contribute to cholesterol regulation and cardiovascular well-being. Their high fiber content supports digestive health and aids in maintaining a satisfying sense of fullness, beneficial for weight management. Bursting with vitamins E, K, and C, avocados bolster skin health and fortify the immune system. As a versatile culinary ingredient, they lend themselves to a myriad of dishes, from nutrient-packed salads to savory spreads. Embrace the wholesome goodness of avocados, indulging in both the delectable flavor and the myriad of health benefits they bring to your plate.',
        singleImg: AvocadoSingleImg,
        groupImg: AvocadoGroupImg,
        coord: {lat: 6.650019123219196, lng: 3.9615445008838637}
    },
    {
        title: 'Strawberry',
        shortDescription: 'Sweet, red berry with a distinct heart shape and a juicy, flavorful taste.',
        funFact: "A delightful quirk of nature, strawberries are distinguished as the only fruit with seeds on the outside. Remarkably, each strawberry, with its sweet and juicy flesh, carries an average of about 200 tiny seeds adorning its vibrant red exterior.",
        fullDescription: "Strawberries, nature's vibrant jewels, are not just a delicious treat but a nutritional powerhouse. Bursting with antioxidants and vitamin C, strawberries contribute to skin health and support the immune system. Low in calories and high in fiber, these berries promote digestion and aid in weight management. The natural sweetness of strawberries makes them a guilt-free, flavorful addition to both sweet and savory dishes. Whether enjoyed fresh, in salads, or blended into smoothies, strawberries offer a refreshing and nutrient-packed delight. Embrace the succulent taste and health benefits of strawberries as a delightful addition to your daily diet.",
        singleImg: StrawBerrySingleImg,
        groupImg: StrawBerryGroupImg,
        coord: {lat: 6.655180742483334, lng: 3.957847588933637}
    },
    {
        title: 'Mango',
        shortDescription: 'Tropical fruit known for its sweet and juicy flesh, vibrant color, and versatility in various culinary uses.',
        funFact: 'Mango is considered the "king of fruits" and is not only delicious but also holds cultural significance in many regions. There are over 1,000 different varieties of mangoes, each with its unique flavor, texture, and color.',
        fullDescription: 'Mangoes, a tropical delight, are not only delicious but also offer an array of health benefits. Rich in vitamins A and C, mangoes support immune function and promote skin health. The fiber content aids digestion, and the natural sugars provide a quick energy boost. With their succulent taste and versatility, mangoes make a refreshing addition to both sweet and savory dishes, making them a wholesome choice for a flavorful diet.',
        singleImg: MangoSingleImg,
        groupImg: MangoGroupImg,
        coord: {lat: 6.652332603032803, lng: 3.958587232910396}
    },
    {
        title: 'Palm Kernel',
        shortDescription: 'Edible seed from oil palm trees used for palm oil extraction and culinary purposes.',
        funFact: 'Palm kernel oil, derived from the seeds of oil palm trees, is widely used in the production of various products, including cooking oil, soap, and cosmetics. Additionally, palm kernels are a rich source of lauric ac',
        fullDescription: 'Palm kernel, a versatile ingredient, brings a range of health benefits to the table. Packed with nutrient-rich oils, it supports heart health and aids in maintaining cholesterol levels. The high antioxidant content in palm kernel contributes to overall well-being and helps combat oxidative stress. Its inclusion in culinary creations adds a unique flavor profile and nutritional value, making it a valuable addition to a balanced diet.',
        singleImg: PalmKernelSingleImg,
        groupImg: PalmKernelGroupImg,
        coord: {lat: 6.651951204076104, lng: 3.9596453649336136}
    },
    {
        title: 'Dates',
        shortDescription: 'Sweet and chewy fruits, derived from date palm trees, popular for their natural sweetness and culinary uses.',
        funFact: 'Dates are not only delicious but also packed with nutrients. They are a good source of fiber, potassium, and various vitamins. In some cultures, dates are traditionally consumed to break fast during Ramadan, owing to their natural sweetness and nutritional value.',
        fullDescription: "Dates, nature's sweet gems, offer a multitude of health benefits. Packed with fiber, vitamins, and minerals, they support digestive health and provide sustained energy. Rich in antioxidants, dates contribute to overall well-being and may help protect against inflammation. With their natural sweetness and versatility, dates make for a nutritious and delicious addition to snacks, desserts, and even savory dishes.",
        singleImg: DateSingleImg,
        groupImg: DateGroupImg,
        coord: {lat: 6.654709229850445, lng: 3.950103507526744}
    },
    {
        title: 'Green Pepper',
        shortDescription: 'Mildly flavored bell pepper, often used in cooking for its crisp texture and fresh, slightly bitter taste.',
        funFact: 'Despite their name, green peppers are actually unripe versions of the bell pepper. As they ripen, they transform into red, yellow, or other colorful varieties, each offering slightly different flavors and nutritional profiles.',
        fullDescription: 'Green peppers, bursting with vibrant color, are a low-calorie addition to your diet. Rich in vitamin C and antioxidants, they support immune health and protect against cell damage. The crisp texture of green peppers adds a delightful crunch to salads and stir-fries. Including green peppers in your meals not only enhances flavor but also brings a nutritional boost to your plate.',
        singleImg: GreenPepperSingleImg,
        groupImg: '',
        coord: {lat: 6.650931690401686, lng: 3.957194753078412}
    },
    {
        title: 'Pears',
        shortDescription: 'Sweet and juicy fruits with a delightful flavor and smooth texture.',
        funFact: 'Pears continue to ripen after being picked. Placing them in a paper bag with a banana or apple can speed up the ripening process due to the ethene gas emitted, making them softer and more flavorful.',
        fullDescription: 'Pears are a fiber-rich fruit, aiding digestion and promoting a sense of fullness. Packed with essential vitamins and antioxidants, they contribute to overall immune system health. Their natural sweetness makes pears a delicious and nutritious snack. Incorporate pears into your diet for a flavorful and health-conscious choice.',
        singleImg: PearImg,
        groupImg: '',
        coord: {lat: 6.653687594039958, lng: 3.95545604494363}
    },

    {
        title: 'Grapes',
        shortDescription: 'Small, juicy fruits, commonly enjoyed fresh or used in the production of wine.',
        funFact: 'Grapes are not only enjoyed fresh but are also dried to make raisins. The process of drying concentrates their natural sugars, resulting in a sweet and nutritious snack that has been enjoyed for thousands of years.',
        fullDescription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exer',
        singleImg: GrapeImg,
        groupImg: '',
        coord: {lat: 6.655373024652408, lng: 3.9535634257456103}
    },

    {
        title: 'Peaches',
        shortDescription: 'Juicy and sweet fruits, often enjoyed fresh or used in various culinary dishes.',
        funFact: ' Peaches belong to the rose family and are closely related to almonds. The pits inside peaches contain compounds that release a distinct almond-like aroma when crushed, showcasing the botanical connection between these two fruits.',
        fullDescription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exer',
        singleImg: PeachImg,
        groupImg: '',
        coord: {lat: 6.655828773894546, lng: 3.9610776713789018}
    },

    {
        title: 'Apples',
        shortDescription: 'Crisp and refreshing fruits, widely consumed fresh or used in diverse culinary applications.',
        funFact: "Apples can float in water because they are 25% air, making them less dense than water. This buoyancy is due to the air pockets in the apple's cellular structure, allowing them to bob on the water's surface.",
        fullDescription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exerUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Ut enim ad minim veniam, quis nostrud exer',
        singleImg: AppleImg,
        groupImg: '',
        coord: {lat: 6.651851814692964, lng: 3.9610037011368107}
    }  
]

export default ProductData