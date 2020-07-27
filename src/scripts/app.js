
/*
1. Ambil semua anchor yang memiliki atribut href = "#"
2. Loop pada anchor-anchor tersebut
    a. Tambahkan eventListener ketika user mentrigger event click
    b. Setiap kali click event ter trigger, jalankan function berargumen event:
            a. Hilangkan default action pada event menggunakan method preventDefault()
            b. document.querySelector(this.getAttribute('href')) mengembalikan element HTML pertama 
                yang sesuai dengan nama yang sama pada atribut href pada anchor
            c. Lakukan method scrollIntoView yang memiliki behavior smooth
*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
