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

function returnTop() {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 120) {
            window.scrollTo(0, pos - 20);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 10);
}

function slcMap() {
    document.getElementById("gMap").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193365.8053794238!2d-112.06056842352622!3d40.77652325568739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1568064364772!5m2!1sen!2sus"
    returnTop();
}

function sandyMap() {
    document.getElementById("gMap").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48489.680035933416!2d-111.8842296048132!3d40.57239926278136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875264f8c14e6e49%3A0x5fe27acb10715499!2sSandy%2C%20UT!5e0!3m2!1sen!2sus!4v1568064417128!5m2!1sen!2sus"
    returnTop();
}

function lehiMap() {
    document.getElementById("gMap").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97209.51389090667!2d-111.93883527990552!3d40.41334081915472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d7fedd81a1b69%3A0xfd6fac81600d61c9!2sLehi%2C%20UT!5e0!3m2!1sen!2sus!4v1568064463396!5m2!1sen!2sus"
    returnTop();
}

function provoMap() {
    document.getElementById("gMap").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97434.55345559241!2d-111.70894838454362!3d40.257313788050105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9271930bf1bf%3A0x1d90f12600b556ef!2sProvo%2C%20UT!5e0!3m2!1sen!2sus!4v1568064501406!5m2!1sen!2sus"
    returnTop();
}