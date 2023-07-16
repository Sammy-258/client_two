const cards = [
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

const pagination = {
    current_page: 1,
    total_pages: Math.ceil(cards.length / 4),
    cards_per_page : 4
}

const generatePaginationLinks = (pagination, cards) => {
    const links = [];
    for (let i = 1; i <= pagination.total_pages; i++) {
      const link = document.createElement("a");
      link.href = `?page=${i}`;
      link.textContent = i;
      link.classList.add("pag-link")
      links.push(link);
    }
    return links;
};

const paginationLinks = generatePaginationLinks(pagination, cards);
const paginationNodeList = document.createDocumentFragment();
paginationNodeList.append(...paginationLinks);
document.getElementById("pagination-house").appendChild(paginationNodeList);

paginationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      pagination.current_page = parseInt(link.textContent);
      paginationLinks = generatePaginationLinks(pagination);
      document.getElementById("pagination").innerHTML = paginationLinks;
    });
});



const displayCards = (cards) => {
    const page = window.location.href;
    const pageNum = page.split('?')[1]?.split('=')[1];
    let page_url = pageNum ? parseInt(pageNum) : 1;
    const links = [];
  
    // Calculate the starting and ending indices for the displayed cards
    const startIndex = (page_url - 1) * 4;
    const endIndex = startIndex + 4;
  


for (let i = startIndex; i < endIndex; i++) {
    if (i < cards.length) {
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
      img.src = cards[i].img;
  
      img_display.appendChild(img);
      container.appendChild(img_display);
  
      const details = document.createElement('div');
      details.classList.add('card-body');
      details.classList.add('p-3');
      details.innerHTML = `
        <p class="first-detail m-0"><i class="fa-solid fa-tags"></i> ${cards[i].type}</p>
        <p class="second-details m-0 mt-3">${cards[i].nameApartment}</p>
        <p class="third-details m-0"><i class="fa-solid fa-location-dot"></i> ${cards[i].location}</p>
        <div class="discription-properties mt-3">
            <div class="property">
                <i class="fa-solid fa-toilet m-0"></i>
                <p class="m-0 mx-1">Bathroom: ${cards[i].bathroom}</p>
            </div>
            <div class="property">
                <i class="fa-solid fa-car"></i>
                <p class="m-0 mx-1">car park: ${cards[i].carPark}</p>
            </div>
            <div class="property">
                <i class="fa-solid fa-person-booth"></i>
                <p class="m-0 mx-1">Rooms: ${cards[i].rooms}</p>
            </div>
            <div class="property">
                <i class="fa-solid fa-chart-area"></i>
                <p class="m-0 mx-1">SQ Feet: ${cards[i].sq_feet}</p>
            </div>
            <div class="property">
                <i class="fa-solid fa-bolt"></i>
                <p class="m-0 mx-1">Energy Class: ${cards[i].energy_class}</p>
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
      links.push(col_for_display_card);
    }
  }
  
  return links;
};


const displaycard = displayCards(cards);
const displaycardsList = document.createDocumentFragment();

displaycard.forEach((card) => {
  displaycardsList.appendChild(card);
});

document.getElementById("main-display").appendChild(displaycardsList);




// const main_display = document.getElementById("main-display");
// console.log(main_display.children.length);
// let childrenNumber = main_display.children.length;
// let PaginationNumber = Math.ceil(childrenNumber/4);
// console.log(Math.ceil(PaginationNumber))





const pagination_house = document.getElementById("pagination-house");

const page = window.location.href;
const pageNum = page.split('?')[1]?.split('=')[1];

if (pageNum) {
  const anchor = document.querySelector(`a[href="?page=${pageNum}"]`);
  const allAnchors = pagination_house.querySelectorAll('a');

  allAnchors.forEach((e) => {
    e.classList.remove("active");
  });

  anchor.classList.add("active");
}





