!function (){
    function writecode(prefix,code,fn){
        let domcode = document.querySelector('#code');
        let style = document.querySelector('#styletag');
        let $buttons = $('button')
        for (let i = 0; i < $buttons.length; i++) {
            $($buttons[i]).on('click',function(e){
                e.preventDefault()
                let a = $(e.currentTarget)
                a.siblings().removeClass('active')
                a.addClass('active')
                switch (a.attr('class')) {
                    case 'slow':
                        time = 100;
                        break;
                    case 'normal':
                        time = 50;
                        break;
                    case 'fast':
                        time = 20;
                        break;
                }
            })
            
        }
        let n = 0;
        let id = setTimeout(function adjust(){
            n += 1; 
            domcode.innerHTML =prefix +  code.substring(0,n);
            style.innerHTML = prefix + code.substring(0,n);
            domcode.scrollTop = domcode.scrollHeight;
            if(n < code.length){
                id = setTimeout(adjust,time)
            }else{
                clearTimeout(id)
            }
        },time)
    }
    
    

    let code = `
    /*
    先画出皮卡丘皮肤的颜色
    */
    .drawing{
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(255,230,0);
    }
    .wrapper{
        width: 100%;
        height: 190px;
        position: relative;
    }
    
    /*画一个鼻子*/
    .nose{
        width:0;
        border: 12px black solid;
        border-radius: 50%;
        border-color: black transparent transparent;
        position: absolute;
        left:50%;
        margin-left: -12px;
        top:27px;
    }

    /*开始画眼睛*/
    .eye{
        width:52px;
        height:52px;
        background: rgb(46,46,46);
        border-radius: 100%;
        border: 3px black solid;
        position: absolute;
    }
    
    /*左眼*/
    .eye.left{
        right:50%;
        margin-right: 70px;
    }
    /*右眼*/
    .eye.right{
        left:50%;
        margin-left: 70px;
    }
    /*眼珠*/
    .eye::after{
        content: '';
        display: block;
        width: 22px;
        height: 22px;
        background: white;
        border-radius: 50%;
        border: 3px black solid;
        position: absolute; 
        left: 6px;
        top: -2px;
    }
    
    /*开始画脸*/
    .face{
        width: 70px;
        height: 70px;
        background: rgb(255,0,0);
        border-radius: 50%;
        border: 3px black solid;
        position: absolute;
        top: 88px;
    }
    
    /*左边的酒窝*/
    .face.left{
        right: 50%;
        margin-right: 97px;
    }
    /*右边的酒窝*/
    .face.right{
        left: 50%;
        margin-left: 97px;
    }
    
    /*开始画上嘴唇*/
    .upperLip{
        width: 65px;
        height: 30px;
        border: 3px black solid;
        border-top: none;
        position: absolute;
        top: 58px;
        background: rgb(255,230,0);
    }
    
    .upperLip.left{
        right: 50%;
        border-right: none;
        border-bottom-left-radius: 120px 65px;
        transform: rotate(-35deg);
    }
    .upperLip.right{
        left: 50%;
        border-left: none;
        border-bottom-right-radius: 120px 65px;
        transform: rotate(35deg)
    }
    
    /*开始画下嘴唇*/
    .wrapper-lowerLip{
        width: 140px;
        height: 121px;
        position: absolute;
        left: 50%;
        margin-left: -70px;
        bottom: 0;
        overflow: hidden;
    }

    /*画个舌头*/
    .wrapper-lowerLip>.lowerLip{
        width: 100%;
        height: 800px;
        background: rgb(155,0,10);
        border: 3px black solid;
        border-radius: 70px/395px;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    
    .wrapper-lowerLip>.lowerLip::after{
        content: '';
        display: block;
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background: rgb(255,72,95);
        position: absolute;
        bottom: -15px;
        left: 50%;
        margin-left: -56px;
    }
    `
    let time = 50;
    writecode('',code)
}.call()