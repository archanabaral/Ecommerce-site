import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Archu",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Ashru",
      email: "user@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Formal pant and top",
      category: "formals",
      image: "/images/p-1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Formal pant and top",
      category: "formals",
      image: "/images/p-1.jpg",
      price: 120,
      countInStock: 2,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Formal pant and top",
      category: "formals",
      image: "/images/p-1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Formal pant and top",
      category: "formals",
      image: "/images/p-1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Formal pant and top",
      category: "formals",
      image: "/images/p-1.jpg",
      price: 120,
      countInStock: 5,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Formal pant and top",
      category: "formals",
      image: "/images/p-1.jpg",
      price: 120,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
