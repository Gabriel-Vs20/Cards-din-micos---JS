const estadosBrasil = [
    { titulo: "Acre" },
    { titulo: "Alagoas" },
    { titulo: "Amapá" },
    { titulo: "Amazonas" },
    { titulo: "Bahia" },
    { titulo: "Ceará" },
    { titulo: "Distrito Federal" },
    { titulo: "Espírito Santo" },
    { titulo: "Goiás" },
    { titulo: "Maranhão" },
    { titulo: "Mato Grosso" },
    { titulo: "Mato Grosso do Sul" },
    { titulo: "Minas Gerais" },
    { titulo: "Pará" },
    { titulo: "Paraíba" },
    { titulo: "Paraná" },
    { titulo: "Pernambuco" },
    { titulo: "Piauí" },
    { titulo: "Rio de Janeiro" },
    { titulo: "Rio Grande do Norte" },
    { titulo: "Rio Grande do Sul" },
    { titulo: "Rondônia" },
    { titulo: "Roraima" },
    { titulo: "Santa Catarina" },
    { titulo: "São Paulo" },
    { titulo: "Sergipe" },
    { titulo: "Tocantins" }
];

let select = document.getElementById('select');
for(let index = 0; index < estadosBrasil.length; index++){
    //criar
    let newOption = document.createElement("option");
    //popular
    newOption.innerText = `${estadosBrasil[index].titulo}`;
    //acoplar
    select.appendChild(newOption);
}

