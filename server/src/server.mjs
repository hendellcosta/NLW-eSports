import express from "express";

const app = express();

// when I enter www.myapp.com/ads it's gonna show the function, initially as 'console.log';
app.get("/ads", (request, response) => {
  return response.json([
    {
      id: 1,
      name: "AD 1",
    },
    {
      id: 2,
      name: "AD 2",
    },
    {
      id: 3,
      name: "AD 3",
    },
  ]);
});

app.listen(3333);
