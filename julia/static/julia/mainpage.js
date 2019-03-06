var dic ={
    0: 'julia_full.png',
    2: 'julia_mouth_wide5.png',
    1: 'julia_mouth_wide5.png',
    3: 'julia_mouth_narrow_o.png',
    9: 'julia_mouth_wide_d_f_k_r_s.png',
    11: 'julia_mouth_wide5.png',
    21: 'julia_mouth_closed.png',
    16: 'julia_mouth_wide_sh.png',
    19: 'julia_mouth_wide_sh.png',
    17: 'julia_mouth_wide_th.png',
    4: 'julia_mouth_wide_y.png',
    5: 'julia_mouth_wide5.png',
    18: 'julia_mouth_wide_f.png',
    20: 'julia_mouth_wide_d_f_k_r_s.png',
    12: 'julia_mouth_wide_d_f_k_r_s.png',
    6: 'julia_mouth_wide_d_f_k_r_s.png',
    14: 'julia_mouth_wide5.png',
    8: 'julia_mouth_narrow_o.png',
    10: 'julia_mouth_narrow_u.png',
    13: 'julia_mouth_wide_sh.png',
    15: 'julia_mouth_wide_sh.png',
    7: 'julia_mouth_narrow_w.png'}

//  var minutesLabel = document.getElementById("minutes");
// var secondsLabel = document.getElementById("seconds");
// var totalSeconds = 0;
// setInterval(setTime,1000)
// function setTime() {
//   ++totalSeconds;
//   secondsLabel.innerHTML = pad(totalSeconds % 60);
//   minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }
//
// function pad(val) {
//   var valString = val + "";
//   if (valString.length < 2) {
//     return "0" + valString;
//   } else {
//     return valString;
//   }
// }

function run(l){
    var i=0;
    // var k = document.getElementById('change');
    // imageloc = k.attributes['path'].value;
    console.log(l);
    speak($('#data').val());
    var timer = setInterval(()=>{
        // console.log(l[i]);

        $('#sprite').css({
            'background-position-x': -200*l[i],
        });
        //console.log(l[i],dic[l[i]]);
        //console.log(k.src);
        i++;
        // console.log(i, l.length);
        if(i==l.length) {
            //console.log("COMPLETE");
            clearInterval(timer);
        }
    }, 110);
    // 5 - 110
    // 10 - 80
    // 1 -
}