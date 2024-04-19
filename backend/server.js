const express = require("express");
const server = express();
const cors = require("cors");
const port = 3000;
const schoolRouter = require("./routers/schoolRouter")


server.use(express.json())
server.use(cors());
server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

server.use("/schools",schoolRouter);

