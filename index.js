const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());


app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

       
        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: "Input data must be an array." });
        }

      
        const user_id = "nupoor_sagar_15112004"; 
        const email = "nupoorsagar2022@vitbhopal.ac.in";
        const roll_number = "22BHI10060";
       

        const odd_numbers = [];
        const even_numbers = [];
        const alphabets = [];
        const special_characters = [];
        let sum = 0;
        let alphabet_string = "";

     
        data.forEach(item => {
            if (!isNaN(parseFloat(item)) && isFinite(item)) {
                
                const num = parseInt(item, 10);
                sum += num;
                if (num % 2 === 0) {
                    even_numbers.push(String(num));
                } else {
                    odd_numbers.push(String(num));
                }
            } else if (/^[a-zA-Z]+$/.test(item)) {
               
                alphabets.push(item.toUpperCase());
                alphabet_string += item;
            } else {
               
                special_characters.push(item);
            }
        });
        
       
        let concat_string = "";
        const reversed_alphabets = alphabet_string.split('').reverse().join('');
        for (let i = 0; i < reversed_alphabets.length; i++) {
            if (i % 2 === 0) {
                concat_string += reversed_alphabets[i].toUpperCase();
            } else {
                concat_string += reversed_alphabets[i].toLowerCase();
            }
        }

        //final response object
        const response = {
            is_success: true,
            user_id: user_id,
            email: email,
            roll_number: roll_number,
            odd_numbers: odd_numbers,
            even_numbers: even_numbers,
            alphabets: alphabets,
            special_characters: special_characters,
            sum: String(sum),
            concat_string: concat_string
        };

        
        return res.status(200).json(response);

    } catch (error) {
        // errors
        console.error("Error processing request:", error);
        return res.status(500).json({ is_success: false, error: "Internal Server Error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});