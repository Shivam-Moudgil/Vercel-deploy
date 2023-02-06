let image = [
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

console.log(image);
let i = 0;
let address;
let img = document.createElement("img");
let vox = document.getElementById("al");
let a = document.getElementById("stop");
let slidw = () => {
  address = setInterval(() => {
    if (i == image.length) {
      i = 0;
    }
    vox.innerHTML = null;

    img.src = image[i];
    img.setAttribute("id", "ololo");
    vox.append(img);
    i++;
  }, 2000);
};

function stop(e) {
  if (a.innerText == "Stop") {
    a.innerText = "Play";
    clearInterval(address);
  } else if ((a.innerText = "Play")) {
    a.innerText = "Stop";
    slidw();
  }
}
slidw();

function plusDivs() {
  clearInterval(address);
  if (i == image.length) {
    i = 0;
  }
  img.src = image[i];

  i++;
  console.log(i);
}
function plusDivs2() {
  i--;
  clearInterval(address);
  if (i == -1) {
    i = image.length - 1;
    // console.log(`i ${i}`);
  }
  img.src = image[i];

  console.log(i);
}
