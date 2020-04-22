const MATCHES = {
    1:'I',
    5:'V',
    10:'X',
    50:'L',
    100:'C',
    500:'D',
    1000:'M'
  }
  //tra ve chu so la ma cua x
  //m = 1 neu la don vi
  //m = 10 neu la hang chuc
  //m = 100 neu la hang tram
  function findDonVi(x, m){
    let result='';
    if(x==0){
      return "";
    }
    if(x<=3*m){
      for(let i=0;i<x/m;i++){
        result+=MATCHES[m];
      }
    }else if(x==4*m){
      result = MATCHES[m]+MATCHES[5*m];
    }else if(x<=8*m){
      result = MATCHES[5*m];
      for(let i=0;i<(x-5*m)/m;i++){
        result+=MATCHES[m];
      }
    }else{
      result = MATCHES[m]+MATCHES[10*m];
    }
    return result;
  }
  //m = 1 neu la don vi
  //m = 10 neu la hang chuc
  //m = 100 neu la hang tram
  function hang(x){
    let count = 0;
    let g = x;
    while(g>0){
      count++;
      g = g / 10;
      g = parseInt(g);
    }
    if(count ==1){
      return 1;
    }else if(count ==2){
      return 10;
    }else if(count == 3){
      return 100;
    }else{
      return 1000;
    }
  }
  function convertToRoman(num) {
    let result = '';
    //arr[i]: i = 0:hang don vi,
    //        i = 1:hang chuc
    let arr=[];
    let n = num;
    while(n>0){
      arr.push(n%10);
      n/=10;
      n = parseInt(n);
    }
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<i;j++){
        arr[i]*=10;
      }
    }
    console.log(arr);
    for(let i=arr.length - 1;i>=0;i--){
      result+=findDonVi(arr[i], hang(arr[i]));
      console.log(result);
    }
   return result;
  }
  console.log(convertToRoman(501));