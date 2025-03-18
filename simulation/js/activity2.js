function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Solar Radiations</h5>
        <p>Learning Objective: Find the eqilibrium temperature of a plate Exposed to a solar flux.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act2();' id='temp-btn-20' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act2() {
    let temp_btn = document.getElementById('temp-btn-20');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Sphere", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <h5>Calculate the equilibrim temperature of a plate exposed to solar flux of ${a2_solar_flux} w/m<sup>2</sup> & convection environment is at ${a2_env_temp}&deg; C having h =  ${a2_h} w/m<sup>2</sup>-k, if the plate is coated with:  </h5>


        <ol type='1'>
            <li>White Paint for which &alpha; = ${a21_alpha} and &epsilon; = ${a21_epsilon}  </li>
            <li>Flat black lacquer for which &alpha; = ${a22_alpha} and &epsilon; = ${a22_epsilon}  </li>
        </ol>

        <p>Solar flux is Q<sub>sun</sub>/A = ${a2_solar_flux} w/m<sup>2</sup> and take Boltzmann Constant (&sigma;) = ${boltzmann_constant / 1e-8} x 10<sup>-8</sup> W/(m<sup>2</sup>-K<sup>4</sup>) </p>

 
        <br>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='a2_sol2();'  id='temp-btn-200' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function a2_sol2() {
    let btn_text = get_collapse_btn_text("White Paint ", "tb2-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st2'>


        <p> 
                Now
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\alpha_{sun} \\frac{Q_{sun}}{A} = \\frac{hA(T - T_f)}{A} + \\epsilon A \\sigma (T^4 - T_f^4) $$
                </span>
        </p> 

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ T_f = ${a2_env_temp} + 273 K $$
                </span>
        </p> 

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ C = \\alpha_{sun} \\frac{Q_{sun}}{A} + hT_f + \\epsilon \\sigma T_f^4 = hT + \\epsilon \\sigma T^4 $$
                </span>
        </p> 


        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$  hT + \\epsilon \\sigma T^4 - C = 0 $$
                </span>
        </p> 


        <p style='text-align: center;'> 
                C = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp20' /><span id='dsp2-inp20'></span></span>

                <br>
                <br>

                T = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp21' /><span id='dsp2-inp21'></span></span> K
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol2();'  id='temp-btn-22' >Verify</button></div>


    </div>

    `;
    a_21_c = (a21_alpha * a2_solar_flux) + (a2_h * a2_tf) + (a21_epsilon * (boltzmann_constant) * Math.pow(a2_tf, 4));
    console.log(`c = ${a_21_c}`);
    let t = 300;
    for (let i = 0; i < 100; i++) {
        t = (a_21_c - a21_epsilon * boltzmann_constant * Math.pow(t, 4)) / a2_h;
        //console.log(t); 
    }
    a21_t = t;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol2() {
    let btn = document.getElementById('temp-btn-200');
    console.log(a_21_c, a21_t);
    let inp1 = document.getElementById('a2-inp20');
    let sp1 = document.getElementById('dsp2-inp20');
    let inp2 = document.getElementById('a2-inp21');
    let sp2 = document.getElementById('dsp2-inp21');
    if (!verify_values(parseFloat(inp1.value), a_21_c)) {
        alert('C is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a21_t)) {
        alert('T is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a_21_c).toFixed(4)}`;
    inp1.remove();
    sp1.innerText = `${(a21_t).toFixed(4)}`;
    alert('Your entered values are correct.');
    btn.style.display = 'none';
    a2_sol3();
}
function a2_sol3() {
    let btn_text = get_collapse_btn_text("Flat Black Lacquer", "tb2-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st3'>


        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\alpha_{sun} \\frac{Q_{sun}}{A} = \\frac{hA(T - T_f)}{A} + \\epsilon A \\sigma (T^4 - T_f^4) $$
                </span>
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ C = \\alpha_{sun} \\frac{Q_{sun}}{A} + hT_f + \\epsilon \\sigma T_f^4 = hT + \\epsilon \\sigma T^4 $$
                </span>
        </p> 


        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$  hT + \\epsilon \\sigma T^4 - C = 0 $$
                </span>
        </p>

        <p style='text-align: center;'> 

                C = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp22' /><span id='dsp2-inp22'></span></span>

                <br>
                <br>

                T = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp23' /><span id='dsp2-inp23'></span></span> K
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol3();'  id='temp-btn-23' >Verify</button></div>


    </div>

    `;
    a_22_c = (a22_alpha * a2_solar_flux) + (a2_h * a2_tf) + (a22_epsilon * (boltzmann_constant) * Math.pow(a2_tf, 4));
    console.log(`c = ${a_22_c}`);
    let t2 = 300;
    for (let i = 0; i < 100; i++) {
        t2 = (a_22_c - a22_epsilon * boltzmann_constant * Math.pow(t2, 4)) / a2_h;
        //console.log(t); 
    }
    a22_t = t2;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol3() {
    let btn = document.getElementById('temp-btn-23');
    console.log(a_22_c, a22_t);
    let inp1 = document.getElementById('a2-inp22');
    let sp1 = document.getElementById('dsp2-inp22');
    let inp2 = document.getElementById('a2-inp23');
    let sp2 = document.getElementById('dsp2-inp23');
    if (!verify_values(parseFloat(inp1.value), a_22_c)) {
        alert('C is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a22_t)) {
        alert('T is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a_22_c).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a22_t).toFixed(4)}`;
    alert('Your entered value is correct!!');
    alert('Experiment Completed.');
    btn.style.display = 'none';
}
// let t = 300;
// for(let i=0; i<100; i++) { 
//     t = (a_21_c - a21_epsilon*boltzmann_constant*t**4)/a2_h;
//     console.log(t);
// }
//# sourceMappingURL=activity2.js.map