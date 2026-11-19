export type Locale = "en" | "ar";

export type Category = "coffee" | "desserts" | "pizza" | "fries" | "drinks";

export interface MenuItem {
  id: string;
  category: Category;
  name: { en: string; ar: string };
  price: number; // AED
  description: { en: string; ar: string };
  image: string;
  tags?: ("special" | "winter" | "new")[];
  available?: boolean;
}

export interface SpecialEvent {
  id: string;
  type: "birthday";
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  image: string;
  cta: { en: string; ar: string };
}

export const categories: { id: Category; label: { en: string; ar: string } }[] = [
  { id: "coffee", label: { en: "Coffee", ar: "قهوة" } },
  { id: "desserts", label: { en: "Desserts", ar: "حلويات" } },
  { id: "pizza", label: { en: "Pizza", ar: "بيتزا" } },
  { id: "fries", label: { en: "Fries", ar: "بطاطس" } },
  { id: "drinks", label: { en: "Drinks", ar: "مشروبات" } },
];

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: "espresso",
    category: "coffee",
    name: { en: "Espresso", ar: "إسبريسو" },
    price: 14,
    description: {
      en: "Rich, concentrated shot of pure coffee. Bold and intense.",
      ar: "جرعة مركزة غنية من القهوة النقية. قوية ومكثفة.",
    },
    image: "https://images.unsplash.com/photo-1510591509090-bd8ff95a8d3c?w=800&q=80",
    tags: ["special"],
  },
  {
    id: "dirty-espresso",
    category: "coffee",
    name: { en: "Dirty Espresso", ar: "ديرتي إسبريسو" },
    price: 18,
    description: {
      en: "Espresso poured over a splash of cold milk. Smooth contrast of hot and cold.",
      ar: "إسبريسو يُصب فوق رشة من الحليب البارد. تباين ناعم بين الساخن والبارد.",
    },
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    tags: ["winter", "special"],
  },
  {
    id: "cortado",
    category: "coffee",
    name: { en: "Cortado", ar: "كورتادو" },
    price: 18,
    description: {
      en: "Equal parts espresso and steamed milk. Perfectly balanced.",
      ar: "أجزاء متساوية من الإسبريسو والحليب المبخر. متوازن تماماً.",
    },
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
  },
  {
    id: "spanish-cortado",
    category: "coffee",
    name: { en: "Spanish Cortado", ar: "كورتادو إسباني" },
    price: 20,
    description: {
      en: "Cortado with a touch of condensed milk sweetness.",
      ar: "كورتادو مع لمسة من حلاوة الحليب المكثف.",
    },
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    tags: ["special"],
  },
  {
    id: "latte",
    category: "coffee",
    name: { en: "Latte", ar: "لاتيه" },
    price: 20,
    description: {
      en: "Silky steamed milk over a smooth espresso base.",
      ar: "حليب مبخر حريري فوق قاعدة إسبريسو ناعمة.",
    },
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&q=80",
  },
  {
    id: "spanish-latte",
    category: "coffee",
    name: { en: "Spanish Latte", ar: "لاتيه إسباني" },
    price: 22,
    description: {
      en: "Our signature sweet Spanish latte with condensed milk.",
      ar: "لاتيه إسباني التوقيع لدينا مع الحليب المكثف.",
    },
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80",
    tags: ["special", "winter"],
  },
  {
    id: "matcha",
    category: "coffee",
    name: { en: "Matcha", ar: "ماتشا" },
    price: 24,
    description: {
      en: "Premium ceremonial-grade matcha whisked to perfection.",
      ar: "ماتشا فاخر من الدرجة الاحتفالية يُخفق إلى الكمال.",
    },
    image: "https://images.unsplash.com/photo-1536256263959-2701e1bf5e70?w=800&q=80",
  },
  {
    id: "cloud-matcha",
    category: "coffee",
    name: { en: "Cloud Matcha", ar: "كلاود ماتشا" },
    price: 26,
    description: {
      en: "Fluffy cloud foam over vibrant green matcha.",
      ar: "رغوة سحابية ناعمة فوق ماتشا أخضر نابض.",
    },
    image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3000?w=800&q=80",
    tags: ["new", "special"],
  },
  {
    id: "hibiscus",
    category: "coffee",
    name: { en: "Hibiscus", ar: "كركديه" },
    price: 18,
    description: {
      en: "Refreshing floral hibiscus infusion, served hot or iced.",
      ar: "منقوع كركديه زهري منعش، يُقدم ساخناً أو مثلجاً.",
    },
    image: "https://images.unsplash.com/photo-1556679343-c7306c197cbb?w=800&q=80",
  },

  // Desserts
  {
    id: "why-misu",
    category: "desserts",
    name: { en: "Why-misu", ar: "واي ميزو" },
    price: 28,
    description: {
      en: "Our signature tiramisu with a Why Café twist. Creamy, coffee-soaked layers.",
      ar: "تيراميسو التوقيع لدينا مع لمسة واي كافيه. طبقات كريمية منقوعة بالقهوة.",
    },
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    tags: ["special", "winter"],
  },
  {
    id: "banana-pudding",
    category: "desserts",
    name: { en: "Banana Pudding", ar: "بودينغ الموز" },
    price: 24,
    description: {
      en: "Creamy banana pudding with vanilla wafers and fresh banana.",
      ar: "بودينغ موز كريمي مع بسكويت الفانيليا والموز الطازج.",
    },
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
  },
  {
    id: "why-fawala",
    category: "desserts",
    name: { en: "Why Fawala", ar: "واي فوالا" },
    price: 26,
    description: {
      en: "House special layered dessert — light, elegant and unforgettable.",
      ar: "حلوى طبقية خاصة بالمنزل — خفيفة وأنيقة ولا تُنسى.",
    },
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    tags: ["special"],
  },
  {
    id: "croissant-honeycomb",
    category: "desserts",
    name: { en: "Croissant Honeycomb", ar: "كرواسان خلية النحل" },
    price: 22,
    description: {
      en: "Flaky croissant filled with honeycomb and a drizzle of honey.",
      ar: "كرواسان هش محشو بخلايا النحل ورذاذ من العسل.",
    },
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    tags: ["winter"],
  },
  {
    id: "lemon-cake",
    category: "desserts",
    name: { en: "Lemon Cake", ar: "كعكة الليمون" },
    price: 20,
    description: {
      en: "Bright, zesty lemon cake with a light glaze.",
      ar: "كعكة ليمون زاهية ومنعشة مع طبقة خفيفة من التزجيج.",
    },
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
  },

  // Pizza
  {
    id: "why-pizza",
    category: "pizza",
    name: { en: "Why Pizza", ar: "واي بيتزا" },
    price: 48,
    description: {
      en: "Our house signature pizza with premium toppings.",
      ar: "بيتزا التوقيع لدينا مع إضافات فاخرة.",
    },
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    tags: ["special"],
  },
  {
    id: "buffalo-pizza",
    category: "pizza",
    name: { en: "Buffalo Pizza", ar: "بيتزا بافلو" },
    price: 52,
    description: {
      en: "Spicy buffalo chicken, ranch drizzle, mozzarella.",
      ar: "دجاج بافلو حار، رذاذ رانش، موزاريلا.",
    },
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
  },
  {
    id: "margherita",
    category: "pizza",
    name: { en: "Margherita", ar: "مارغريتا" },
    price: 42,
    description: {
      en: "Classic tomato, fresh mozzarella, basil.",
      ar: "طماطم كلاسيكية، موزاريلا طازجة، ريحان.",
    },
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
  },
  {
    id: "spicy-pepperoni",
    category: "pizza",
    name: { en: "Spicy Pepperoni", ar: "بيبروني حار" },
    price: 50,
    description: {
      en: "Loaded with spicy pepperoni and melted cheese.",
      ar: "محملة بالبيبروني الحار والجبن الذائب.",
    },
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
    tags: ["winter"],
  },
  {
    id: "short-ribs-pizza",
    category: "pizza",
    name: { en: "Short Ribs Pizza", ar: "بيتزا أضلاع قصيرة" },
    price: 58,
    description: {
      en: "Slow-braised short ribs, caramelized onion, mozzarella.",
      ar: "أضلاع قصيرة مطهوة ببطء، بصل مكرمل، موزاريلا.",
    },
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&q=80",
    tags: ["special"],
  },

  // Fries
  {
    id: "truffle-fries",
    category: "fries",
    name: { en: "Truffle Fries", ar: "بطاطس الكمأة" },
    price: 32,
    description: {
      en: "Crispy fries tossed in truffle oil and parmesan.",
      ar: "بطاطس مقرمشة مغطاة بزيت الكمأة والبارميزان.",
    },
    image: "https://res.cloudinary.com/diszilwhc/image/upload/v1795088887/611667784_18167885062385069_1611826583127877681_n_c4jx3r.jpg",
    tags: ["special"],
  },
  {
    id: "french-fries",
    category: "fries",
    name: { en: "French Fries", ar: "بطاطس مقلية" },
    price: 18,
    description: {
      en: "Classic golden crispy fries. Perfect side.",
      ar: "بطاطس ذهبية مقرمشة كلاسيكية. طبق جانبي مثالي.",
    },
    image: "https://res.cloudinary.com/diszilwhc/image/upload/v1795088887/611667784_18167885062385069_1611826583127877681_n_c4jx3r.jpg",
  },

  // Drinks
  {
    id: "soda",
    category: "drinks",
    name: { en: "Soda", ar: "صودا" },
    price: 10,
    description: {
      en: "Chilled soft drink of your choice.",
      ar: "مشروب غازي بارد من اختيارك.",
    },
    image: "https://images.unsplash.com/photo-1629203851120-3fc7b77b2c36?w=800&q=80",
  },
  {
    id: "still-water",
    category: "drinks",
    name: { en: "Still Water", ar: "ماء عادي" },
    price: 8,
    description: {
      en: "Refreshing still mineral water.",
      ar: "ماء معدني عادي منعش.",
    },
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
  },
  {
    id: "sparkling-water",
    category: "drinks",
    name: { en: "Sparkling Water", ar: "ماء فوار" },
    price: 10,
    description: {
      en: "Crisp sparkling mineral water.",
      ar: "ماء معدني فوار منعش.",
    },
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80",
  },
];

export const birthdaySpecial: SpecialEvent = {
  id: "birthday",
  type: "birthday",
  title: {
    en: "Celebrate with us",
    ar: "احتفل معنا",
  },
  subtitle: {
    en: "Birthday setups · Decorations · Special service",
    ar: "تجهيزات عيد ميلاد · ديكورات · خدمة خاصة",
  },
  image: "https://res.cloudinary.com/diszilwhc/image/upload/v1795087144/Golden-Hour_Birthday_Afternoon_Tea_by_the_Water_pyxf7i.png",
  cta: {
    en: "Ask us about packages",
    ar: "اسألنا عن الباقات",
  },
};

export function getSpecials(): (MenuItem | SpecialEvent)[] {
  const tagged = menuItems.filter(
    (item) => item.tags?.includes("special") || item.tags?.includes("winter")
  );
  return [birthdaySpecial, ...tagged.slice(0, 6)];
}
