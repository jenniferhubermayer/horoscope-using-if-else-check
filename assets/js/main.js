
checkHoroscope = (event) => {
    event.preventDefault();
    let zodiacHeadline = document.querySelector("h2");
    let zodiacPicture = document.querySelector("#zodiacImage");
    let zodiacText = document.querySelector("p");
    let date = document.querySelector('#date').value;
    console.log(date)
    let dateMonth = date.substr(5, 2);
    console.log(dateMonth)
    let dateDay = date.substr(8, 2);
    console.log(dateDay)

    if (dateDay >= 21 && dateDay <= 31 && dateMonth == 01 || dateDay >= 1 && dateDay <= 19 && dateMonth == 02){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `AQUARIUS`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/aquarius.jpeg')";
        zodiacText.innerText = `Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…`;
    }
    else if (dateDay >= 20 && dateDay <= 28 && dateMonth == 02 || dateDay >= 1 && dateDay <= 20 && dateMonth == 03){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `PISCES`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/pisces.jpeg')";
        zodiacText.innerText = `Communication is very important today—written, spoken, and even nonverbal body language will all…`
    }
    else if (dateDay >= 21 && dateDay <= 31 && dateMonth == 03 || dateDay >= 1 && dateDay <= 20 && dateMonth == 04){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `ARIES`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/aries.jpeg')";
        zodiacText.innerText = `Today your patience might be tested when one or more of your projects gets put on hold by someone…`
    }
    else if (dateDay >= 21 && dateDay <= 30 && dateMonth == 04 || dateDay >= 1 && dateDay <= 20 && dateMonth == 05){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `TAURUS`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/taurus.jpeg')";
        zodiacText.innerText = `Your intense energy makes you a great candidate for a leadership position right now, so if you are…`
    }
    else if (dateDay >= 21 && dateDay <= 31 && dateMonth == 05 || dateDay >= 1 && dateDay <= 21 && dateMonth == 06){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `GEMINI`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/gemini.jpeg')";
        zodiacText.innerText = `If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…`
    }
    else if (dateDay >= 22 && dateDay <= 30 && dateMonth == 06 || dateDay >= 1 && dateDay <= 22 && dateMonth == 07){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `CANCER`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/cancer.jpeg')";
        zodiacText.innerText = `Too many different elements in your life are overlapping with each other right now—and it's your…`
    }
    else if (dateDay >= 23 && dateDay <= 31 && dateMonth == 07 || dateDay >= 1 && dateDay <= 23 && dateMonth == 08){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `LEO`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/leo.jpeg')";
        zodiacText.innerText = `The issues you'll be dealing with today are very complicated ones—you will have to navigate your…`
    }
    else if (dateDay >= 24 && dateDay <= 31 && dateMonth == 08 || dateDay >= 1 && dateDay <= 23 && dateMonth == 09){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `VIRGO`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/virgio.jpeg')";
        zodiacText.innerText = `You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…`
    }
    else if (dateDay >= 24 && dateDay <= 30 && dateMonth == 09 || dateDay >= 1 && dateDay <= 23 && dateMonth == 10){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `LIBRA`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/libra.jpeg')";
        zodiacText.innerText = `Pick a cultural event that's coming up and get some tickets for it today.`
    }
    else if (dateDay >= 24 && dateDay <= 31 && dateMonth == 10 || dateDay >= 1 && dateDay <= 22 && dateMonth == 11){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `SCORPIO`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/scorpio.jpeg')";
        zodiacText.innerText = `Someone will challenge a belief that you've held for a very long time today—and they will say an…`
    }
    else if (dateDay >= 23 && dateDay <= 30 && dateMonth == 11 || dateDay >= 1 && dateDay <= 21 && dateMonth == 12){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `SAGITTARIUS`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/sagittarius.jpeg')";
        zodiacText.innerText = `Someone in your life needs to step up and take on more responsibility—and you need to tell them to…`
    }
    else if (dateDay >= 22 && dateDay <= 31 && dateMonth == 12 || dateDay >= 1 && dateDay <= 20 && dateMonth == 01){
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
        zodiacHeadline.innerText = `CAPRICORN`;
        zodiacPicture.style.backgroundImage = "url('../assets/img/capricorn.jpeg')";
        zodiacText.innerText = `Breaking the rules is not always a bad thing—especially if the rules limit your creativity.`
    }
    else{
        zodiacHeadline.innerText = "Oops. Something went wrong";
        zodiacPicture.style.backgroundImage = "url('../assets/img/zodiac.jpeg')";
        zodiacText.innerText = `Please make sure to provide the day, month and year of birth!`
        document.getElementById("zodiacImage").classList.remove("inactive");
        document.getElementById("zodiacImage").classList.add("active");
    }
}

// checkHoroscope = (event) => {
//     event.preventDefault();
//     let month = document.querySelector("#month");
//     let monthKlein = month.value.toLowerCase();
//     let zodiacHeadline = document.querySelector("h2");
//     let zodiacPicture = document.querySelector("#zodiacImage");
//     let zodiacText = document.querySelector("p");
//     switch (monthKlein){
//         case "jan":
//         case "january":
//             zodiacHeadline.innerText = `AQUARIUS`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/aquarius.jpg')";
//             zodiacText.innerText = `Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         case "feb":
//         case "february":
//             zodiacHeadline.innerText = `PISCES`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/pisces.jpg')";
//             zodiacText.innerText = `Communication is very important today—written, spoken, and even nonverbal body language will all…`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         case "mar":
//         case "march":
//             zodiacHeadline.innerText = `ARIES`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/aries.jpg')";
//             zodiacText.innerText = `Today your patience might be tested when one or more of your projects gets put on hold by someone…`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         case "apr":
//         case "april":
//             zodiacHeadline.innerText = `TAURUS`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/taurus.jpg')";
//             zodiacText.innerText = `Your intense energy makes you a great candidate for a leadership position right now, so if you are…`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         case "may":
//             zodiacHeadline.innerText = `GEMINI`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/gemini.jpg')";
//             zodiacText.innerText = `If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         case "jun":
//         case "june":
//             zodiacHeadline.innerText = `CANCER`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/cancer.jpg')";
//             zodiacText.innerText = `Too many different elements in your life are overlapping with each other right now—and it's your…`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         case "jul":
//         case "july":
//             zodiacHeadline.innerText = `LEO`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/leo.jpg')";
//             zodiacText.innerText = `The issues you'll be dealing with today are very complicated ones—you will have to navigate your…`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         case "aug":
//         case "august":
//             zodiacHeadline.innerText = `VIRGO`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/virgio.jpg')";
//             zodiacText.innerText = `You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         case "sep":
//         case "september":
//             zodiacHeadline.innerText = `LIBRA`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/libra.jpg')";
//             zodiacText.innerText = `Pick a cultural event that's coming up and get some tickets for it today.`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         case "oct":
//         case "october":
//             zodiacHeadline.innerText = `SCORPIO`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/scorpio.jpg')";
//             zodiacText.innerText = `Someone will challenge a belief that you've held for a very long time today—and they will say an…`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         case "nov":   
//         case "november":
//             zodiacHeadline.innerText = `SAGITTARIUS`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/sagittarius.jpg')";
//             zodiacText.innerText = `Someone in your life needs to step up and take on more responsibility—and you need to tell them to…`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         case "dec":   
//         case "december":
//             zodiacHeadline.innerText = `CAPRICORN`;
//             zodiacPicture.style.backgroundImage = "url('../assets/img/capricorn.jpg')";
//             zodiacText.innerText = `Breaking the rules is not always a bad thing—especially if the rules limit your creativity.`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//         default:
//             zodiacHeadline.innerText = "Oops. Something went wrong";
//             zodiacPicture.style.backgroundImage = "url('../assets/img/zodiac.jpg')";
//             zodiacText.innerText = `»${month.value}« is not a month. Please try again and type months name in letters!`
//             month.value = "";
//             document.getElementById("zodiacImage").classList.remove("inactive");
//             document.getElementById("zodiacImage").classList.add("active");
//             break;
//     }
// }