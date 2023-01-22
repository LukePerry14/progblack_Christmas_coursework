
function loadjson(subsec){
  fetch('./ToDos.json')
      .then(res =>{
          return res.json();
      })
      .then(data => {
          document.getElementById('list').innerHTML = "";
          var sec = data[subsec]
          var sub = Object.keys(sec)

          sub.forEach(item => {
              var n_item = '<li id = ' + item + '>' + item + '</li>';
              document.getElementById('list').insertAdjacentHTML('beforeend', n_item);
          });
      })
      .catch(error => console.log(error));
}
app.listen(8090)