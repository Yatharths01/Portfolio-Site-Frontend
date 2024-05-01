function ThemeChange(){
    if(document.body.classList.contains('w3-black')){
        // document.body.classList.add('w3-white');
        // document.body.classList.remove('w3-black');

        // dark to light bg
        let blacktheme = document.querySelectorAll('.w3-black');
        for ( let blackelem of blacktheme){
            blackelem.classList.remove('w3-black');
            blackelem.classList.add('w3-white');
        }


        // resume button - light grey to black
        let buttontheme = document.querySelector('.buttonresume');
        buttontheme.classList.add('w3-dark-grey');
        buttontheme.classList.remove('w3-light-grey')
        
        // light text to black text
        let textlightgrey = document.querySelectorAll('.w3-text-light-grey');
        for ( let lightgreyelem of textlightgrey){
            lightgreyelem.classList.remove('w3-text-light-grey')
            lightgreyelem.classList.add('w3-text-black')
        }

        // for contact logoss
        let seclogo = document.querySelectorAll('.contactlogo');
        for ( let seclogos of seclogo){
            seclogos.classList.remove('w3-text-white')
        }

        // for sidebar logoss
        let sidelogo = document.querySelectorAll('.sidebarlogo');
        for ( let barlogos of sidelogo){
            barlogos.classList.add('w3-light-grey')
        }

        // INPUT COLORS
        let inputs = document.querySelectorAll('.w3-input');
        for ( let formins of inputs){
            formins.classList.add('w3-grey','your-class')
        }

        // grey text to dark text
        let textgrey = document.querySelectorAll('.w3-text-grey');
        for ( let greyelem of textgrey){
            greyelem.classList.remove('w3-text-grey')
            greyelem.classList.add('w3-text-dark-grey')
        }

        // for skills
        let skillmeter = document.querySelectorAll('.meter');
        for ( let meters of skillmeter){
            meters.classList.remove('w3-white')
            meters.classList.add('w3-light-grey')
        }
        
        // let skillmeterpart = document.querySelectorAll('.meterparts');
        // for ( let meterps of skillmeterpart){
        //     meterps.classList.remove('w3-dark-grey')
        //     meterps.classList.add('w3-grey')
        // }


        // for edusec
        let edusecs = document.querySelectorAll('.edusec_dark');
        for ( let textstroke of edusecs){
            textstroke.classList.remove('edusec_dark')
            textstroke.classList.add('edusec_light')
        }


    }
    else if(document.body.classList.contains('w3-white')){
        // document.body.classList.remove('w3-white');
        // document.body.classList.add('w3-black');

        // light to dark bg
        let whitetheme = document.querySelectorAll('.w3-white');
        for ( let whiteelem of whitetheme){
            whiteelem.classList.remove('w3-white');
            whiteelem.classList.add('w3-black');
        }

        // resume button - dakr grey to light grey
        let buttontheme = document.querySelector('.buttonresume');
        buttontheme.classList.add('w3-light-grey');
        buttontheme.classList.remove('w3-dark-grey')

        // black text to light text
        let textblackgrey = document.querySelectorAll('.w3-text-black');
        for ( let blackgreyelem of textblackgrey){
            blackgreyelem.classList.remove('w3-text-black')
            blackgreyelem.classList.add('w3-text-light-grey')   
        }
        // dark text to grey
        let textdarkgrey = document.querySelectorAll('.w3-text-dark-grey');
        for ( let darkgreyelem of textdarkgrey){
            darkgreyelem.classList.remove('w3-text-dark-grey')
            darkgreyelem.classList.add('w3-text-grey')
        }

        // for contact logos
        let seclogo = document.querySelectorAll('.contactlogo');
        for ( let seclogos of seclogo){
            seclogos.classList.add('w3-text-white')
        }

        // INPUT COLORS
        let inputs = document.querySelectorAll('.w3-input');
        for ( let formins of inputs){
            formins.classList.remove('w3-grey','your-class')
        }

        // for sidebar logoss
        let sidelogo = document.querySelectorAll('.sidebarlogo');
        for ( let barlogos of sidelogo){
            barlogos.classList.remove('w3-light-grey')
        }

        // for skills
        let skillmeter = document.querySelectorAll('.meter');
        for ( let meters of skillmeter){
            meters.classList.add('w3-white')
            meters.classList.remove('w3-light-grey')
        }

        // let skillmeterpart = document.querySelectorAll('.meterparts');
        // for ( let meterps of skillmeterpart){
        //     meterps.classList.add('w3-dark-grey')
        //     meterps.classList.remove('w3-grey')
        // }

        // for edusec
        let edusecs = document.querySelectorAll('.edusec_light');
        for ( let textstroke of edusecs){
            textstroke.classList.remove('edusec_light')
            textstroke.classList.add('edusec_dark')
        }


        
    }
}