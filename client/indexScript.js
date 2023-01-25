var descs = {};
const rootURL = "http://127.0.0.1:8090/";

function change(subsec){
  let day = subsec.slice(0,-9);
  let newload = day + "Todo";
  document.getElementById('l_title').innerText = newload;
  loadjson(subsec);
}


async function loadjson(subsec){

  const response = await fetch(`/${subsec}`) 
    .then(res =>{
        return res.json();
    })
    .then(data => {
        descs = data;
        document.getElementById('list').innerHTML = "";
        var sub = Object.keys(data);

        sub.forEach(item => {
            var n_item = '<li class = thing id = ' + item + '>' + item + '</li>';
            document.getElementById('list').insertAdjacentHTML('beforeend', n_item);

            document.getElementById(item).addEventListener('click', (e) => {
              if (document.querySelector("#mode").checked == false){
                document.getElementById('desc').innerText = descs[`${item}`];
              }
              else{
                removeitem(`${item}`); 
              }
            })

        });
    })
    .catch(error => console.log(error));  
}


async function addToDo () {    
  document.getElementById('item-entry').addEventListener('submit', async function (event){
  event.preventDefault();
  let subsec = document.getElementById("l_title").innerText;
  let day = subsec.slice(0,-4);
  let newload = day + "TitleTodo";
  let form_title = document.getElementById('inp_title').value;
  let form_desc = $('#inp_desc').val();
  const data = {'inptitle': form_title, 'inpdesc': form_desc};
  const dataJSON = JSON.stringify(data);
  let route = rootURL + day + 'newToDo';
  const response = await fetch(route,
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: dataJSON
  
    })
    .then(loadjson(newload))
    .catch(error => console.log(error))
  });
}


async function removeitem (item) {
  let subsec = document.getElementById("l_title").innerText;
  let day = subsec.slice(0,-4);
  let newload = day + "TitleToDo";
  console.log(newload)
  const data = {'removeditem': item};
  const dataJSON = JSON.stringify(data);
  let route = rootURL + day + 'itemdel';
  const response = await fetch(route,
  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: dataJSON

  })
  .then(loadjson(newload))
  .catch(error => console.log(error))

}

document.addEventListener('DOMContentLoaded', addToDo);
document.addEventListener('DOMContentLoaded', loadjson('TodayTitleToDo'));

