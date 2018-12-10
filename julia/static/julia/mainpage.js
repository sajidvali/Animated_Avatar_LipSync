var dic ={0: 0,
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
function run(l){
    var i=0;
    var k = document.getElementById('change');
    imageloc = k.attributes['path'].value;
    
    var timer = setInterval(()=>{
        console.log(dic[l[i]]);

        k.src = imageloc + dic[l[i]];
        console.log(k.src);
        i++;
        if(i==l.length) {
            clearInterval(timer);
        }
    }, 100);
}