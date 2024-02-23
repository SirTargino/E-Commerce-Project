# Music E-Commerce


A complete e-commerce project, including front-end, back-end and database. With it, it is possible to create users, products, sales, edit this data and also delete it, following the logic of a CRUD. This project is being developed to practice the knowledge acquired in recent months.




## API Documentation

#### Create User

```http
  POST/createuser
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Mandatory**. The name of the user |
| `email` | `string` | **Mandatory**. The e-mail of the user |
| `password` | `string` | **Mandatory**. The password of the user |

#### Create a product

```http
  POST/createproduct
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Mandatory**. The name of the product |
| `description` | `string` | **Mandatory**. A short description of the product |
| `price` | `float` | **Mandatory**. The price of product |
| `stock` | `string` | **Mandatory**. The quantity in stock |


