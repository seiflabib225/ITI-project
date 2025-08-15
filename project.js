const allImages = [
    { src: "https://www.diabetes.co.uk/wp-content/uploads/2019/01/egypt.jpg", alt: "Pyramids of Giza" },
    { src: "https://tse1.mm.bing.net/th/id/OIP.QfmnFVR538w3wqKmkaxsTwHaFG?rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Nile River in Cairo" },
    { src: "https://th.bing.com/th/id/R.753b96d6481e997320f984be1d806834?rik=TzA9%2bbijp%2fzTFw&pid=ImgRaw&r=0", alt: "Aswan Nile" },
    { src: "https://i.pinimg.com/originals/32/49/87/3249874a1ede1eaba31ba967fea3a92b.png", alt: "Alexandria Corniche" },
    { src: "https://www.mobtada.com/uploads/images/2018/12/580773.jpg", alt: "Cairo Tower" },
    { src: "https://1.bp.blogspot.com/-tySRFtUaUx0/XwJKrkOv6qI/AAAAAAAAAGM/4yI22d01dJYr0yLRj7Fi5dFtHNwM-JIHQCK4BGAsYHg/w1200-h630-p-k-no-nu/egipcios.jpg", alt: "Sphinx Giza" },
    { src: "https://th.bing.com/th/id/R.6f76f544c07360558bd359c58bbd7a15?rik=v6R13iRpIjLlwQ&pid=ImgRaw&r=0", alt: "Philae Temple" },
    { src: "https://tse2.mm.bing.net/th/id/OIP.KTvkX_ytrpI_8GKCnd6LvgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Aswan Dam" },
    { src: "https://tse1.mm.bing.net/th/id/OIP.kRCEhu2zom6-Z53u6adcjQHaEO?rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Mohamed Ali Mosque" },
];

function showRandomImage() {
    const img = document.getElementById("randomImage");
    const randomIndex = Math.floor(Math.random() * allImages.length);
    const selected = allImages[randomIndex];
    img.src = selected.src;
    img.alt = selected.alt;
}
window.onload = showRandomImage;
