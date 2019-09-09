function alertWhy() {
    alert("We focus on making meals with the best and freshest ingredients, like humanely-raised beef that is ground fresh each day, organic chicken, and Rockey Family Dairy’s organic cream for our ice cream cones, sundaes and shakes. Our commitment to freshness and quality means higher prices than you’d find at traditional fast-food burger chains. It also means food that tastes way better — because, well, it is.");
}

document.getElementById("whyBtn").addEventListener("click", alertWhy);

function alertWhere() {
    alert("We source our humanely-raised, vegetarian-fed beef from local, family-owned ranches. We use an 85% to 15% protein to fat blend, a mixture of the lean protein and the marbling found on in a cut of steak for our ground beef. The mixture is ground daily, and thus, our burgers taste so amazing.");
}

document.getElementById("whereBtn").addEventListener("click", alertWhere);

function showJoin() {
    document.getElementById("joinForm").style.display = "flex";
    document.getElementById("joinBtnPad").style.display = "none";
}

document.getElementById("JoinBtn").addEventListener("click", showJoin);


function gMapChange() {
    var x = document.getElementById("gMap").src
    //if hover over location card show card location
}

function oremMap() {
    if (document.getElementById("oremLocCard").click) {
        document.getElementById("gMap").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48689.932803826705!2d-111.73048200684542!3d40.29527667099616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d7804e4b45119%3A0x642bc3cf90b21ed1!2sOrem%2C%20UT!5e0!3m2!1sen!2sus!4v1568046327575!5m2!1sen!2sus"
    }
}

function provoMap() {
    if (document.getElementById("provoLocCard").click) {
        document.getElementById("gMap").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97434.55345559241!2d-111.70894838454362!3d40.2573137880501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9271930bf1bf%3A0x1d90f12600b556ef!2sProvo%2C%20UT!5e0!3m2!1sen!2sus!4v1568046256166!5m2!1sen!2sus"
    }
}