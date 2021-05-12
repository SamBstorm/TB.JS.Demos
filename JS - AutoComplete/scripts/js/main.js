let list_exp = [
    {
        "DateDebut":new Date(2020,08,24),
        "DateFin":new Date(2020,09,27),
        "Titre":"Développeur Web",
        "Description" : "Pour une startup dans la technologie de la domotique",
        "Tags" : [
            "Domotique",
            "HTML",
            "Angular"
        ]
    },    
    {
        "DateDebut":new Date(2020,08,24),
        "DateFin":new Date(2020,09,27),
        "Titre":"Développeur Web",
        "Description" : "Pour une startup dans la technologie de la domotique",
        "Tags" : [
            "Domotique",
            "HTML",
            "Angular"
        ]
    },
    {
        "DateDebut":new Date(2020,08,24),
        "DateFin":new Date(2020,09,27),
        "Titre":"Développeur Web",
        "Description" : "Pour une startup dans la technologie de la domotique",
        "Tags" : [
            "Domotique",
            "HTML",
            "Angular"
        ]
    }
];

const getDate = function(date){
    return `${date.getMonth()}/${date.getFullYear()}`;
}

const createDt = function(startDate, endDate, title){
    let dt = document.createElement("dt");
    let span_Date = document.createElement("span");
    span_Date.setAttribute("class","bold");
    if(endDate)
    span_Date.innerText = `${startDate.getMonth()}/${startDate.getFullYear()} - ${endDate.getMonth()}/${endDate.getFullYear()}`;
    else span_Date.innerText = `${startDate.getMonth()}/${startDate.getFullYear()} jusqu'à aujourd'hui`;
    dt.appendChild(span_Date);
    let span_title = document.createElement("span");
    span_title.setAttribute("class","bold italic");
    span_title.innerText = `${title}`.toUpperCase();
    dt.appendChild(span_title);
    return dt;
};

const createDd = function(description, tags)
{
    let dd = document.createElement("dd");
    let dd_description = document.createElement("div");
    let dd_tags = document.createElement("div");
    dd.appendChild(dd_description);
    dd.appendChild(dd_tags);
    dd_description.innerText = description;
    for (const tag of tags) {
        if(dd_tags.innerText){ dd_tags.innerText += `, ${tag}`;}
        else dd_tags.innerText = tag;
    }
    return dd;
};

window.onload=function(){
    const list = document.getElementById("exp_list");
    let dl_Objects = [];
    for (const exp of list_exp) {
        let dt = createDt(exp.DateDebut, exp.DateFin, exp.Titre);
        let dd = createDd(exp.Description, exp.Tags);
        list.appendChild(dt); 
        list.appendChild(dd);
        dl_Objects.push({"dt":dt, "dd":dd}); 
    }
    console.log(dl_Objects);
    createDd(document.formExperience.elements["Description"])
}