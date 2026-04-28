const e = require("express"), app = e();
let p = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 }
];
app.use(e.json());
app.get("/", (_, r) => r.send("Hello, Express!"));
app.get("/products", (_, r) => r.json(p));
app.post("/products", (q, r) => {
  let x = { id: p.length + 1, name: q.body.name, price: q.body.price };
  p.push(x); r.json(x);
});
app.get("/products/:id", (q, r) => {
  let x = p.find(i => i.id == q.params.id);
  x ? r.json(x) : r.send("Not found");
});
app.put("/products/:id", (q, r) => {
  let x = p.find(i => i.id == q.params.id);
  if (!x) return r.send("Not found");
  x.name = q.body.name || x.name;
  x.price = q.body.price || x.price;
  r.json(x);
});
app.delete("/products/:id", (q, r) => {
  p = p.filter(i => i.id != q.params.id);
  r.send("Deleted");
});
app.listen(3000);