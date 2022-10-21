const projectContainer = document.getElementById('projectContainer')
const certificateContainer = document.getElementById('certificateContainer')
const teamContainer  = document.getElementById('teamContainer')

async function getData(data) {
    try {
        const response = await fetch('../data.json')
        const result = await response.json()
        const dataProject = await result.projects
        const dataCertificate = await result.certificates
        const dataTeam = await result.team
        if(data == 'team') {
            return dataTeam
        } else if (data == 'project') {
            return dataProject
        } else if (data == 'certificate') {
            return dataCertificate
        } 

    } catch (e) {
        console.log(e)
    }
}

getData('project').then(res => {
    res.forEach(data => {
        const element = document.createElement('div');
        element.classList.add('col-lg-4', 'col-md-12', 'p-3', 'border-top', 'border-bottom');
        element.innerHTML = `
            <div class="row">
                            <div class="col">
                                <img src="${data.img}" alt="${data.name}" class="img-fluid rounded box-shadow">
                            </div>
                            <div class="col pl-2">
                                <h2 class="h4 gradient-text font-weight-medium">${data.name}</h2>   
                                <small class="tag">${data.tags[0]}</small>
                                <small class="tag">${data.tags[1]}</small>
                                <small class="tag">${data.tags[2]}</small>
                            </div >
                        </div >
                        <p class="text-secondary mt-1 project-description">${data.desc}</p>
                        <div class="row ml-3">
                            <div class="row ">
                                <a href="${data.link[1]}" target="_blank" rel="noopener noreferrer" class="btn btn-gradient"><i
                                        class="fa fa-globe"></i> Demo</a>
                            </div>
                            <div class="row ml-4">
                                <a href="${data.link[0]}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i
                                        class="fab fa-github"></i> Github</a>
                            </div>


                        </div>
            `
        projectContainer.appendChild(element);


    });
})

// getData('certificate').then(res => {
//     res.forEach(data => {
//         const element2 = document.createElement('div');
//         element2.classList.add('col-lg-4', 'col-md-12', 'p-3 flip-container');
//         element2.innerHTML = `
//     <h2 class= "text-center text-secondary h4 gradient-text font-weight-bold" > ${data.ket}.</h2>
// <img src="${data.img}" alt="${data.ket}"
//     class="img-fluid rounded  box-shadow">

//     `
//         certificateContainer.appendChild(element2)

//     })
// })

getData('certificate').then(res => {
    res.forEach(data => {
        const element2 = document.createElement('div');
        element2.classList.add('col-lg-4', 'col-md-12', 'flip-container');
        element2.innerHTML = `
        <div class="flipper">
            <div class="front">
                <h2 class="text-center text-secondary h4 gradient-text font-weight-bold pt-3">${data.ket}</h2>
                <img src="${data.img}" alt="${data.ket}" class="img-fluid rounded  box-shadow">
            </div>
            <div class="back">
            <center><h4 class="pt-3 gradient-text font-weight-bold">${data.ket}</h4></center>
            <center class="pt-5"><small class="tag1">${data.price}</small></center>
            <center class="pt-3"><small class="tag2"><strike>${data.price1}</strike></small></center>
            <a href="#buyContact" style="text-decoration:none !important;"><center class="pt-5"><small class="tag2">BUY</small></center></a>

            </div>
      </div>
    `
        certificateContainer.appendChild(element2)

    })
})


getData('team').then(res => {
    res.forEach(data => {
        const element = document.createElement('div');
        element.classList.add('col-lg-4', 'col-md-12', 'p-3', 'border-top', 'border-bottom');
        element.innerHTML = `
            <div class="row">
                            <div class="col">
                                <img src="${data.img}" alt="${data.name}" class="img-fluid rounded">
                            </div>
                            <div class="col pl-2">
                                <h2 class="h4 gradient-text font-weight-medium"><br>${data.name}</h2>   
                                <small class="tag">${data.tags[0]}</small>
                            </div >
                        </div >
                        <p class="text-secondary mt-1 project-description">${data.desc}</p>
                        <div class="row ml-3">
                            <div class="row ">
                                <a href="${data.link[1]}" target="_blank" rel="noopener noreferrer" class="btn btn-gradient"><i
                                        class="fa fa-user"></i> Profile</a>
                            </div>  


                        </div>
            `
        teamContainer.appendChild(element);


    });
})

$("#flip-container").click(function() {
  $(this).toggleClass("flip-container");
});