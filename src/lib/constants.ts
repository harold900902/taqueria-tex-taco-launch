// ===================================
// TAQUERIA TEX-TACO CONFIGURATION
// Change these values to update contact info
// ===================================

export const BUSINESS_INFO = {
  name: "Taqueria Tex-Taco",
  tagline: "Authentic Tex-Mex in Katy, TX",
  phone: "(832) 693-5404",
  phoneClean: "8326935404", // For tel: links
  whatsappNumber: "18326935404", // Include country code
  address: "2900 Katy Hockley Cut Off Rd",
  city: "Katy",
  state: "TX",
  zip: "77493",
  fullAddress: "2900 Katy Hockley Cut Off Rd, Katy, TX 77493",
  googleMapsUrl: "https://maps.google.com/?q=2900+Katy+Hockley+Cut+Off+Rd,+Katy,+TX+77493",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.5!2d-95.82!3d29.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ5JzEyLjAiTiA5NcKwNDknMTIuMCJX!5e0!3m2!1sen!2sus!4v1",
  facebook: "https://facebook.com/taqueriatextaco",
  instagram: "https://instagram.com/taqueriatextaco",
};

// Hours - Update these as needed
export const BUSINESS_HOURS = [
  { day: "Monday", hours: "6:00 AM - 3:00 PM" },
  { day: "Tuesday", hours: "6:00 AM - 3:00 PM" },
  { day: "Wednesday", hours: "6:00 AM - 3:00 PM" },
  { day: "Thursday", hours: "6:00 AM - 3:00 PM" },
  { day: "Friday", hours: "6:00 AM - 3:00 PM" },
  { day: "Saturday", hours: "6:00 AM - 3:00 PM" },
  { day: "Sunday", hours: "7:00 AM - 2:00 PM" },
];

// Menu items organized by category
export const MENU_ITEMS = {
  breakfast: [
    { name: "Bacon & Egg Taco", description: "Crispy bacon, fluffy scrambled eggs, fresh salsa", price: "$—", popular: true },
    { name: "Chorizo & Egg", description: "Savory Mexican chorizo with eggs on corn or flour", price: "$—", popular: false },
    { name: "Potato & Egg", description: "Seasoned potatoes and scrambled eggs, classic comfort", price: "$—", popular: false },
    { name: "Barbacoa & Egg", description: "Tender slow-cooked beef with eggs", price: "$—", popular: true },
    { name: "Bean & Cheese", description: "Refried beans with melted cheese, simple and delicious", price: "$—", popular: false },
    { name: "Breakfast Plate", description: "Two eggs any style, beans, rice, tortillas", price: "$—", popular: false },
  ],
  tacos: [
    { name: "Carne Asada", description: "Grilled marinated steak, onions, cilantro", price: "$—", popular: true },
    { name: "Al Pastor", description: "Marinated pork, pineapple, onions, cilantro", price: "$—", popular: false },
    { name: "Carnitas", description: "Slow-braised pork, crispy edges, fresh toppings", price: "$—", popular: false },
    { name: "Chicken Fajita", description: "Grilled chicken with peppers and onions", price: "$—", popular: false },
    { name: "Barbacoa", description: "Tender slow-cooked beef cheek, traditional style", price: "$—", popular: false },
    { name: "Fish Taco", description: "Crispy battered fish, cabbage slaw, chipotle crema", price: "$—", popular: false },
  ],
  plates: [
    { name: "Fajita Plate", description: "Sizzling beef or chicken with rice, beans, tortillas", price: "$—", popular: false },
    { name: "Enchilada Plate", description: "Three enchiladas with your choice of filling", price: "$—", popular: false },
    { name: "Taco Plate", description: "Three street tacos with rice and beans", price: "$—", popular: false },
    { name: "Quesadilla Plate", description: "Large flour quesadilla with sides", price: "$—", popular: false },
  ],
  drinks: [
    { name: "Horchata", description: "Traditional rice drink with cinnamon", price: "$—", popular: true },
    { name: "Jamaica", description: "Refreshing hibiscus flower tea", price: "$—", popular: false },
    { name: "Mexican Coke", description: "Made with real cane sugar", price: "$—", popular: false },
    { name: "Coffee", description: "Fresh brewed, hot or iced", price: "$—", popular: false },
  ],
};

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Maria G.",
    text: "Best breakfast tacos in Katy! The barbacoa is incredible. We come here every Saturday morning.",
    rating: 5,
  },
  {
    name: "John T.",
    text: "Fast, friendly service and authentic flavors. The chorizo tacos remind me of my grandmother's cooking.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    text: "Finally found a real taqueria near me! Fresh tortillas and generous portions. Highly recommend!",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "My go-to spot for a quick lunch. The carne asada tacos are perfect every time.",
    rating: 5,
  },
  {
    name: "Lisa P.",
    text: "Love the horchata here! So refreshing. The staff is always welcoming.",
    rating: 5,
  },
  {
    name: "Mike D.",
    text: "Great food, great prices. Can't beat it. The breakfast plates are huge!",
    rating: 5,
  },
];
