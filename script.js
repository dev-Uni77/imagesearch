// alert("hi")

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


//https://api.unsplash.com/search/photos?page=1&query=office&client_id=tkWXZpcCl80mX8IN8bNyY1-P57Q9hIx-A5WjD0kpAo4
let keyword =""
let page =1;
const api_key="tkWXZpcCl80mX8IN8bNyY1-P57Q9hIx-A5WjD0kpAo4"

async function searchImages() {
    keyword =searchBox.value;
    const url=  `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${api_key}&per_page=12`
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (page ===1){
        searchResult.innerHTML ="";
    }

    const results= data.results;

    results.map((result) => {
        const image= document.createElement("img");
        image.src=result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";

    // if (results.length === 0) {
    //     showMoreBtn.style.display = "none"; // 결과가 없으면 버튼 숨기기
    // } else {
    //     showMoreBtn.style.display = "block"; // 결과가 있으면 버튼 보이기
    // }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();

})



