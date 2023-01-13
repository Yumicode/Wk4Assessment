module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

readFortune: (req, res) => {
    const fortune = ["looks like this is your lucky day today, Someone you love is thinking of you now, You will win the lottery if you get one today, Your good life is ahead of you from this point, Your fortune is in your own hand!"];
  
    // read random fortune
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let randomForturn = fortune[randomIndex];
  
    res.status(200).send(randomForturn);

},
updateForturn: (req, res) => {					
const { id } = req.params;
       const { type } = req.body;					
    fortune.forEach((fortune, i) => {					
        if(forturn.id === +id) {					
            if(type === "plus") {					  
            forturn[i].rating++;					
        }else{					
                forturn[i].rating--;				 
                forturn[i].rating++;					                   
}					
}	

} )					

res.status(200).send(updateForturn);					

}