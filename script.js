document.addEventListener("DOMContentLoaded", function() {
    const prev1 = document.getElementById("previmage1");
    const prev2 = document.getElementById("previmage2");

    const input = document.getElementById("pfp");
    const input2 = document.getElementById("adharfile");

    function displayimage() {
        console.log("we are here");

        if (!input.files || !input.files[0]) {
            console.error("No file selected");
            return;
        }

        let reader = new FileReader();
        console.log("line2");
        reader.readAsDataURL(input.files[0]);
        console.log("line3");
        reader.addEventListener("load", () => {
            console.log("line4");
            prev1.innerHTML = `<img src="${reader.result}" alt="" />`;
            console.log("line5");
            console.log("we are here too");
        });
    }

    function displayimage2() {
        console.log("we are here");

        if (!input2.files || !input2.files[0]) {
            console.error("No file selected");
            return;
        }

        let reader = new FileReader();
        console.log("line2");
        reader.readAsDataURL(input2.files[0]);
        console.log("line3");
        reader.addEventListener("load", () => {
            console.log("line4");
            prev2.innerHTML = `<img src="${reader.result}" alt="" />`;
            console.log("line5");
            console.log("we are here too");
        });
    }

    input.addEventListener("change", displayimage);
    input2.addEventListener("change", displayimage2);
});

function genpdf() {
    
    const element = document.getElementById("invoice");
    html2pdf().from(element).save();
}
document.getElementById('form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
    genpdf();
  };
// document.getElementById("button").addEventListener("click", function(event){
//     // event.preventDefault();
//     // genpdf();
//   });
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;