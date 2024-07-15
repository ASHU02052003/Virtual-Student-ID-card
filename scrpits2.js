$(document).ready(function() {
    $("#generate-card").click(function() {
        // Get the input values
        const name = $("#name").val();
        const college = $("#college").val();
        const course = $("#course").val();
        const year = $("#year").val();

        // Get the uploaded photo
        const photo = $("#student-photo")[0].files[0];
        if (photo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                $("#card-photo").attr("src", e.target.result);
            };
            reader.readAsDataURL(photo);
        }

        // Set the values on the ID card
        $("#card-name").text(name);
        $("#card-college").text(college);
        $("#card-course").text(course);
        $("#card-year").text(year);

        // Display the ID card
        $(".id-card").show();
    });
});
