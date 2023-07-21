import app from "./app";
var cors = require('cors');
app.use(cors());


const main=()=>{
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};

main();