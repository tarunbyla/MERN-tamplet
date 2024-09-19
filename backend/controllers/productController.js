import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/ProductModel.js";
import errorResponse from "../utils/errorResponse.js";
import searchQuery from "../utils/searchQuery.js";

//@desc get all products
//@route POST /api/products
//@access public
export const getAllProducts = asyncHandler(async (req, res, next) => {
  const result = await client.query("SELECT * FROM users");

  if (!result) {
    console.error("Error fetching users", err);

    return next(new errorResponse("Failed to fetch users", 500));
  }
  res.json(result.rows);
});