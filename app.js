$(document).ready(function(){
    const menu = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');


    menu.addEventListener('click',function(){
        sidebar.classList.toggle('active');
        if(window.innerWidth <=768){
            sidebar.classList.remove('active');
        }

    });
     
    //navbar color
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 50){
            $('.navbar').css()
        }

    })

    var options = {
        series:[{
            name: 'series1',
            data: [101,64,78,191,42,109,100,230]
        },{
            name: 'series2',
            data: [41,32,85,42,124,52,71,120]
        }],
        chart:{
            height:300,
            type:'area',
            toolbar:{
                show:false,
            }
        },
        dataLabels:{
            enabled:false
        },
        colors:['#1a73e8','#e91e63'],
        stroke:{
            curve:'smooth',
        },
        fill:{
            type:'gradient',
            gradient:{
                opacityFrom:0.6,
                opacityTo:0.8,
            }
        },
        tooltip:{
            theme:'dark',
        },
        xaxis:{
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "July",
                "Aug",
                "Sep",
                "Oct",
            ],
            
            labels:{
                style:{
                    colors:'white'
                }
            },
        },
        
        yaxis:{
            labels:{
                style:{
                    colours:'white'
                }
            }
        },
        legend:{
            labels:{
                style:{
                    colors:'white'
                },
            },
        },
    };
   
    var chart = new ApexCharts(document.querySelector("#chLine"),options);
       chart.render();
    //dougnut chart
    var options ={
        series:[20.5,14.7,40.5,50],
        labels:['impression','Followers','Engagement','likes',],
        chart:{
            type:'donut',
            height:250,
            plotOptios:{
                pie:{
                    expandOnClick:true
                },
            },
        },
        colors:['#3a86ff','#3d348b','#ff006e','#ffbe0b'],
        legend:{
            show:false
        }
    };
    var chart = new ApexCharts(document.querySelector("#dougnut-chart"),options);
       chart.render();
})