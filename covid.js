//! Date-Time Section


setInterval(timeChange,1000);

function timeChange(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    // console.log(time);
    let day_night = "AM";
    if(hour > 12)
    {
        day_night = "PM";
    }
    if(hour > 12)
    {
        hour = hour - 12;
    }

    if(hour < 10)
    {
        hour = "0"+hour;
    }

    if(min < 10)
    {
        min = "0"+min;
    }

    if(sec < 10)
    {
        sec = "0"+sec;
    }
    var tdate = new Date();
    var tday = tdate.getDate();
    var month = tdate.getMonth() + 1;
    var year = tdate.getFullYear();
    var dd =  tday + " : " + month + " : " + year +" , "+ hour + ":" + min + ":" + sec +" "+ day_night;
   
    document.getElementById("date").innerText = dd;
    
}
//! End Date-Time Section

$(document).ready(function () {
  init();

  function init() {
    var url = "https://api.covid19api.com/summary";
    // var url = "https://corona.lmao.ninja/v2/countries/India?yesterday&strict&query%20"
    $.get(url, function (gdata) {
      // console.log(gdata)
      gdata = `
             <td>${gdata.Global.TotalConfirmed}</td>
             <td>${gdata.Global.TotalDeaths}</td>
             <td>${gdata.Global.TotalRecovered}</td>
            `;
      $("#data").html(gdata);
    });
  }
});

//!  India Update Section

$(document).ready(function () {
  init();

  function init() {
    // var url = "https://api.covid19api.com/summary"
    var url =
      "https://corona.lmao.ninja/v2/countries/India?yesterday&strict&query%20";
    var data = "";
    $.get(url, function (data) {
      //  console.log(data)
      data = `
             <td>${data.cases}</td>
             <td>${data.deaths}</td>
             <td>${data.recovered}</td>
            `;
      $("#indata").html(data);
    });
  }
});

//!  StateWise

//! Trying with for loop or while loop But In Console output is there but not able to display it on table 
//! The Error is --> TypeError: can't convert undefined to object  

// $(document).ready(function () {
//   init();

// function fetch() {
//   var url = "https://data.covid19india.org/data.json";

  // var stdata = "";

//   $.get(url, function (stdata) {
//     // console.log(Object.keys(stdata.statewise).length);
//     console.log(stdata);

    // var sdata = "";
    // var tbval = document.getElementById("tbval");
    // let k = 1;
    // while (k <= Object.keys(stdata.statewise).length) {
    //   var x = tbval.insertRow();
    //   x.insertCell(0);
    //   tbval.rows[k].cells[0].innerHTML = stdata.statewise[i].state;
    //   k++;
    // }

    //   for (let i = 1; i < Object.keys(stdata.statewise).length; i++) {
    //     console.log(i);
    //     sdata = `
    //             <td>${stdata.statewise[i].state}</td>
    //             <td>${stdata.statewise[i].confirmed}</td>
    //             <td>${stdata.statewise[i].deaths}</td>
    //             <td>${stdata.statewise[i].recovered}</td>
    //             <td>${stdata.statewise[i].active}</td>
    //            `;
    //     $("#s2").html(sdata);
    // $("#s10").html(sdata);

    // var st = stdata.statewise[i].state;
    // var co = stdata.statewise[i].confirmed;
    // var de = stdata.statewise[i].deaths;
    // var re = stdata.statewise[i].recovered;
    // var ac = stdata.statewise[i].active;
    // console.log(st);
    // console.log(co);
    // console.log(de);
    // console.log(re);
    // console.log(ac);
    //     sdata = `
    //     <td>${st}</td>
    //     <td>${co}</td>
    //     <td>${de}</td>
    //     <td>${re}</td>
    //     <td>${ac}</td>
    //    `
    //    $("#si").html(sdata);
    //   }

    //   sdata = `
    //   <td>${st}</td>
    //    <td>${co}</td>
    //    <td>${de}</td>
    //    <td>${re}</td>
    //    <td>${ac}</td>
    //  `
    //  $("#s1").html(sdata);
//   });
// }
// });



//! 1

$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            console.log(stdata)
            stdata = `
             <td>${stdata.statewise[1].state}</td>
             <td>${stdata.statewise[1].confirmed}</td>
             <td>${stdata.statewise[1].deaths}</td>
             <td>${stdata.statewise[1].recovered}</td>
             <td>${stdata.statewise[1].active}</td>
            `
            $("#s1").html(stdata);
    })
}
})

//!  2
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[2].state}</td>
             <td>${stdata.statewise[2].confirmed}</td>
             <td>${stdata.statewise[2].deaths}</td>
             <td>${stdata.statewise[2].recovered}</td>
             <td>${stdata.statewise[2].active}</td>
            `
            $("#s2").html(stdata);
    })
}
})

//! 3
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[3].state}</td>
             <td>${stdata.statewise[3].confirmed}</td>
             <td>${stdata.statewise[3].deaths}</td>
             <td>${stdata.statewise[3].recovered}</td>
             <td>${stdata.statewise[3].active}</td>
            `
            $("#s3").html(stdata);
    })
}
})

//!  4
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[4].state}</td>
             <td>${stdata.statewise[4].confirmed}</td>
             <td>${stdata.statewise[4].deaths}</td>
             <td>${stdata.statewise[4].recovered}</td>
             <td>${stdata.statewise[4].active}</td>
            `
            $("#s4").html(stdata);
    })
}
})

//!  5

$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[5].state}</td>
             <td>${stdata.statewise[5].confirmed}</td>
             <td>${stdata.statewise[5].deaths}</td>
             <td>${stdata.statewise[5].recovered}</td>
             <td>${stdata.statewise[5].active}</td>
            `
            $("#s5").html(stdata);
    })
}
})

//! 6

$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[6].state}</td>
             <td>${stdata.statewise[6].confirmed}</td>
             <td>${stdata.statewise[6].deaths}</td>
             <td>${stdata.statewise[6].recovered}</td>
             <td>${stdata.statewise[6].active}</td>
            `
            $("#s6").html(stdata);
    })
}
})

//  7
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[7].state}</td>
             <td>${stdata.statewise[7].confirmed}</td>
             <td>${stdata.statewise[7].deaths}</td>
             <td>${stdata.statewise[7].recovered}</td>
             <td>${stdata.statewise[7].active}</td>
            `
            $("#s7").html(stdata);
    })
}
})

//  8
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[8].state}</td>
             <td>${stdata.statewise[8].confirmed}</td>
             <td>${stdata.statewise[8].deaths}</td>
             <td>${stdata.statewise[8].recovered}</td>
             <td>${stdata.statewise[8].active}</td>
            `
            $("#s8").html(stdata);
    })
}
})

//  9
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[9].state}</td>
             <td>${stdata.statewise[9].confirmed}</td>
             <td>${stdata.statewise[9].deaths}</td>
             <td>${stdata.statewise[9].recovered}</td>
             <td>${stdata.statewise[9].active}</td>
            `
            $("#s9").html(stdata);
    })
}
})

//  10
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[10].state}</td>
             <td>${stdata.statewise[10].confirmed}</td>
             <td>${stdata.statewise[10].deaths}</td>
             <td>${stdata.statewise[10].recovered}</td>
             <td>${stdata.statewise[10].active}</td>
            `
            $("#s10").html(stdata);
    })
}
})

//  11
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[11].state}</td>
             <td>${stdata.statewise[11].confirmed}</td>
             <td>${stdata.statewise[11].deaths}</td>
             <td>${stdata.statewise[11].recovered}</td>
             <td>${stdata.statewise[11].active}</td>
            `
            $("#s11").html(stdata);
    })
}
})

//  12
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[12].state}</td>
             <td>${stdata.statewise[12].confirmed}</td>
             <td>${stdata.statewise[12].deaths}</td>
             <td>${stdata.statewise[12].recovered}</td>
             <td>${stdata.statewise[12].active}</td>
            `
            $("#s12").html(stdata);
    })
}
})

//  13
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[13].state}</td>
             <td>${stdata.statewise[13].confirmed}</td>
             <td>${stdata.statewise[13].deaths}</td>
             <td>${stdata.statewise[13].recovered}</td>
             <td>${stdata.statewise[13].active}</td>
            `
            $("#s13").html(stdata);
    })
}
})

//  14
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[14].state}</td>
             <td>${stdata.statewise[14].confirmed}</td>
             <td>${stdata.statewise[14].deaths}</td>
             <td>${stdata.statewise[14].recovered}</td>
             <td>${stdata.statewise[14].active}</td>
            `
            $("#s14").html(stdata);
    })
}
})

//  15
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[15].state}</td>
             <td>${stdata.statewise[15].confirmed}</td>
             <td>${stdata.statewise[15].deaths}</td>
             <td>${stdata.statewise[15].recovered}</td>
             <td>${stdata.statewise[15].active}</td>
            `
            $("#s15").html(stdata);
    })
}
})

//!  16
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[16].state}</td>
             <td>${stdata.statewise[16].confirmed}</td>
             <td>${stdata.statewise[16].deaths}</td>
             <td>${stdata.statewise[16].recovered}</td>
             <td>${stdata.statewise[16].active}</td>
            `
            $("#s16").html(stdata);
    })
}
})

//!  17
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[17].state}</td>
             <td>${stdata.statewise[17].confirmed}</td>
             <td>${stdata.statewise[17].deaths}</td>
             <td>${stdata.statewise[17].recovered}</td>
             <td>${stdata.statewise[17].active}</td>
            `
            $("#s17").html(stdata);
    })
}
})

//!  18
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[18].state}</td>
             <td>${stdata.statewise[18].confirmed}</td>
             <td>${stdata.statewise[18].deaths}</td>
             <td>${stdata.statewise[18].recovered}</td>
             <td>${stdata.statewise[18].active}</td>
            `
            $("#s18").html(stdata);
    })
}
})

//!  19
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[19].state}</td>
             <td>${stdata.statewise[19].confirmed}</td>
             <td>${stdata.statewise[19].deaths}</td>
             <td>${stdata.statewise[19].recovered}</td>
             <td>${stdata.statewise[19].active}</td>
            `
            $("#s19").html(stdata);
    })
}
})

//! 20

$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            console.log(stdata)
            stdata = `
             <td>${stdata.statewise[20].state}</td>
             <td>${stdata.statewise[20].confirmed}</td>
             <td>${stdata.statewise[20].deaths}</td>
             <td>${stdata.statewise[20].recovered}</td>
             <td>${stdata.statewise[20].active}</td>
            `
            $("#s20").html(stdata);
    })
}
})

//!  21
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[21].state}</td>
             <td>${stdata.statewise[21].confirmed}</td>
             <td>${stdata.statewise[21].deaths}</td>
             <td>${stdata.statewise[21].recovered}</td>
             <td>${stdata.statewise[21].active}</td>
            `
            $("#s21").html(stdata);
    })
}
})

//! 22
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[22].state}</td>
             <td>${stdata.statewise[22].confirmed}</td>
             <td>${stdata.statewise[22].deaths}</td>
             <td>${stdata.statewise[22].recovered}</td>
             <td>${stdata.statewise[22].active}</td>
            `
            $("#s22").html(stdata);
    })
}
})

//!  23
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[23].state}</td>
             <td>${stdata.statewise[23].confirmed}</td>
             <td>${stdata.statewise[23].deaths}</td>
             <td>${stdata.statewise[23].recovered}</td>
             <td>${stdata.statewise[23].active}</td>
            `
            $("#s23").html(stdata);
    })
}
})

//!  24

$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[24].state}</td>
             <td>${stdata.statewise[24].confirmed}</td>
             <td>${stdata.statewise[24].deaths}</td>
             <td>${stdata.statewise[24].recovered}</td>
             <td>${stdata.statewise[24].active}</td>
            `
            $("#s24").html(stdata);
    })
}
})

//!  25
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[25].state}</td>
             <td>${stdata.statewise[25].confirmed}</td>
             <td>${stdata.statewise[25].deaths}</td>
             <td>${stdata.statewise[25].recovered}</td>
             <td>${stdata.statewise[25].active}</td>
            `
            $("#s25").html(stdata);
    })
}
})

//!  26
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[26].state}</td>
             <td>${stdata.statewise[26].confirmed}</td>
             <td>${stdata.statewise[26].deaths}</td>
             <td>${stdata.statewise[26].recovered}</td>
             <td>${stdata.statewise[26].active}</td>
            `
            $("#s26").html(stdata);
    })
}
})

//!  27
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[27].state}</td>
             <td>${stdata.statewise[27].confirmed}</td>
             <td>${stdata.statewise[27].deaths}</td>
             <td>${stdata.statewise[27].recovered}</td>
             <td>${stdata.statewise[27].active}</td>
            `
            $("#s27").html(stdata);
    })
}
})

//!  28
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[28].state}</td>
             <td>${stdata.statewise[28].confirmed}</td>
             <td>${stdata.statewise[28].deaths}</td>
             <td>${stdata.statewise[28].recovered}</td>
             <td>${stdata.statewise[28].active}</td>
            `
            $("#s28").html(stdata);
    })
}
})

//!  29
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[29].state}</td>
             <td>${stdata.statewise[29].confirmed}</td>
             <td>${stdata.statewise[29].deaths}</td>
             <td>${stdata.statewise[29].recovered}</td>
             <td>${stdata.statewise[29].active}</td>
            `
            $("#s29").html(stdata);
    })
}
})

//!  30
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[30].state}</td>
             <td>${stdata.statewise[30].confirmed}</td>
             <td>${stdata.statewise[30].deaths}</td>
             <td>${stdata.statewise[30].recovered}</td>
             <td>${stdata.statewise[30].active}</td>
            `
            $("#s30").html(stdata);
    })
}
})

//!  31
// $(document).ready(function(){
//     init()

//     function init(){
//         // var url = "https://api.covid19api.com/summary"
//         var url = "https://data.covid19india.org/data.json"
//         var stdata = "";
//         $.get(url,function(stdata){
//             stdata = `
//              <td>${stdata.statewise[31].state}</td>
//              <td>${stdata.statewise[31].confirmed}</td>
//              <td>${stdata.statewise[31].deaths}</td>
//              <td>${stdata.statewise[31].recovered}</td>
//              <td>${stdata.statewise[31].active}</td>
//             `
//             $("#s31").html(stdata);
//     })
// }
// })

//!  32
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[32].state}</td>
             <td>${stdata.statewise[32].confirmed}</td>
             <td>${stdata.statewise[32].deaths}</td>
             <td>${stdata.statewise[32].recovered}</td>
             <td>${stdata.statewise[32].active}</td>
            `
            $("#s32").html(stdata);
    })
}
})

//!  33
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[33].state}</td>
             <td>${stdata.statewise[33].confirmed}</td>
             <td>${stdata.statewise[33].deaths}</td>
             <td>${stdata.statewise[33].recovered}</td>
             <td>${stdata.statewise[33].active}</td>
            `
            $("#s33").html(stdata);
    })
}
})

//!  34
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[34].state}</td>
             <td>${stdata.statewise[34].confirmed}</td>
             <td>${stdata.statewise[34].deaths}</td>
             <td>${stdata.statewise[34].recovered}</td>
             <td>${stdata.statewise[34].active}</td>
            `
            $("#s34").html(stdata);
    })
}
})

//!  35
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[35].state}</td>
             <td>${stdata.statewise[35].confirmed}</td>
             <td>${stdata.statewise[35].deaths}</td>
             <td>${stdata.statewise[35].recovered}</td>
             <td>${stdata.statewise[35].active}</td>
            `
            $("#s35").html(stdata);
    })
}
})

//!  36
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[36].state}</td>
             <td>${stdata.statewise[36].confirmed}</td>
             <td>${stdata.statewise[36].deaths}</td>
             <td>${stdata.statewise[36].recovered}</td>
             <td>${stdata.statewise[36].active}</td>
            `
            $("#s36").html(stdata);
    })
}
})

//!  37
$(document).ready(function(){
    init()

    function init(){
        // var url = "https://api.covid19api.com/summary"
        var url = "https://data.covid19india.org/data.json"
        var stdata = "";
        $.get(url,function(stdata){
            stdata = `
             <td>${stdata.statewise[37].state}</td>
             <td>${stdata.statewise[37].confirmed}</td>
             <td>${stdata.statewise[37].deaths}</td>
             <td>${stdata.statewise[37].recovered}</td>
             <td>${stdata.statewise[37].active}</td>
            `
            $("#s37").html(stdata);
    })
}
})

// Refresh Data Section

// function refreshData(){
//     clearData();
//     init();
// }
// function clearData(){
//     $(#data).empty();
// }

// End Refresh Data Section
