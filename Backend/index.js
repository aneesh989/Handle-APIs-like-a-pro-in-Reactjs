import express from "express";

const app = express();

app.get('/api/products',(req,res)=>{

    const products=[
            {
              "id": 1,
              "name": "Wireless Bluetooth Headphones",
              "price": 49.99,
              "image": "https://images.pexels.com/photos/3755028/pexels-photo-3755028.jpeg"
            },
            {
              "id": 2,
              "name": "Smartphone (128GB)",
              "price": 699.99,
              "image": "https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg"
            },
            {
              "id": 3,
              "name": "4K Ultra HD TV (55-inch)",
              "price": 499.99,
              "image": "https://images.pexels.com/photos/5864576/pexels-photo-5864576.jpeg"
            },
            {
              "id": 4,
              "name": "Gaming Laptop",
              "price": 1299.99,
              "image": "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
            },
            {
              "id": 5,
              "name": "Smart Watch",
              "price": 199.99,
              "image": "https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg"
            },
            {
              "id": 6,
              "name": "Wireless Mouse",
              "price": 29.99,
              "image": "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg"
            },
            {
              "id": 7,
              "name": "DSLR Camera",
              "price": 849.99,
              "image": "https://images.pexels.com/photos/192518/pexels-photo-192518.jpeg"
            },
            {
              "id": 8,
              "name": "Tablet (64GB)",
              "price": 399.99,
              "image": "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg"
            },
            {
              "id": 9,
              "name": "Portable Bluetooth Speaker",
              "price": 79.99,
              "image": "https://images.pexels.com/photos/1210531/pexels-photo-1210531.jpeg"
            },
            {
              "id": 10,
              "name": "Fitness Tracker",
              "price": 89.99,
              "image": "https://images.pexels.com/photos/1310538/pexels-photo-1310538.jpeg"
            }
    ]
    if(req.query.search){
        const filterProducts= products.filter(product=>
            product.name.includes(req.query.search))
            res.send(filterProducts)
            return;
    }

    setTimeout(()=>{
        res.send(products);
    },3000)


})



const port =process.env.PORT ||3000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});