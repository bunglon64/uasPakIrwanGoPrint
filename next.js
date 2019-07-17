// function kertas1(kertas) {
// 	var kertas1 = kertas * 500;
// 	return kertas1;
// }

// var kertas = document.querySelector('input').value;
// console.log("input");
// console.log(kertas);
// var click = document.querySelector('button');
// var hasil = click.addEventListener("dblclick", kertas1);
// console.log(hasil);

// if(click = true) {
// 	alert("berhasil");
// }



var click = document.querySelector( "button" );
click.addEventListener( "click", function() {
    // Ambil semua input
    var inputs = document.querySelectorAll( "input" );
 
    // Nilai pada input Rp 500
    var jumlah500 = parseInt(inputs[0].value) ? parseInt(inputs[0].value) : 0,
    total500 = jumlah500 * 500;

    // Nilai pada input Rp 500
    var jumlah500n = parseInt(inputs[1].value) ? parseInt(inputs[1].value) : 0,
    total500n = jumlah500n * 500;
 
    // Nilai pada input Rp 1000
    var jumlah1000 = parseInt(inputs[2].value) ? parseInt(inputs[2].value) : 0,
    total1000 = jumlah1000 * 1000;
 
    // Nilai pada input Rp 1500
    var jumlah1500 = parseInt(inputs[3].value) ? parseInt(inputs[3].value) : 0,
    total1500 = jumlah1500 * 1500;
 
    // Nilai pada input Rp 2000
    var jumlah2000 = parseInt(inputs[4].value) ? parseInt(inputs[4].value) : 0,
    total2000 = jumlah2000 * 2000;
 
    var jumlahKertas = jumlah500 + jumlah500n + jumlah1000 + jumlah1500 + jumlah2000,
    totalHarga = total500 + total500n + total1000 + total1500 + total2000;
 
    console.log( "Jumlah kertas: " + jumlahKertas );
    console.log( "Total Harga: " + totalHarga );

    var span = document.querySelectorAll('span');
  
    span[0].innerHTML = jumlahKertas;
    
    span[1].innerHTML = totalHarga;
} );
