var output = d3.select('#op');
var cir = output.append('circle');
cir.attr('cx', 150).attr('cy', 150).attr('r', 50).attr('stroke', 'black').attr('fill', 'pink').attr('storke-width', '2');



var $cir = $("circle");
$cir.bind('click', function() {
    var x = Math.floor(Math.random() * 200) + 50;
    var y = Math.floor(Math.random() * 200) + 50;
    $cir.attr('cx', x).attr('cy', y);

})

var $ellipse = $("ellipse");
$ellipse.bind('click', function() {
    var x = Math.floor(Math.random() * 200) + 50;
    var y = Math.floor(Math.random() * 200) + 50;
    $ellipse.attr('cx', x).attr('cy', y);

})