var eqFlg="false"; // ｢＝｣ 押されたら eqFlg="true"。
 var opeVal="";　// 算術演算子格納。
 var tenFlg="false"; // ｢.｣小数点 押されたら tenFlg="true"。
 var chkStr=""; // 入力値の取り出し。
 var chkNan=""; // 文字,数値の判別格納。

function push(num){ // 数値,又は｢.｣ボタンが押された時。numはボタンの値。
    H_dispBox=document.getElementById("dispBox"); // 演算ボックス。
    H_opeBox=document.getElementById("opeBox");  // 演算子表示ボックス。

       // 演算ボックスが"0"のとき "0" か "."が押されたら "0."を表示。(1)
     if(( H_dispBox.value=="0"&& num =="0")||( H_dispBox.value=="0"&& num ==".")){
         num="0.";tenFlg="true"; }

　　  // 演算ボックスが"0"のとき "0"以外の値を押したら演算ボックスをクリア。
     if(H_dispBox.value =="0"&&num !="0"){H_dispBox.value="";}// 新規 num を受け入れ。
       if(tenFlg=="true"&& num =="."){num="";} // 小数点２度押し阻止。(2)

  

      // ｢＝｣のあと 演算子が押されてなければ、演算ボックスをクリア。
  if(eqFlg=="true"&&opeVal==""){ H_dispBox.value=""; // 新規 numを表示。
　　if(num=="."||num=="0"){num="0.";tenFlg="true";} // (1)
     eqFlg="false"; }

     // ｢＝｣のあと 演算子押されていれば計算継続。
  if(opeVal !=""){ 
   if(num=="."||num=="0"){num="0.";tenFlg="true";} // (1)
　  H_dispBox.value += opeVal+num; // 演算ボックスの値＋演算子＋ボタンの値。
　　 H_opeBox.innerHTML=""; opeVal=""; // 演算子クリア。
                   }
　　   else { H_dispBox.value += num; // 演算ボックスの値＋ボタンの値。
             if(num=="."){tenFlg="true";}
                  } 
　　     }



   // 算術演算子 ｢+｣ ｢-｣ ｢/｣ ｢*｣ を入力したとき。
 function opePush(num){ 
　H_dispBox=document.getElementById("dispBox"); // 演算ボックス。
   H_opeBox=document.getElementById("opeBox");  // 演算子表示ボックス。
　　if( H_dispBox.value=="0"&& num !="-"){return} // "0"のとき"-"以外入力無効。(8)
     chkStr=H_dispBox.value.slice(-1); // 演算ボックスの最後尾の値。
      chkStr=isNaN(chkStr);  // 文字,数値の判別 文字列ならtrue,数値ならfalse。
    if(chkStr==true){return} // 演算子なら演算子の, "."なら演算子と"."の入力禁止。(9)
     opeVal=num;
　    H_opeBox.innerHTML=opeVal; // 演算子を表示。
       eqFlg="false"; tenFlg="false";
          }

   // ｢＝｣ を押すと計算します。
function equal(){
 try{ // 計算結果出力。 
  resVal=document.getElementById("resBox");//計算結果表示ボックス
　 keta=100000; // 小数点以下桁数５桁まで表示。
　　coDe=H_dispBox.value; // 計算式。
　　 toTal=eval(coDe); // 計算結果　codeがJavaScript式であればその式の値を返す。
　　  toTal=Math.round(toTal*keta) / keta; // 計算結果の小数点以下6桁を四捨五入。
　　 H_dispBox.value=toTal; // 演算ボックスに表示。
　　
       }

 catch(e){ // エラー発生(入力値が不正)なら。          
  H_dispBox.value = e.description;}   
　　　}
　　// try ～ catch 例外処理、エラー処理

function clr(){　//オールクリア すべての値をリセット。
H_dispBox.value="0";
 H_opeBox.innerHTML="";
  opeVal=""; 
   eqFlg="false";
    tenFlg="false";
     }

function tBox(){ // 演算ボックスがフォーカスされたら。
  eqFlg="false"; }

function resClr(){ //計算結果表示ボックス クリア。
  resVal.innerHTML=""; }