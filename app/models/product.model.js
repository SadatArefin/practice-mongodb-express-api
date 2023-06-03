module.exports = mongoose => {
    const Product = mongoose.model(
      "product",
      mongoose.Schema(
        {
            name: String,
            description: String,
            price: Number,
            quantity: Number,
            status: Boolean      
        },
        { timestamps: true }
      )
    );
  
    return Product;
  };