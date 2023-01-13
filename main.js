const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', readFortune)

const fortuneBtn = document.getElementById("fortuneButton")

const readFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', updateFortune)

cosnt updateFortune = (id, type)
    axios.get("http://localhost:4000/api/updateFortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });

