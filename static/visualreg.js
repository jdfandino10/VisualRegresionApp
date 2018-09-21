console.log('hola');
// TODO: call /runtest and reload page when done

$('#generar').on('click', () => {
  $.get('runtest', (data) => {
    console.log(data);
    getData();
  });
});


function getData() {
  $.get('tests', (data) => {
    console.log(data);
    let str = '<tr>';
    for (let i in data) {
      let dt = data[i];
      let d = new Date(dt.date).toGMTString();
      let img1 = '<img src="' + dt.image1 + '">';
      let img2 = '<img src="' + dt.image2 + '">';
      let img3 = '<img src="' + dt.resultImage + '">';
      let desc = '<p>' + dt.info + '</p>';
      let parts = [d, img1, img2, img3, desc];
      let s = '<tr>';
      parts.forEach((elem) => {
        s += '<td>' + elem + '</td>';
      });
      str += s + '</tr>';
    }
    str += '</tr>';
    $('#resultados').html(str);
  });
}

getData();
