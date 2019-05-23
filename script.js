var images=["https://cdn.makeawebsitehub.com/wp-content/uploads/2016/02/learn-code-e1455713167295.jpg","","",""];

function render() {
    $(".blank").html("");
    images.forEach(function(image){
    $(".blank").append("<img src="+image+">");    
    console.log(images);
    });
}

$(".plus").click(function() {
    $(".submission").show();
    $(".blank, p, .plus").hide();
});

$(".Import").click(function() {
    var name1 = $(".name").val();
    var link1 = $(".link").val();
    var describe1 = $(".describe").val();
    images.push(link1);
    render();
    $(".submission").hide();
    $(".blank, p, .plus").show();
    $("#span1").text(name1);
    $("#span2").text(describe1);
});

render();






