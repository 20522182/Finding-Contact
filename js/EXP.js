{/* <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-nYklUorHjNljDNAkeR3p3jiw8GnGHEwvw&usqp=CAU">
                <div class="detail">
                    <h2>hallo</h2>
                    <p>Im the only one</p>
                </div>
//  </div> */}
//  container list
 const list = document.getElementById('list');
 const search = document.getElementById('search');
 const listItems = [];

 
 getDataFromPublicAPI();

 async function getDataFromPublicAPI() {
    const responseAPI = await fetch('https://randomuser.me/api?results=50');
    // đợi API xong mới tiếp
    const {results} = await responseAPI.json();
    // khai báo list cần hiện, càn ẩn
   
    // làm cho hiện ra theo search
    list.innerHTML = 'loading...';
    setTimeout(() => {
        list.innerHTML = '';
        results.forEach(result => {
            const divItem = document.createElement('div');
            // muốn ẩn hiện r truy xuất
            listItems.push(divItem);
            divItem.innerHTML = `
            <img src="${result.picture.thumbnail}"
            alt="${result.email}"
            />
            <div class="detail">
                <h2>${result.name.title}. ${result.name.first}. ${result.name.last}</h2>
                <p>${result.email}</p>
            </div>
            `;
            list.appendChild(divItem);
    },2000);
    
    });
 }
// lọc
function filterInput(keySearch){
    const searchTerm = keySearch.toLowerCase();
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm)){
            item.classList.remove('hidden');
        }
        else{
            item.classList.add('hidden');
        }
    })
    console.log('keySearch :>> ',keySearch);
 }