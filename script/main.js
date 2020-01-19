// JavaScript Document

$(document).ready(function(e) {


    //上傳檔案
    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label    = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            if( this.files && this.files.length > 1 ){
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            }
            else{
                fileName = e.target.value.split( "\ " ).pop();
            }

            if( fileName ){
                label.querySelector( 'span' ).innerHTML = fileName;
            }
            else{
                label.innerHTML = labelVal;
            }
        });
    });


    //分享表格 顯示/隱藏 控制
    $(".program_group").change(function() {
        var item_num = $(this).children("option:selected").val();
        if(item_num == "1"){
            $(".share_item").show();
        }
        else {
            $(".share_item").hide();
        }
    });


    //必填欄位檢查
    $("form input").on("change invalid", function() {
        var textfield = $(this).get(0);

        // 'setCustomValidity not only sets the message, but also marks
        // the field as invalid. In order to see whether the field really is
        // invalid, we have to remove the message first
        textfield.setCustomValidity("");

        if (!textfield.validity.valid) {
            textfield.setCustomValidity("請填寫此欄");
        }
    });

    $("form select").on("change invalid", function() {
        var textfield = $(this).get(0);

        // 'setCustomValidity not only sets the message, but also marks
        // the field as invalid. In order to see whether the field really is
        // invalid, we have to remove the message first
        textfield.setCustomValidity("");

        if (!textfield.validity.valid) {
            textfield.setCustomValidity("請選擇項目");
        }
    });





});