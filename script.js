
/* ============================
   اطلاعات اولیه منو - JSON
============================ */
const ADMIN_PASSWORD = "1234";

const defaultData = {
    restaurantName: "ROODAN IAU RESTURANT",
    specialText: "پیشنهاد ویژه امروز",
    categories: [
        {
            title: "کباب‌ها",
            items: [
                {
                    name: "چلو کباب کوبیده",
                    price: "۳۵۰,۰۰۰",
                    desc: "دو سیخ کوبیده مخصوص با برنج ایرانی و گوجه کبابی",
                    image: "https://parspng.com/wp-content/uploads/2022/08/kebabpng.parspng.com_.png?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "چلو کباب سلطانی",
                    price: "۵۲۰,۰۰۰",
                    desc: "ترکیب برگ و کوبیده همراه با برنج زعفرانی",
                    image: "https://mazzeh.ca/wp-content/uploads/2024/06/Sultani-Kebab-min.jpg?auto=format&fit=crop&w=400&q=80"
                },
				{
                    name: "چلو کباب سلطانی",
                    price: "۵۲۰,۰۰۰",
                    desc: "ترکیب برگ و کوبیده همراه با برنج زعفرانی",
                    image: "https://mazzeh.ca/wp-content/uploads/2024/06/Sultani-Kebab-min.jpg?auto=format&fit=crop&w=400&q=80"
                },
				{
                    name: "چلو کباب سلطانی",
                    price: "۵۲۰,۰۰۰",
                    desc: "ترکیب برگ و کوبیده همراه با برنج زعفرانی",
                    image: "https://mazzeh.ca/wp-content/uploads/2024/06/Sultani-Kebab-min.jpg?auto=format&fit=crop&w=400&q=80"
                },
				{
                    name: "چلو کباب سلطانی",
                    price: "۵۲۰,۰۰۰",
                    desc: "ترکیب برگ و کوبیده همراه با برنج زعفرانی",
                    image: "https://mazzeh.ca/wp-content/uploads/2024/06/Sultani-Kebab-min.jpg?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "جوجه کباب زعفرانی",
                    price: "۳۱۰,۰۰۰",
                    desc: "جوجه مرینیت‌شده با زعفران و کره محلی",
                    image: "https://mazzeh.ca/wp-content/uploads/2024/06/Sultani-Kebab-min.jpg?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "کباب برگ مخصوص",
                    price: "۴۸۰,۰۰۰",
                    desc: "راسته گوسفندی مزه‌دار شده با ادویه مخصوص",
                    image: "https://mazzeh.ca/wp-content/uploads/2024/06/Sultani-Kebab-min.jpg?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            title: "غذاهای ایرانی",
            items: [
                {
                    name: "زرشک‌پلو با مرغ",
                    price: "۲۶۰,۰۰۰",
                    desc: "مرغ مجلسی با سس مخصوص و زرشک تازه",
                    image: "https://mamifood.org/images/files/00000/1/10/26.jpg?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "قرمه سبزی",
                    price: "۲۴۰,۰۰۰",
                    desc: "خورشت اصیل ایرانی با سبزی تازه و گوشت گوسفندی",
                    image: "https://mamifood.org/images/files/00000/1/10/26.jpg?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "قیمه سیب‌زمینی",
                    price: "۲۲۰,۰۰۰",
                    desc: "خورشت قیمه با خلال سیب‌زمینی و برنج ایرانی",
                    image: "https://mamifood.org/images/files/00000/1/10/26.jpg?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "ته‌چین مرغ",
                    price: "۲۸۰,۰۰۰",
                    desc: "ته‌چین زعفرانی با مرغ ریش‌ریش و ماست چکیده",
                    image: "https://mamifood.org/images/files/00000/1/10/26.jpg?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            title: "پیش‌غذا و سالاد",
            items: [
                {
                    name: "سوپ قارچ",
                    price: "۹۰,۰۰۰",
                    desc: "سوپ خامه‌ای قارچ با سبزیجات تازه",
                    image: "https://chibepazam.ir/wp-content/uploads/2024/08/-----------_1.jpg?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "سالاد سزار",
                    price: "۱۸۰,۰۰۰",
                    desc: "کاهو، مرغ گریل، پنیر پارمسان و سس سزار",
                    image: "https://navabebrahimi.com/wp-content/uploads/2024/09/rice-and-milk-soup-1.jpg?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "سیب‌زمینی ویژه",
                    price: "۱۴۰,۰۰۰",
                    desc: "سیب‌زمینی سرخ‌شده با پنیر و سس مخصوص",
                    image: "https://vigiha.ir/wp-content/uploads/2021/01/2-15.jpg?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "ماست موسیر",
                    price: "۶۰,۰۰۰",
                    desc: "ماست چکیده همراه با موسیر تازه",
                    image: "https://vigiha.ir/wp-content/uploads/2021/01/2-15.jpg?auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            title: "نوشیدنی‌ها",
            items: [
                {
                    name: "دوغ محلی",
                    price: "۴۵,۰۰۰",
                    desc: "دوغ سنتی خنک با نعنا",
                    image: "https://kallehpro.com/wp-content/uploads/2025/09/%D9%BE%D8%B1%D9%88-%D8%AF%D9%88%D8%BA-%D8%B3%D8%A7%D8%AF%D9%87-%DA%A9%D8%A7%D9%84%D9%87-%D9%BE%D8%B1%D9%88.png?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "موهیتو",
                    price: "۹۵,۰۰۰",
                    desc: "لیموی تازه، نعنا، یخ و سودا",
                    image: "https://arseschef.com/wp-content/uploads/2025/07/iced_mocha-1.webp?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "نوشابه",
                    price: "۳۵,۰۰۰",
                    desc: "نوشابه قوطی سرد",
                    image: "https://anbarnaft.com/uploads/5fa63f58aebd4e8cadc0a97852fa2231.w_748,h_90,r_k.jpg?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "آب معدنی",
                    price: "۱۵,۰۰۰",
                    desc: "آب معدنی کوچک",
                    image: "https://anbarnaft.com/uploads/5fa63f58aebd4e8cadc0a97852fa2231.w_748,h_90,r_k.jpg?auto=format&fit=crop&w=400&q=80"
                }
            ]
        }
    ]
};

let menuData = loadData();

let currentSlide = 0;
let slideTimer = null;

/* ============================
   بارگذاری و ذخیره اطلاعات
============================ */

function loadData(){
    const saved = localStorage.getItem("restaurantMenuData");

    if(saved){
        try{
            return JSON.parse(saved);
        }catch(e){
            return structuredClone(defaultData);
        }
    }

    return structuredClone(defaultData);
}

function saveData(){
    localStorage.setItem("restaurantMenuData", JSON.stringify(menuData));
}

/* ============================
   رندر منوی اصلی
============================ */
let secretClicks = 0;
let clickTimer = null;

document.getElementById("restaurantName").addEventListener("click", () => {

    secretClicks++;

    clearTimeout(clickTimer);

    clickTimer = setTimeout(()=>{
        secretClicks = 0;
    },1500);

    if(secretClicks >= 5){
        secretClicks = 0;
        openAdmin();
    }

});


function renderMenu(){
    document.getElementById("restaurantName").textContent = menuData.restaurantName;
    document.getElementById("specialBox").textContent = menuData.specialText;

    const slider = document.getElementById("slider");
    slider.innerHTML = "";

    const itemsPerSlide = 4; // تعداد آیتم در هر اسلاید

    menuData.categories.forEach((category) => {
        const items = category.items || [];

        for(let i = 0; i < items.length; i += itemsPerSlide){
            const chunk = items.slice(i, i + itemsPerSlide);

            const slide = document.createElement("div");

            if(slider.children.length === 0){
                slide.className = "slide active";
            }else{
                slide.className = "slide";
            }

            const pageCount = Math.ceil(items.length / itemsPerSlide);
            const pageNumber = Math.floor(i / itemsPerSlide) + 1;
            const pageLabel = pageCount > 1 ? ` (${pageNumber}/${pageCount})` : "";

            slide.innerHTML = `
                <div class="category-title">${escapeHtml(category.title)}${pageLabel}</div>
                <div class="menu-grid">
                    ${chunk.map(item => `
                        <div class="menu-item">
                            <img class="food-img"
                                 src="${escapeAttr(item.image)}"
                                 onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'">
                            <div>
                                <div class="item-title">${escapeHtml(item.name)}</div>
                                <div class="item-desc">${escapeHtml(item.desc)}</div>
                            </div>
                            <div class="price">${escapeHtml(item.price)}</div>
                        </div>
                    `).join("")}
                </div>
            `;

            slider.appendChild(slide);
        }
    });

    currentSlide = 0;
    startSlider();
    generateQR();
}


function startSlider(){
    clearInterval(slideTimer);

    const slides = document.querySelectorAll(".slide");

    if(slides.length <= 1) return;

    slideTimer = setInterval(() => {
        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");
    }, 8000);
}

/* ============================
  QR Code
============================ */

function generateQR(){
    const currentUrl = window.location.href;
    const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=" + encodeURIComponent(currentUrl);
    document.getElementById("qrImage").src = qrUrl;
}

/* ============================
   پنل مدیریت
============================ */

function openAdmin(){

    const pass = prompt("رمز مدیریت را وارد کنید");

    if(pass !== ADMIN_PASSWORD){
        alert("رمز اشتباه است");
        return;
    }

    document.getElementById("adminPanel").classList.add("show");
    renderAdmin();
}


function closeAdmin(){
    document.getElementById("adminPanel").classList.remove("show");
}

function renderAdmin(){
    document.getElementById("adminRestaurantName").value = menuData.restaurantName;
    document.getElementById("adminSpecialText").value = menuData.specialText;

    const adminContent = document.getElementById("adminContent");
    adminContent.innerHTML = "";

    menuData.categories.forEach((category, categoryIndex) => {
        const categoryBox = document.createElement("div");
        categoryBox.className = "admin-category";

        categoryBox.innerHTML = `
            <h3>دسته ${categoryIndex + 1}</h3>

            <div style="margin-bottom:15px;">
                <label style="display:block;color:#aaa;margin-bottom:6px;">نام دسته</label>
                <input 
                    data-type="category-title" 
                    data-category="${categoryIndex}" 
                    value="${escapeAttr(category.title)}"
                    style="width:100%;padding:12px;border-radius:8px;border:1px solid #333;background:#050505;color:#fff;font-family:inherit;"
                >
            </div>

            <div id="categoryItems-${categoryIndex}"></div>

            <button class="btn btn-add" onclick="addItem(${categoryIndex})">افزودن آیتم به این دسته</button>
            <button class="btn btn-reset" onclick="removeCategory(${categoryIndex})">حذف این دسته</button>
        `;

        adminContent.appendChild(categoryBox);

        const itemsContainer = categoryBox.querySelector(`#categoryItems-${categoryIndex}`);

        category.items.forEach((item, itemIndex) => {
            const itemBox = document.createElement("div");
            itemBox.className = "admin-item";

            itemBox.innerHTML = `
                <div class="form-grid">
                    <div>
                        <label>نام غذا</label>
                        <input data-type="item-name" data-category="${categoryIndex}" data-item="${itemIndex}" value="${escapeAttr(item.name)}">
                    </div>

                    <div>
                        <label>قیمت</label>
                        <input data-type="item-price" data-category="${categoryIndex}" data-item="${itemIndex}" value="${escapeAttr(item.price)}">
                    </div>

                    <div>
                        <label>لینک تصویر</label>
                        <input data-type="item-image" data-category="${categoryIndex}" data-item="${itemIndex}" value="${escapeAttr(item.image)}">
                    </div>

                    <div>
                        <label>توضیحات</label>
                        <textarea data-type="item-desc" data-category="${categoryIndex}" data-item="${itemIndex}">${escapeHtml(item.desc)}</textarea>
                    </div>
                </div>

                <button class="btn remove-btn" onclick="removeItem(${categoryIndex}, ${itemIndex})">حذف آیتم</button>
            `;

            itemsContainer.appendChild(itemBox);
        });
    });
}

function saveAdmin(){
    menuData.restaurantName = document.getElementById("adminRestaurantName").value;
    menuData.specialText = document.getElementById("adminSpecialText").value;

    document.querySelectorAll("[data-type]").forEach(input => {
        const type = input.dataset.type;
        const categoryIndex = Number(input.dataset.category);
        const itemIndex = Number(input.dataset.item);

        if(type === "category-title"){
            menuData.categories[categoryIndex].title = input.value;
        }

        if(type === "item-name"){
            menuData.categories[categoryIndex].items[itemIndex].name = input.value;
        }

        if(type === "item-price"){
            menuData.categories[categoryIndex].items[itemIndex].price = input.value;
        }

        if(type === "item-desc"){
            menuData.categories[categoryIndex].items[itemIndex].desc = input.value;
        }

        if(type === "item-image"){
            menuData.categories[categoryIndex].items[itemIndex].image = input.value;
        }
    });

    saveData();
    renderMenu();

    alert("تغییرات ذخیره شد.");
}

function addCategory(){
    menuData.categories.push({
        title:"دسته جدید",
        items:[]
    });

    renderAdmin();
}

function removeCategory(categoryIndex){
    if(confirm("این دسته حذف شود؟")){
        menuData.categories.splice(categoryIndex, 1);
        renderAdmin();
    }
}

function addItem(categoryIndex){
    menuData.categories[categoryIndex].items.push({
        name:"آیتم جدید",
        price:"۰",
        desc:"توضیحات آیتم جدید",
        image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
    });

    renderAdmin();
}

function removeItem(categoryIndex, itemIndex){
    if(confirm("این آیتم حذف شود؟")){
        menuData.categories[categoryIndex].items.splice(itemIndex, 1);
        renderAdmin();
    }
}

function resetData(){
    if(confirm("همه تغییرات حذف و منو به حالت اولیه برگردد؟")){
        localStorage.removeItem("restaurantMenuData");
        menuData = structuredClone(defaultData);
        renderAdmin();
        renderMenu();
    }
}

/* ============================
   ابزارهای امنیت متن
============================ */

function escapeHtml(text){
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function escapeAttr(text){
    return escapeHtml(text);
}

/* ============================
   اجرا
============================ */

renderMenu();

/* کلید میانبر برای باز و بسته کردن پنل مدیریت */
document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        closeAdmin();
    }

    if(e.ctrlKey && e.key.toLowerCase() === "q"){
        openAdmin();
    }
});
