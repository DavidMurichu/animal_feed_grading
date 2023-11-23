$(document).ready(function(){

    $(".Diasporah-Reg-Btn").click(function(){
        var Name = $("#D-Name").val()
        var Email = $("#D-Email").val()

        var Residence = $("#D-Residence").val()
        var Reason = $("#D-Reason").val()
        var Ward = $("#Ward").val()
        var Location = $("#Location").val()
        var Sub_Location = $("#Sub-Location").val()
        
        var Contact = $("#D-Contact").val()
        var Country_Code = $("#countryCode").val()
        var Complete_Tel = Country_Code + Contact
        var Contact = Complete_Tel;


        if(Name === "" || Contact === "" || Residence === "" || Reason === "" || Ward === null || Location === null || Sub_Location === null){
            $('.alert-danger').show(500)
            $('.errort').html('All fields are required before submitting the data!..')
            setTimeout(function(){
                $('.alert-danger').hide(500) 
            },4000) 
        }else{

            if(Email != ""){
                var Email_Regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                if (!Email_Regex.test(Email)) {
                   $('.alert-danger').show(500)
                   $('.errort').html('Please enter a valid Email address')
                   setTimeout(function(){
                       $('.alert-danger').hide(500) 
                   },4000) 
                   $(this).val('');
                   $(this).focus();
               }else{
                $(".Diasporah-Reg-Btn").addClass("d-none")
                $(".btn-spin1").removeClass("d-none")
                $.ajax({
                    url:'./Engine/Diaspora-Registration.php',
                    method:'POST',
                    dataType:'json',
                    encode: true,
                    data:{
                        Name:Name,
                        Email:Email,
                        Contact:Contact,
                        Residence:Residence,
                        Reason:Reason,
                        Ward:Ward,
                        Location:Location,
                        Sub_Location:Sub_Location   
                    },
                    success:function(data){
                        if(data.status == 400) {
                            $('.alert-danger').show(500)
                            $('.errort').html(data.msg)
                            setTimeout(function(){
                                $('.alert-danger').hide(500) 
                            },4000) 
                            $(".Diasporah-Reg-Btn").removeClass("d-none")
                            $(".btn-spin1").addClass("d-none")
                            
                        } else if(data.status == 200){   
                            $("#Contact-Us-Form")[0].reset()                 
                            $('.alert-success').show(500)
                            $('.head-success').html('Success!..')
                            $('.success').html(data.msg)
                            setTimeout(function(){
                                $('.alert-danger').hide(500) 
                            },8000) 
        
                            $(".Diasporah-Reg-Btn").removeClass("d-none")
                            $(".btn-spin1").addClass("d-none")
                        }
                    }
                })
               }
            }else{
                $(".Diasporah-Reg-Btn").addClass("d-none")
                $(".btn-spin1").removeClass("d-none")
                $.ajax({
                    url:'./Engine/Diaspora-Registration.php',
                    method:'POST',
                    dataType:'json',
                    encode: true,
                    data:{
                        Name:Name,
                        Email:Email,
                        Contact:Contact,
                        Residence:Residence,
                        Reason:Reason,
                        Ward:Ward,
                        Location:Location,
                        Sub_Location:Sub_Location   
                    },
                    success:function(data){
                        if(data.status == 400) {
                            $('.alert-danger').show(500)
                            $('.errort').html(data.msg)
                            setTimeout(function(){
                                $('.alert-danger').hide(500) 
                            },4000) 
                            $(".Diasporah-Reg-Btn").removeClass("d-none")
                            $(".btn-spin1").addClass("d-none")
                            
                        } else if(data.status == 200){   
                            $("#Contact-Us-Form")[0].reset()                 
                            $('.alert-success').show(500)
                            $('.head-success').html('Success!..')
                            $('.success').html(data.msg)
                            setTimeout(function(){
                                $('.alert-danger').hide(500) 
                            },8000) 
        
                            $(".Diasporah-Reg-Btn").removeClass("d-none")
                            $(".btn-spin1").addClass("d-none")
                        }
                    }
                })
            }





        }
        
    })
})