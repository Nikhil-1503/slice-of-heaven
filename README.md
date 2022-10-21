# Slice of Heaven

## Cover Image

<img src="Cover.png" width="700" height="400">

## About

### Participant

#### Nikhil Shanbhag

- Github : @Nikhil-1503
- Discord : nikhil.1503#9740
- Twitter : @Nikhil_1503

### Description

A pizza shop storefront powered by using NextJs combined with MedusaJs.

### Preview

#### GIFs

- HomePage <br/><br/>
![HomePage](images/gif_one.gif)
- Products and Collection <br/><br/>
![Products](images/gif_two.gif)
- Price Change On Choosing Different Combination <br/><br/>
![Price Change](images/gif_three.gif)
- Cart and Checkout <br/><br/>
![Cart and Checkout](images/gif_four.gif)
- Medusa Admin Panel<br><br/>
![Medusa Admin](images/gif_five.gif)

#### Screenshots

![Image 1](images/img_one.png)
![Image 2](images/img_two.png)
![Image 3](images/img_three.png)

## Set up Project

### Prerequisites

- Medusa CLI (```npm install -g @medusajs/medusa-cli```) .
- [Redis](https://redis.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Node](https://node.org/)

### Install Project

1. Clone the repository:

```bash
git clone https://github.com/Nikhil-1503/slice-of-heaven.git
```

2. Change directory and install dependencies:

```bash
cd slice-of-heaven
cd backend
medusa develop
```

3. Open another terminal from slice-of-heaven folder:
```bash
cd storefront 
npm install
npm run dev
```

4. Open the project in your browser:
```bash
http://localhost:8000
```

## Resources
- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [Medusa Admin Panel](https://github.com/medusajs/admin)
- [Medusa Documentation](https://docs.medusajs.com/)
- [Medusa Next.js Starter](https://github.com/medusajs/nextjs-starter-medusa)
- [MinIO Documentation](https://min.io/docs/minio/windows/index.html)

## What's next for this project
- Planning to integrate payment plugin (Tried Stripe, but got error) and search plugin.
- Add more products.
- Improve the design.
- Deploy the storefront.
