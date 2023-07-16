const card_property = [
  {
      id: 1,
      img: "https://img.jamesedition.com/listing_images/2022/07/28/14/48/06/027b7764-6d0c-413d-a7b3-fa56b338810e/je/1000x620xc.jpg",
      type: "flat",
      nameApartment: "Villa For Rent In Mumbai",
      location: "location",
      bathroom: 4,
      carPark: "yes",
      rooms: 2,
      sq_feet: 1500,
      energy_class: "A+",
      date: "1 year back"
  },
  {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBUA7AHl0Itfd_cZw4jkr_UFxBsjsgvc19VNl72hBvHBa5ReQcX3wf7wUKdgljF2uJhA&usqp=CAU",
      type: "villa",
      nameApartment: "Villa For Rent In Mumbai",
      location: "location",
      bathroom: 4,
      carPark: "yes",
      rooms: 2,
      sq_feet: 1500,
      energy_class: "A+",
      date: "1 year back"
  },
  {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqzawgT39JkvDB9iTgCM4GmH6XousnHE_9-yEuwKu3WTx-dCDRv2JfXj_9loSMp9-UtI&usqp=CAU",
      type: "villa",
      nameApartment: "Villa For Rent In Mumbai",
      location: "location",
      bathroom: 4,
      carPark: "yes",
      rooms: 2,
      sq_feet: 1500,
      energy_class: "A+",
      date: "1 year back"
  },
  {
      id: 4,
      img: "https://is1-3.housingcdn.com/4f2250e8/c6cf33372de7cff165e5b671d9e4f3be/v0/medium/kruthi_sai_cambridge_residency-indira_nagar-mysore-kruthi_developers.jpeg.webp",
      type: "villa",
      nameApartment: "Villa For Rent In Mumbai",
      location: "location",
      bathroom: 4,
      carPark: "yes",
      rooms: 2,
      sq_feet: 1500,
      energy_class: "A+",
      date: "1 year back"
  },
  {
      id: 5,
      img: "https://thumbs.dreamstime.com/b/variety-housing-real-estate-india-apartments-villas-gated-communities-hosing-property-209589460.jpg",
      type: "villa",
      nameApartment: "Villa For Rent In Mumbai",
      location: "location",
      bathroom: 4,
      carPark: "yes",
      rooms: 2,
      sq_feet: 1500,
      energy_class: "A+",
      date: "1 year back"
  },
  {
      id: 1,
      img: "https://img.jamesedition.com/listing_images/2022/07/28/14/48/06/027b7764-6d0c-413d-a7b3-fa56b338810e/je/1000x620xc.jpg",
      type: "villa",
      nameApartment: "Villa For Rent In Mumbai",
      location: "location",
      bathroom: 4,
      carPark: "yes",
      rooms: 2,
      sq_feet: 1500,
      energy_class: "A+",
      date: "1 year back"
  },
  {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBUA7AHl0Itfd_cZw4jkr_UFxBsjsgvc19VNl72hBvHBa5ReQcX3wf7wUKdgljF2uJhA&usqp=CAU",
      type: "villa",
      nameApartment: "Villa For Rent In Mumbai",
      location: "location",
      bathroom: 4,
      carPark: "yes",
      rooms: 2,
      sq_feet: 1500,
      energy_class: "A+",
      date: "1 year back"
  },
  {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqzawgT39JkvDB9iTgCM4GmH6XousnHE_9-yEuwKu3WTx-dCDRv2JfXj_9loSMp9-UtI&usqp=CAU",
      type: "villa",
      nameApartment: "Villa For Rent In Mumbai",
      location: "location",
      bathroom: 4,
      carPark: "yes",
      rooms: 2,
      sq_feet: 1500,
      energy_class: "A+",
      date: "1 year back"
  }
]


document.getElementById("menu-bar").addEventListener("click", ()=>{
    document.getElementById("link-for-site").style.display="block";
})
document.getElementById("close-nav").addEventListener("click", ()=>{
    document.getElementById("link-for-site").style.display="none";
})




// Toggle the dropdown
let selectOptions = document.getElementById("select-options");
document.querySelector('.custom-select').addEventListener('click', () => {
  selectOptions.classList.toggle("d-none");
});

// Select an option
document.querySelectorAll('.select-option').forEach((e) => {
  e.addEventListener('click', () => {
    var value = e.textContent;
    console.log(value);
    document.querySelector(".select-styled").innerHTML = value;
    document.getElementById("what_you_looking_for_input").value=value;
    console.log(selectOptions);
  });
  selectOptions.classList.add("d-none");
});




// for search bar
const search_url = window.location.href;
const firstSearch = search_url.substring(search_url.indexOf('?first_search=') + 14, search_url.indexOf('&second_search='));
const secondSearch = search_url.substring(search_url.indexOf('?second_search=') + 86);

if(!firstSearch && !secondSearch){
 
}else{
  const filteredCards = card_property.filter((card) => {
    return card.location === `${secondSearch}` && card.type === `${firstSearch}`;
  });
  filteredCards.forEach((carding) => {
    

    const col_for_display_card = document.createElement("div");
    col_for_display_card.classList.add("py-3");
    col_for_display_card.classList.add("col-lg-6");
    col_for_display_card.classList.add("col-md-12");
    col_for_display_card.classList.add("col-11");
    col_for_display_card.classList.add("m-auto");
    col_for_display_card.classList.add("m-md-0");
    col_for_display_card.classList.add("my-2");

    const card = document.createElement('div');
    card.classList.add("card");

    const container = document.createElement('div');
    container.classList.add("container");

    const img_display = document.createElement('div');
    img_display.classList.add("img-display");

    const img = document.createElement('img');
    img.src = carding.img;

    img_display.appendChild(img);
    container.appendChild(img_display);

    const details = document.createElement('div');
    details.classList.add('card-body');
    details.classList.add('p-3');
    details.innerHTML = `
      <p class="first-detail m-0"><i class="fa-solid fa-tags"></i> ${carding.type}</p>
      <p class="second-details m-0 mt-3">${carding.nameApartment}</p>
      <p class="third-details m-0"><i class="fa-solid fa-location-dot"></i> ${carding.location}</p>
      <div class="discription-properties mt-3">
          <div class="property">
              <i class="fa-solid fa-toilet m-0"></i>
              <p class="m-0 mx-1">Bathroom: ${carding.bathroom}</p>
          </div>
          <div class="property">
              <i class="fa-solid fa-car"></i>
              <p class="m-0 mx-1">car park: ${carding.carPark}</p>
          </div>
          <div class="property">
              <i class="fa-solid fa-person-booth"></i>
              <p class="m-0 mx-1">Rooms: ${carding.rooms}</p>
          </div>
          <div class="property">
              <i class="fa-solid fa-chart-area"></i>
              <p class="m-0 mx-1">SQ Feet: ${carding.sq_feet}</p>
          </div>
          <div class="property">
              <i class="fa-solid fa-bolt"></i>
              <p class="m-0 mx-1">Energy Class: ${carding.energy_class}</p>
          </div>
      </div>
    `;

    container.appendChild(details);
    card.appendChild(container);

    const footer = document.createElement('div');
    footer.classList.add('card-footer');
    footer.classList.add('bg-transparent');
    footer.classList.add('border-success');
    footer.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div class="person-update m-0">
          <i class="fa-solid fa-user m-0"></i>
          <p class="mx-2 m-0">Shivam Property</p>
        </div>
        <div class="date-update m-0">
          <i class="fa-solid fa-calendar-days"></i>
          <p class="mx-2 m-0">1 year ago</p>
        </div>
      </div>
    `;
    card.appendChild(footer);

    col_for_display_card.appendChild(card);
    

    document.getElementById("main-display").appendChild(col_for_display_card);
  });
 
  
  // document.getElementById("main-display").appendChild(searchcardsList);
}