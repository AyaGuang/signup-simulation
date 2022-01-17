var load = document.getElementById("load");
var sign = document.getElementById("sign");
var btnl = document.getElementById("lSub");
var btns = document.getElementById("sSub");
var email = document.getElementById("email");
var password = document.getElementById("password");
var repassword = document.getElementById("repassword");

function clickload() {
    sign.setAttribute("class", "em");
    load.setAttribute("class", "item");
    document.getElementById("conSign").style = "display :none";
    document.getElementById("conLoad").style = "display :block";
}

function clicksign() {
    load.setAttribute("class", "em");
    sign.setAttribute("class", "item");
    document.getElementById("conSign").style = "display :block";
    document.getElementById("conLoad").style = "display :none";
}

function checkEmail() {
    var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!reg.test(email.value)) {
        email.style.border = "1px solid red";
        alert("邮箱前缀允许字母、数字、下划线组合、允许英文域名，请认真填写哦");
        return 0;
    } else {
        email.style.border = "1px solid green";
        return 1;
    }
}

function checkpassword() {
    var reg = /^[A-Za-z2-8#&?*]{9,15}$/g;
    var Reg = /[A-Z]/g;
    var rEg = /[#&?*]/g;
    if (!reg.test(password.value)) {
        password.style.border = "1px solid red";
        alert("可以使用2-8之间的数字、大小写字母和#&？*哦")
    } else {
        if (password.value.match(Reg) == null) {
            alert("请至少使用3个大写字母哦");
            password.style.border = "1px solid red";
        } else {
            if (password.value.match(Reg).length < 3) {
                alert("请至少使用3个大写字母哦");
                password.style.border = "1px solid red";
            } else {
                if (password.value.match(rEg) == null) {
                    alert("请至少包含#&？*中的一个哦");
                    password.style.border = "1px solid red";
                } else {
                    var arr = password.value.match(/./g);
                    const s = new Set(arr);
                    if (s.size != arr.length) {
                        alert("不要让字符重复出现哦");
                        password.style.border = "1px solid red";
                    } else {
                        password.style.border = "1px solid green";
                        return 1;
                    }

                }
            }
        }
    }
}

function recheckpassword() {
    var text = "^" + password.value + "$";
    var reg = new RegExp(text);
    if (!reg.test(repassword.value)) {
        repassword.style.border = "1px solid red";
        alert("啊，这-这，这不对吧");
        return 0;
    } else {
        repassword.style.border = "1px solid green";
        return 1;
    }
}
window.onload = function() {
    btnl.onclick = function() {
        alert("∑(っ°Д°;)っ功能不见了")
    }
    email.onblur = function() {
        checkEmail();
    }
    repassword.onblur = function() {
        recheckpassword();
    }
    password.onblur = function() {
        checkpassword();
    }
    btns.onclick = function() {
        if ((recheckpassword() + checkEmail() + checkpassword()) == 3) {
            alert("啊哈哈哈哈~~我的任务~完成啦！！！")
        }
    }
}