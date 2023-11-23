
$(".btn-Subscribe-Footer").click(function () {
    formData = new FormData(document.getElementById("Subscribe-Form"));
    var Subscribe_Email = $("#Subscribe-Email").val()

    if (Subscribe_Email === "" ) {
        $('.alert-danger').removeClass('d-none')
        $('.alert-danger').show(500)
        $('.errort').html('You have not input your Email Address.')
        setTimeout(function () {
            $('.alert-danger').hide(500)
        }, 15000)
    } else {

        $(".btn-Subscribe-Footer").addClass("d-none")
        $(".btn-spin5").removeClass("d-none")

        $.ajax({
            url: '../Subscribe/Subscribe.php',
            type: 'POST',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            dataType: 'json',
            success: function (data) {
                if (data.status == 400) {
                    $('.alert-danger').show(500)
                    $('.errort').html(data.msg)
                    setTimeout(function () {
                        $('.alert-danger').hide(500)
                    }, 15000)
                    $(".btn-Subscribe-Footer").removeClass("d-none")
                    $(".btn-spin5").addClass("d-none")
                } else if (data.status == 200) {
                    $("#Subscribe-Form")[0].reset()
                    var Message = "1You have successfully registered your Email <br>In our System. You will always be the first <br>to receive Tetu News, Memoranda and other Notices.";
                    window.location.href = "../Subscribe/Success/Message.php?Message=" + Message + "";


                }
            }
        })
    }

})


$(".btn-Subscribe-Index").click(function () {
    formData = new FormData(document.getElementById("Subscribe-Form"));
    var Subscribe_Email = $("#Subscribe-Email").val()

    if (Subscribe_Email === "" ) {
        $('.alert-danger').removeClass('d-none')
        $('.alert-danger').show(500)
        $('.errort').html('You have not input your Email Address.')
        setTimeout(function () {
            $('.alert-danger').hide(500)
        }, 15000)
    } else {

        $(".btn-Subscribe-Index").addClass("d-none")
        $(".btn-spin5").removeClass("d-none")

        $.ajax({
            url: './User-Interface/Subscribe/Subscribe.php',
            type: 'POST',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            dataType: 'json',
            success: function (data) {
                if (data.status == 400) {
                    $('.alert-danger').show(500)
                    $('.errort').html(data.msg)
                    setTimeout(function () {
                        $('.alert-danger').hide(500)
                    }, 15000)
                    $(".btn-Subscribe-Index").removeClass("d-none")
                    $(".btn-spin5").addClass("d-none")
                } else if (data.status == 200) {
                    $("#Subscribe-Form")[0].reset()
                    var Message = "1You have successfully registered your Email <br>In our System. You will always be the first <br>to receive Tetu News, Memoranda and other Notices.";
                    window.location.href = "./User-Interface/Subscribe/Success/Message?Message=" + Message + "";


                }
            }
        })
    }


})

$(".btn-Subscribe-about").click(function () {
    formData = new FormData(document.getElementById("Subscribe-Form"));
    var Subscribe_Email = $("#Subscribe-Email").val()

    if (Subscribe_Email === "" ) {
        $('.alert-danger').removeClass('d-none')
        $('.alert-danger').show(500)
        $('.errort').html('You have not input your Email Address.')
        setTimeout(function () {
            $('.alert-danger').hide(500)
        }, 15000)
    } else {

        $(".btn-Subscribe-about").addClass("d-none")
        $(".btn-spin5").removeClass("d-none")

        $.ajax({
            url: 'Subscribe/Subscribe.php',
            type: 'POST',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            dataType: 'json',
            success: function (data) {
                if (data.status == 400) {
                    $('.alert-danger').show(500)
                    $('.errort').html(data.msg)
                    setTimeout(function () {
                        $('.alert-danger').hide(500)
                    }, 15000)
                    $(".btn-Subscribe-about").removeClass("d-none")
                    $(".btn-spin5").addClass("d-none")
                } else if (data.status == 200) {
                    $("#Subscribe-Form")[0].reset()
                    var Message = "1You have successfully registered your Email <br>In our System. You will always be the first <br>to receive Tetu News, Memoranda and other Notices.";
                    window.location.href = "Subscribe/Success/Message.php?Message=" + Message + "";


                }
            }
        })
    }


})