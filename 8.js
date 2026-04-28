const e = require("express"), m = require("mongoose"), c = require("cors");
const app = e();
app.use(e.json()); 
app.use(c());
m.connect("mongodb://127.0.0.1:27017/shop")
 .then(() => console.log("DB connected"))
 .catch(err => console.log(err));
const Product = m.model("Product", { name: String, price: Number, description: String });
app.get("/", (req, res) => res.send("Server running"));
app.get("/products", async (_, res) => {
  res.json(await Product.find());
});
app.post("/products", async (req, res) => {
  let p = await Product.create(req.body);
  res.json(p);
});
app.listen(3001, () => console.log("Running on 3001"));