$(document).ready(function(){

    $(".Diaspora-Reg-Btn").click(function(){
        var Name = $("#D-Name").val()
        var Email = $("#D-Email").val()
        var Contact = $("#D-Contact").val()
        var Residence = $("#D-Residence").val()
        var Reason = $("#D-Reason").val()


        if(Name === "" || Email === "" || Contact === "" || Residence === "" || Reason === ""){
            $('.alert-danger').show(500)
            $('.errort').html('All fields are required before submitting the data!..')
            setTimeout(function(){
                $('.alert-danger').hide(500) 
            },4000) 
        }else{
            $(".Diaspora-Reg-Btn").addClass("d-none")
            $(".btn-spin1").removeClass("d-none")
            $.ajax({
                url:'../Includes/Contact-Us.php',
                method:'POST',
                dataType:'json',
                encode: true,
                data:{
                    Name:Name,
                    Email:Email,
                    Contact:Contact,
                    Residence:Residence,
                    Reason:Reason         
                },
                success:function(data){
                    if(data.status == 400) {
                        $('.alert-danger').show(500)
                        $('.errort').html(data.msg)
                        setTimeout(function(){
                            $('.alert-danger').hide(500) 
                        },4000) 
                        $(".Diaspora-Reg-Btn").removeClass("d-none")
                        $(".btn-spin1").addClass("d-none")
                        
                    } else if(data.status == 200){   
                        $("#Contact-Us-Form")[0].reset()                 
                        $('.alert-success').show(500)
                        $('.head-success').html('Success!..')
                        $('.success').html(data.msg)
                        setTimeout(function(){
                            $('.alert-danger').hide(500) 
                        },8000) 
    
                        $(".Diaspora-Reg-Btn").removeClass("d-none")
                        $(".btn-spin1").addClass("d-none")
                    }
                }
            })

        }
        
    })
})