const express = require("express"); 				
const cors = require("cors"); 				
				
const app = express(); 			
				
app.use(express.json()); 			
app.use(cors()); 			
			
const { getCompliment, readFortune, updateFortune } = require("./ctrl.js")				
				
app.get('/api/movies', getCompliment, readFortune, updateFortune);				
						
			
const PORT = 4004; 				
app.listen(PORT, () => console.log('Server listening on port ${PORT}')); 			
				
