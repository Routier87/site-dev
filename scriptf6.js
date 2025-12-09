window.addEventListener("message", (event) => {
    if(event.data.action==="open"){ document.getElementById("tablet").style.display="flex"; }
    if(event.data.action==="close"){ document.getElementById("tablet").style.display="none"; }
});

function closeTablet(){
    fetch(`https://${GetParentResourceName()}/close`, {method:"POST"});
}

// Onglets
function openTab(tabId){
    let tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(t=>t.style.display="none");
    document.getElementById(tabId).style.display="block";

    let buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(b=>b.classList.remove("active"));
    document.querySelector(`.tab-btn[onclick="openTab('${tabId}')"]`).classList.add("active");
}

// Initialisation onglet par défaut
openTab("police");
