document.addEventListener("DOMContentLoaded", () => {
    // Styling elemen individual berdasarkan ID
    const styleElementsById = [
        { id: "sample", styles: { color: "white", backgroundColor: "black", borderRadius: "10px" } },
        { id: "kodingan_react", styles: { color: "white", backgroundColor: "black" } },
        { id: "function", styles: { color: "blue", backgroundColor: "black" } },
        { id: "namafunction", styles: { color: "yellow", backgroundColor: "black" } },
        { id: "consolelog", styles: { color: "lightblue", backgroundColor: "black" } },
    ];

    styleElementsById.forEach(({ id, styles }) => {
        const element = document.getElementById(id);
        if (element) {
            Object.assign(element.style, styles);
        }
    });

    // Styling elemen dengan class "kutip"
    const kutipElements = document.getElementsByClassName("kutip");
    for (let element of kutipElements) {
        element.style.color = "green";
        element.style.backgroundColor = "black";
    }

    // Styling elemen berdasarkan tag name
    const stylePadding = (elements) => {
        for (let element of elements) {
            element.style.padding = "10px 0 10px 10px"; // Mengatur padding lebih ringkas
        }
    };

    stylePadding(document.getElementsByTagName("p"));
    stylePadding(document.getElementsByTagName("span"));
    stylePadding(document.getElementsByTagName("h1"));
});
