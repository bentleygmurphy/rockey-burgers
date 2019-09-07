document.getElementById("whyBtn").addEventListener("click", alertWhy);

function alertWhy() {
    alert("We focus on making meals with the best and freshest ingredients, like humanely-raised beef that is ground fresh each day, organic chicken, and Rockey Family Dairy’s organic cream for our ice cream cones, sundaes and shakes. Our commitment to freshness and quality means higher prices than you’d find at traditional fast-food burger chains. It also means food that tastes way better — because, well, it is.");
}

document.getElementById("whereBtn").addEventListener("click", alertWhere);

function alertWhere() {
    alert("We source our humanely-raised, vegetarian-fed beef from local, family-owned ranches. We use an 85% to 15% protein to fat blend, a mixture of the lean protein and the marbling found on in a cut of steak for our ground beef. The mixture is ground daily, and thus, our burgers taste so amazing.");
}

document.getElementById("JoinBtn").addEventListener("click", showJoin);

function showJoin() {
    document.getElementById("joinForm").style.display = "flex";
    document.getElementById("joinBtnPad").style.display = "none";
}