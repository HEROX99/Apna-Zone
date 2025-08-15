import { Product } from '../types';

export const products: Product[] = [
  // Books
  {
    id: 1,
    name: "Data Structures & Algorithms in C++",
    category: "books",
    subcategory: "Computer Science",
    price: 499,
    description: "Comprehensive guide to data structures and algorithms for B.Tech CS students.",
    image: "image/DSA_in_C++.jpg",
    images: ["/image/DSA_in_C++.jpg","/image/Accessories/Notebooks.jpeg","/image/Electronics/ElectronicComponents.jpeg"],
    features: ["200+ solved problems","Latest syllabus coverage","Includes past year GATE questions","C++ STL included"]
  },
  {
    id: 2,
    name: "Engineering Mathematics Vol. I",
    category: "books",
    subcategory: "Mathematics",
    price: 350,
    description: "Essential mathematics concepts for engineering students.",
    image: "image/Engineering_Maths.jpeg"
  },
  {
    id: 3,
    name: "Digital Electronics",
    category: "books",
    subcategory: "Electronics",
    price: 425,
    description: "Fundamentals of digital electronics with practical examples.",
    image: "image/DigitalE.jpeg"
  },
  {
    id: 4,
    name: "Principles of Electrical Engineering",
    category: "books",
    subcategory: "Electrical",
    price: 475,
    description: "Comprehensive coverage of electrical engineering fundamentals.",
    image:  "image/EE.jpeg"
  },
  {
    id: 5,
    name: "Mechanics of Materials",
    category: "books",
    subcategory: "Mechanical",
    price: 399,
    description: "Essential concepts for mechanical engineering students.",
    image: "image/MOMj.jpeg"
  },
  
  // Accessories
  {
    id: 6,
    name: "Premium Notebook (Pack of 4)",
    category: "accessories",
    subcategory: "Stationery",
    price: 299,
    description: "High-quality notebooks with ruled pages, perfect for lectures and labs.",
    image: "image/Accessories/Notebooks.jpeg"
  },
  {
    id: 7,
    name: "Engineering Drawing Kit",
    category: "accessories",
    subcategory: "Drafting",
    price: 750,
    description: "Complete drawing kit with compass, divider, scales and more.",
    image: "image/Accessories/ED.jpeg"
  },
  {
    id: 8,
    name: "Scientific Calculator",
    category: "accessories",
    subcategory: "Electronics",
    price: 1200,
    description: "Advanced scientific calculator approved for engineering exams.",
    image: "image/Accessories/Calc.jpg"
  },
  {
    id: 9,
    name: "Premium Pen Set",
    category: "accessories",
    subcategory: "Stationery",
    price: 199,
    description: "Set of 4 smooth-writing pens of premiun style.",
    image: "image/Accessories/Pen.jpeg"
  },
  {
    id: 10,
    name: "Lab Coat",
    category: "accessories",
    subcategory: "Lab Equipment",
    price: 499,
    description: "Standard white lab coat for chemistry and biology laboratories.",
    image:  "image/Accessories/coat.jpeg"
  },
  
  // Electronics
  {
    id: 11,
    name: "Arduino Uno R3",
    category: "electronics",
    subcategory: "Microcontrollers",
    price: 650,
    description: "Original Arduino Uno microcontroller board for electronics projects.",
    image:   "image/Electronics/Arduino Uno R3.jpeg"
  },
  {
    id: 12,
    name: "Raspberry Pi 4 (4GB)",
    category: "electronics",
    subcategory: "Single Board Computers",
    price: 4999,
    description: "Latest Raspberry Pi with 4GB RAM, perfect for advanced projects.",
    image: "image/Electronics/Rasberry.jpeg"
  },
  {
    id: 13,
    name: "Electronics Component Kit",
    category: "electronics",
    subcategory: "Components",
    price: 1499,
    description: "Comprehensive kit with resistors, capacitors, LEDs, and more.",
    image: "image/Electronics/ElectronicComponents.jpeg "
  },
  {
    id: 14,
    name: "Breadboard and Jumper Wire Set",
    category: "electronics",
    subcategory: "Prototyping",
    price: 399,
    description: "Large breadboard with 120 multicolored jumper wires.",
    image: "image/Electronics/BreadWire.jpeg"
  },
  {
    id: 15,
    name: "Digital Multimeter",
    category: "electronics",
    subcategory: "Test Equipment",
    price: 899,
    description: "Professional digital multimeter for electronics lab work.",
    image: "image/Electronics/Multimeter.jpeg"
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};