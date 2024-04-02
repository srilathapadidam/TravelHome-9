// gst-calculation

const btnEl = document.getElementById("paymentBtn");

btnEl.addEventListener("click", () => {

  const nameEl = document.getElementById("nameInput");
  const emailEl = document.getElementById("emailInput");
  const mobileEl = document.getElementById("mobileInput");
  const placeEl = document.getElementById("placeInput");
  const genderEl = document.getElementById("genderInput");
  const ageEl = document.getElementById("ageInput");

  const resNameEl = document.getElementById("resName");
  const resEmailEl = document.getElementById("resEmail");
  const resMobileEl = document.getElementById("resMobile");
  const resPlaceEl = document.getElementById("resPlace");
  const resGenderEl = document.getElementById("resGender");
  const resAgeEl = document.getElementById("resAge");

  const totalAmountEl = document.getElementById("totalAmount");

  const gst = document.getElementById("totalWithGst");

  const BangloreEl = document.getElementById("Banglore").value;
  const ChennaiEl = document.getElementById("Chennai").value;
  const KolkataEl = document.getElementById("Kolkata").value;
  const MumbaiEl = document.getElementById("Mumbai").value;
  const VijayavadaEl = document.getElementById("Vijayavada").value;
  const gstEl = document.getElementById("gstInput").value;

  resNameEl.innerHTML = `Name: ${nameEl.value}`;
  resNameEl.classList.add("name_element");

  resEmailEl.innerHTML = `E-mail : ${emailEl.value}`;
  resEmailEl.classList.add("email_element");

  resMobileEl.innerHTML = `Mobile: ${mobileEl.value}`;
  resMobileEl.classList.add("mobile_element");

  resPlaceEl.innerHTML = `Place: ${placeEl.value}`;
  resPlaceEl.classList.add("place_element");

  resGenderEl.innerHTML = `Gender: ${nameEl.value}`;
  resGenderEl.classList.add("gender_element");

  resAgeEl.innerHTML = `Age: ${ageEl.value}`;
  resAgeEl.classList.add("age_element");

  let total = [
    parseInt(BangloreEl),
    parseInt(ChennaiEl),
    parseInt(KolkataEl),
    parseInt(MumbaiEl),
    parseInt(VijayavadaEl),
  ];

  amount = 0;

  for (let i = 0; i < total.length; i++) {

    amount += total[i];
  }

  let totalAmount = amount * ( gstEl/ 100) + amount;
  totalAmountEl.innerHTML = `Total Ticket Amount is: ${amount}`
  totalWithGstEl = document.getElementById('totalWithGst');
  totalWithGstEl.innerHTML = `payment With ${gstEl}% GST : ${totalAmount}`;
  
  if(totalAmount <= 3000){

        totalWithGstEl.innerHTML = ` Actual charges payment With ${gstEl}% GST : ${totalAmount}/-`;

    } else if (totalAmount > 5000){

      document.getElementById("totalAmount").innerHTML = ` Total  ticket payment after discount is : ${totalAmount -100}/-<br> Note :
      charges exceeds more than 5000 then will only get 100 rupees discount in every ticket`; 
    }
    else{
      document.getElementById("totalAmount").innerHTML = `Total ticket payment after discount is : ${totalAmount -50}/-<br> Note : charges in between 3000 to 5000 then you will get 50 rupees discount on your ticket`;
    }
    }  
);

// burger-menudisplay

function navSlide()
    {
        const nav = document.querySelector(".nav");
        const menubar = document.querySelector(".nav-links");
        const burger = document.querySelector(".burger");

        burger.addEventListener("click", ()=>{
            menubar.classList.toggle("nav-active");

            burger.classList.toggle("toggle");

        });
    }

    navSlide();

function change(element){
    element.classList.toggle("maximum");
}




