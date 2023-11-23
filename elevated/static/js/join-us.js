$(document).ready(function(){

    $(".Join-Us-Btn").click(function(){
        var Name = $("#Name").val()
        var Email = $("#Email").val()
        // var Tel = $("#Tel").val()
        var Message = $("#Message").val()
        var Event_Id = $("#Event-Id").val()
        
        var Contact = $("#D-Contact").val()
        var Country_Code = $("#countryCode").val()
        var Complete_Tel = Country_Code + Contact
        var Tel = Complete_Tel;
 
        if(Name === "" || Email === "" || Tel === "" || Message === ""){
            $('.alert-danger').show(500)
            $('.errort').html('All fields are required before submitting the data!..')
            setTimeout(function(){
                $('.alert-danger').hide(500) 
            },4000) 
        }else{
            $(".Join-Us-Btn").addClass("d-none")
            $(".btn-spin").removeClass("d-none")
            $.ajax({
                url:'./Engine/Join-Us.php',
                method:'POST',
                dataType:'json',
                encode: true,
                data:{
                    Name:Name,
                    Email:Email,
                    Tel:Tel,
                    Event_Id:Event_Id,
                    Message:Message         
                },
                success:function(data){
                    if(data.status == 400) {
                        $('.alert-danger').show(500)
                        $('.errort').html(data.msg)
                        setTimeout(function(){
                            $('.alert-danger').hide(500) 
                        },4000) 
                        $(".Join-Us-Btn").removeClass("d-none")
                        $(".btn-spin").addClass("d-none")
                        $("#Join-Us-Form")[0].reset()
                    } else if(data.status == 200){   
                        $("#Join-Us-Form")[0].reset()                 
                        $('.alert-success').show(500)
                        $('.head-success').html('Success!..')
                        $('.success').html(data.msg)
                        setTimeout(function(){
                            $('.alert-danger').hide(500) 
                        },8000) 
    
                        $(".Join-Us-Btn").removeClass("d-none")
                        $(".btn-spin").addClass("d-none")
                    }
                }
            })

        }
        
    })
})