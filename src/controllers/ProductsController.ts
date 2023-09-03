import { Request, Response } from 'express';
import Product from '../models/product';

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if(product) {
        return res.status(200).json(product);
    } else {
      return res.status(401).json({message: "Product Not Founded!"});
    }
  } catch (error) {
    return res.status(400).json({error});
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const listProducts = await Product.findAll();
    return res.status(200).json(listProducts);
  } catch (error) {
    return res.status(400).json({message: "No Products Founded!"});
  }
}

export const postProduct = async (req: Request, res: Response) => {
  const { body } = req;
  try {
      const product = await Product.create(body);
      res.status(200).json({product, message: 'Product Added Successfully!'});
  } catch (error) {
    console.log(error);
    res.status(400).json({error});
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if(product) {
      await product.update(body);
      res.status(200).json({message: 'Product Updated Successfully!'})
    } else {
      res.status(401).json({message: `Product ${id} Not Founded}`})
    }
  } catch (error) {
      console.log(error);
      return res.status(400).json({error});
  } 
}

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);

    if(product) {
      await product.destroy();
      res.status(200).json({message: 'Product Deleted Successfully!'})
    } else {
      res.status(401).json({message: `Product ${id} Not Founded}`})
    } 
  } catch (error) {
    return res.status(400).json({error});
  }
}