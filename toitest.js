



if (JSON.parse(localStorage.getItem("hocSinh"))== null){

    var hocSinh = [
        
     ]
     for (var i=0;i<(document.getElementsByClassName("text-left col-username").length);i++){
        hocSinh.push({
            hten: "T",
            tenDangnhap: document.getElementsByClassName("text-left col-username")[i].innerText,
            giaDo: 0,
            hhCom: 0,
            hhco: 0,
            COMB:0,
            COB:0,
            WB:0,
            COMG:0,
            COG:0,
            WG:0,
            
            stt: i,
            vt: i
        })
     }

     localStorage.setItem("hocSinh",JSON.stringify(hocSinh));
 }
else
{          var hocSinh = JSON.parse(localStorage.getItem("hocSinh"));

        for (var i=0;i<(document.getElementsByClassName("text-left col-username").length);i++){
            var xuanhien=0
            var TenDN=document.getElementsByClassName("text-left col-username")[i].innerText;//ID web

            for (var j=0;j<(hocSinh.length);j++){
                    if(TenDN==hocSinh[j].tenDangnhap){
                                      
                    
                       hocSinh[j].stt = j;
                       hocSinh[j].vt = i;
                       localStorage.setItem("hocSinh",JSON.stringify(hocSinh));
                    xuanhien=xuanhien+1;
                }
                else{
                  continue;
                }
            }


           if (xuanhien==0){
                hocSinh.push({
                    hten: "T",
                    tenDangnhap: document.getElementsByClassName("text-left col-username")[i].innerText,
                    giaDo: 0,
                    hhCom: 0,
                    hhco: 0,
                    COMB:0,
                    COB:0,
                    WB:0,
                    COMG:0,
                    COG:0,
                    WG:0,
                    stt: (hocSinh.length),
                    vt: i
                })
                localStorage.setItem("hocSinh",JSON.stringify(hocSinh));
           }


        }

       

    
} 





    for (var i=0;i<(document.getElementsByClassName("hidden-stack-mode col-master-winloss ").length);i++){

            for (var j=0;j<(hocSinh.length);j++){

                var TenDN=document.getElementsByClassName("text-left col-username")[i].innerText;
                    if(TenDN==hocSinh[j].tenDangnhap){
                        document.getElementsByClassName("hidden-stack-mode col-master-winloss ")[i].innerHTML="<input class='hten' value=" +hocSinh[j].hten+ " placeholder='Ten' style='width: 50px'/><input class='giado' placeholder='Do' value=" +hocSinh[j].giaDo+ " style='width: 50px'/><input class='com' value=" +hocSinh[j].hhCom+ " placeholder='Com' style='width: 50px'/><input class='co' value=" +hocSinh[j].hhco+ " placeholder='Co' style='width: 50px'/><input class='index'  value="+hocSinh[j].stt+" /><input class='vtID'  value="+hocSinh[j].vt+" /><button onclick='edit("+hocSinh[j].vt+")'>Edit</button>";

                }
            }
    }

function edit(index){
    var vt_ID=document.getElementsByClassName("index")[index].value;

    console.log(vt_ID)

    var htenx = document.getElementsByClassName("hten")[index].value;
    var tenDangnhapx = document.getElementsByClassName("text-left col-username")[index].innerText;
    var giaDox = document.getElementsByClassName("giado")[index].value;
    var hhComx = document.getElementsByClassName("com")[index].value;
    var hhcox = document.getElementsByClassName("co")[index].value;


    hocSinh[vt_ID].hten = htenx;
    hocSinh[vt_ID].tenDangnhap = tenDangnhapx;
    hocSinh[vt_ID].giaDo = giaDox;
    hocSinh[vt_ID].hhCom = hhComx;
    hocSinh[vt_ID].hhco = hhcox;
    localStorage.setItem("hocSinh",JSON.stringify(hocSinh));

}


  // alert(hocSinh[1].tenDangnhap);


// for (var j=0;j<(hocSinh.length);j++){
// for (var i=0;i<(document.getElementsByClassName("hidden-stack-mode col-member-winloss ").length);i++)
// { 
//         var TenDN=document.getElementsByClassName("text-left col-username")[i].innerText;
//         // alert(TenDN==hocSinh[j].tenDangnhap);
//         if(TenDN==hocSinh[j].tenDangnhap){
//             var xdo = hocSinh[j].giaDo;
//             var a=parseInt(document.getElementsByClassName("hidden-stack-mode col-member-winloss ")[i].innerText.replace(",",""));
//             document.getElementsByClassName("hidden-stack-mode col-agent-winloss altercol")[i].innerHTML= tinhtong(a,xdo)+ " VND";
//         }
//          else{
//             continue;
//         }

//     }
//  }





   //alert(tinhtong(a,giado));

    // function tinhtong(a,xdo){
    //    var Tong = a*xdo;
    //     return Tong
    // }


    var buttonDiv = document.createElement("div");
    buttonDiv.style.width = "100%";
    buttonDiv.id = "parentButton";
  
    

//   var markup = '<tfoot><tr class="tbl-footer"><td data-islink="true" class="text-left col-username">Total </td> <td class="col-number-of-tickets">1,599</td>    <td class="hidden-stack-mode col-turnover">        206,102.00    </td>    <td class="hidden-stack-mode col-net-turnover">        183,105.00    </td>    <td ass="hidden-stack-mode col-gross-com">        431.62    </td>    <td class="hidden-stack-mode col-member-winloss ">        -3,093.27    </td>    <td class="hidden-stack-mode ">        408.50    </td>    <td class="hidden-stack-mode bold ">        -2,684.76    </td>    <td class="hidden-stack-mode col-agent-winloss altercol">-61860 USD</td>    <td lass="hidden-stack-mode altercol">        18.13    </td>    <td class="hidden-stack-mode bold altercol">        18.13    </td>    <td class="hidden-stack-mode col-master-winloss "><input class="hten" value="T" placeholder="Ten" style="width: 50px"><input class="giado" placeholder="Do" value="0" style="width: 50px"><input class="com" value="0" placeholder="Com" style="width: 50px"><input class="co" value="0" placeholder="Co" style="width: 50px"><input class="index" value="17"><button onclick="edit(17)">Edit</button></td>    <td class="hidden-stack-mode ">        4.69    </td>    <td class="hidden-stack-mode bold ">        4.69    </td>    <td lass="hidden-stack-mode col-super-winloss altercol">        2,474.61    </td>    <td class="hidden-stack-mode altercol">        -344.99    </td>    <td lass="hidden-stack-mode bold altercol">        2,129.62    </td>        <td class="col-company">532.33</td>    </tr>            </tfoot>';
//   $("#tbl-report").append(markup);

var btn = document.createElement("div");
  btn.innerHTML = "<button onclick='luuB()'>LuuB</button><button onclick='luuG()'>LuuG</button>";
document.getElementsByClassName("note")[0].appendChild(btn);
document.body.appendChild(btn);





// xuly Cb
function luuB(){
    for (var i=0;i<(document.getElementsByClassName("text-left col-username").length);i++){

        var wlB=parseFloat(toso(document.getElementsByClassName("col-member-winloss")[i].innerText));//ID winloss
        var Tco=parseFloat(toso(document.getElementsByClassName("col-turnover")[i].innerText));//ID Tco
        var Tcom=parseFloat(toso(document.getElementsByClassName("col-gross-com")[i].innerText));//ID Tcom
        var TenDN=document.getElementsByClassName("text-left col-username")[i].innerText;//ID web

        for (var j=0;j<(hocSinh.length);j++){
                if(TenDN==hocSinh[j].tenDangnhap){

                    hocSinh[i].COMB = Tcom;
                    hocSinh[i].COB = Tco;
                    hocSinh[i].WB = wlB;                        


                   localStorage.setItem("hocSinh",JSON.stringify(hocSinh));
               
            }
            else{
              continue;
            }
        }
    }
    
    alert("luu B xong");
}
function luuG(){
    for (var i=0;i<(document.getElementsByClassName("text-left col-username").length);i++){

        var wlB=parseFloat(toso(document.getElementsByClassName("col-member-winloss")[i].innerText));//ID winloss
        var Tco=parseFloat(toso(document.getElementsByClassName("col-turnover")[i].innerText));//ID Tco
        var Tcom=parseFloat(toso(document.getElementsByClassName("col-gross-com")[i].innerText));//ID Tcom
        var TenDN=document.getElementsByClassName("text-left col-username")[i].innerText;//ID web

        for (var j=0;j<(hocSinh.length);j++){
                if(TenDN==hocSinh[j].tenDangnhap){
                    hocSinh[i].COMG = Tcom;
                    hocSinh[i].COG = Tco;
                    hocSinh[i].WG = wlB;                        
                   localStorage.setItem("hocSinh",JSON.stringify(hocSinh));
               
            }
            else{
              continue;
            }
        }
        
    }
    alert("luu G xong");
    
}

// format so

function toso(so){
    var i=1;
    while(i>0){
        if(so.indexOf(",")==-1){
            i=so.indexOf(",");
        }
        else{
            so=so.replace(",","");
        }
    } 
    return so;
}


