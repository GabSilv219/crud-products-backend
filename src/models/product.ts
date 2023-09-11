import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Product = db.define('products', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.NUMBER
    }
}, {
    createdAt: true,
    updatedAt: true
});

export default Product;