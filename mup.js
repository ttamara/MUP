const dugmeIzracunaj = document.getElementById('izracunaj');
const dugmeNoviRacun = document.getElementById('noviRacun');

const nalepnica = document.getElementById('nalepnica');
const administrativnaTaksa = document.getElementById('administrativnaTaksa');
const saobracajna = document.getElementById('saobracajna');
const tablice = document.getElementById('tablice');
const kubikaza = document.getElementById('kubikaza');
const zapremina = document.getElementById('zapremina');
const godiste = document.getElementById('godiste');


const porez = document.getElementById('porez');
const komunalnaTaksa = document.getElementById('komunalnaTaksa');
const iznos = document.getElementById('iznos');

function izracunaj() {

    let zbir = 0;

    if(nalepnica!=null){
        zbir += parseInt(nalepnica.value);
    }

    if(administrativnaTaksa!=null){
        zbir += parseInt(administrativnaTaksa.value);
    }
    
    if(saobracajna!=null){
        zbir += parseInt(saobracajna.value);
    }

    if(tablice!=null){
        zbir += parseInt(tablice.value);
    }

    if(kubikaza!=null){
        let kubikazaBr = parseInt(kubikaza.value);

        if(kubikazaBr <= 1150){
            zbir += 590;
            komunalnaTaksa.value = 590;
        }
        else if(kubikazaBr > 1150 && kubikazaBr <= 1300){
            zbir += 1170;
            komunalnaTaksa.value = 1170;
        }
        else if(kubikazaBr > 1300 && kubikazaBr <= 1600){
            zbir += 1770;
            komunalnaTaksa.value = 1770;
        }
        else if(kubikazaBr > 1600 && kubikazaBr <= 2000){
            zbir += 2370;
            komunalnaTaksa.value = 2370;
        }
        else if(kubikazaBr > 2000 && kubikazaBr <= 3000){
            zbir += 3570;
            komunalnaTaksa.value = 3570;
        }else if(kubikazaBr > 3000){
            zbir += 5900;
            komunalnaTaksa.value = 5900;
        }

    }

    let zapreminaBr;
    if(zapremina!=null){
        zapreminaBr = parseInt(zapremina.value);
    }

    let godisteBr;
    if(godiste!=null){
        godisteBr = parseInt(godiste.value);
    }

    if(zapreminaBr <= 1150){

        if(godisteBr >= 2016 && godisteBr <= 2021){
            zbir += 1330;
            porez.value = 1330;
        }else if(godisteBr >= 2013 && godisteBr <= 2015){
            zbir += 1130;
            porez.value = 1130;
        }else if(godisteBr == 2011 || godisteBr == 2012){
            zbir += 997;
            porez.value = 997;
        }else if(godisteBr >= 2002 && godisteBr <= 2010){
            zbir += 798;
            porez.value = 798;
        }else if(godisteBr <= 2001){
            zbir += 266;
            porez.value = 266;
        }

    }
    else if(zapreminaBr > 1150 && zapreminaBr <= 1300){

        if(godisteBr >= 2016 && godisteBr <= 2021){
            zbir += 2610;
            porez.value = 2610;
        }else if(godisteBr >= 2013 && godisteBr <= 2015){
            zbir += 2218;
            porez.value = 2218;
        }else if(godisteBr == 2011 || godisteBr == 2012){
            zbir += 1957;
            porez.value = 1957;
        }else if(godisteBr >= 2002 && godisteBr <= 2010){
            zbir += 1566;
            porez.value = 1566;
        }else if(godisteBr <= 2001){
            zbir += 522;
            porez.value = 522;
        }

    }
    else if(zapreminaBr > 1300 && zapreminaBr <= 1600){

        if(godisteBr >= 2016 && godisteBr <= 2021){
            zbir += 5750;
            porez.value = 5750;
        }else if(godisteBr >= 2013 && godisteBr <= 2015){
            zbir += 4887;
            porez.value = 4887;
        }else if(godisteBr == 2011 || godisteBr == 2012){
            zbir += 4312;
            porez.value = 4312;
        }else if(godisteBr >= 2002 && godisteBr <= 2010){
            zbir += 3450;
            porez.value = 3450;
        }else if(godisteBr <= 2001){
            zbir += 1150;
            porez.value = 1150;
        }

    }
    else if(zapreminaBr > 1600 && zapreminaBr <= 2000){

        if(godisteBr >= 2016 && godisteBr <= 2021){
            zbir += 11790;
            porez.value = 11790;
        }else if(godisteBr >= 2013 && godisteBr <= 2015){
            zbir += 10021;
            porez.value = 10021;
        }else if(godisteBr == 2011 || godisteBr == 2012){
            zbir += 8842;
            porez.value = 8842;
        }else if(godisteBr >= 2002 && godisteBr <= 2010){
            zbir += 7074;
            porez.value = 7074;
        }else if(godisteBr <= 2001){
            zbir += 2358;
            porez.value = 2358;
        }

    }
    else if(zapreminaBr > 2000 && zapreminaBr <= 2500){

        if(godisteBr >= 2016 && godisteBr <= 2021){
            zbir += 58250;
            porez.value = 58250;
        }else if(godisteBr >= 2013 && godisteBr <= 2015){
            zbir += 49512;
            porez.value = 49512;
        }else if(godisteBr == 2011 || godisteBr == 2012){
            zbir += 43687;
            porez.value = 43687;
        }else if(godisteBr >= 2002 && godisteBr <= 2010){
            zbir += 34950;
            porez.value = 34950;
        }else if(godisteBr <= 2001){
            zbir += 11650;
            porez.value = 11650;
        }

    }
    else if(zapreminaBr > 2500 && zapreminaBr <= 3000){

        if(godisteBr >= 2016 && godisteBr <= 2021){
            zbir += 118040;
            porez.value = 118040;
        }else if(godisteBr >= 2013 && godisteBr <= 2015){
            zbir += 100334;
            porez.value = 100334;
        }else if(godisteBr == 2011 || godisteBr == 2012){
            zbir += 88530;
            porez.value = 88530;
        }else if(godisteBr >= 2002 && godisteBr <= 2010){
            zbir += 70824;
            porez.value = 70824;
        }else if(godisteBr <= 2001){
            zbir += 23608;
            porez.value = 23608;
        }

    }
    else if(zapreminaBr > 3000){

        if(godisteBr >= 2016 && godisteBr <= 2021){
            zbir += 243970;
            porez.value = 243970;
        }else if(godisteBr >= 2013 && godisteBr <= 2015){
            zbir += 207374;
            porez.value = 207374;
        }else if(godisteBr == 2011 || godisteBr == 2012){
            zbir += 182977;
            porez.value = 182977;
        }else if(godisteBr >= 2002 && godisteBr <= 2010){
            zbir += 146382;
            porez.value = 146382;
        }else if(godisteBr <= 2001){
            zbir += 48794;
            porez.value = 48794;
        }

    }

    if(iznos!=null){
        iznos.value = zbir;
    }

}


function noviRacun(){

    if(nalepnica!=null){
        nalepnica.value = "";
    }  
    if(administrativnaTaksa!=null){
        administrativnaTaksa.value = "";
    }
    if(saobracajna!=null){
        saobracajna.value = "";
    }
    if(tablice!=null){
        tablice.value = "";
    }
    if(kubikaza!=null){
        kubikaza.value = "";
    }
    if(zapremina!=null){
        zapremina.value = "";
    }
    if(godiste!=null){
        godiste.value = "";
    }

    if(porez!=null){
        porez.value = "";
    }
    if(komunalnaTaksa!=null){
        komunalnaTaksa.value = "";
    }
    if(iznos!=null){
        iznos.value = "";
    }

}

if(dugmeIzracunaj!=null){
    dugmeIzracunaj.addEventListener('click', izracunaj);
}

if(dugmeNoviRacun!=null){
    dugmeNoviRacun.addEventListener('click', noviRacun);
}