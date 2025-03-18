let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Solar Radiations</h5>
        <p>Learning Objective: Find the approximate temperature of sun.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Cylinder", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>The radiation received by the earth's surface on a clear day with the sun overhead is ${a1_rad_received} kw/m<sup>2</sup> and an additional ${a1_rad_absorbed} kw/m<sup>2</sup> is absorbed by the earth's atmosphere. Calculate approximately the temperature of sun. </h5>

        <h5>Given that <br>
            Diameter of sun (d<sub>s</sub>) = ${a1_ds / 1e9} x 10<sup>9</sup> m <br>
            Diameter of earth (d<sub>e</sub>) = ${a1_de / 1e6} x 10<sup>6</sup> m <br>
            Distance between sun and eath (L) = ${a1_L / 1e11} x 10<sup>11</sup> m <br>
            Stefan Boltzmann Constant (&sigma;) = 5.67 x 10<sup>-8</sup> <br>
            take &epsilon; = 1 for black body
            Sun is assumed as a black body
        
        </h5>

       
        </div>

        <br>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='sol1();'  id='temp-btn-0' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function sol1() {
    let temp_btn = document.getElementById('temp-btn-0');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Area of the Sun", "tb1-st1");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st1'>


        <p> 
                Area of the Sun (A<sub>s</sub>)
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ A_s = 4 \\pi \\left( \\frac{d_s}{2} \\right)^2  $$
                </span>
        </p>

        <p style='text-align: center;'> 
                A<sub>s</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp1' /><span id='dsp-inp1'></span></span> x 10<sup>18</sup> m<sup>2</sup>
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol1();'  id='temp-btn-11' >Verify</button></div>


    </div>

    `;
    a1_sun_area = 4 * Math.PI * (Math.pow((a1_ds / 2e9), 2));
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st1'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    temp_btn.remove();
}
function verify_sol1() {
    let btn = document.getElementById('temp-btn-11');
    console.log(a1_sun_area);
    let inp1 = document.getElementById('a1-inp1');
    let sp1 = document.getElementById('dsp-inp1');
    if (!verify_values(parseFloat(inp1.value), a1_sun_area)) {
        alert('As is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1_sun_area).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol2();
}
function sol2() {
    let btn_text = get_collapse_btn_text("Energy Radiated", "tb1-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st2'>


        <p> 
                Energy radiated by the Sun (Q<sub>sun</sub>)
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q_{sun} = \\epsilon A_s \\sigma \\times T_{sun}^4 $$
                </span>
        </p>

        <p style='text-align: center;'> 
                T<sub>sun</sub> is temperature of sun  <br>
        </p>

        <p  style='text-align: center;'>

         Q<sub>sun</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp20' /><span id='dsp-inp20'></span></span> x T<sub>sun</sub><sup>4</sup> x 10<sup>10</sup> w

         </p>

        <p> 
                Now, The mean area over which all radiation is distributed
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ A = 4 \\pi L^2 $$
                </span>
        </p>

        <p style='text-align: center;'> 
                A = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp21' /><span id='dsp-inp21'></span></span> x 10<sup>22</sup> m<sup>2</sup>

                <br>
                <br>

                Q<sub>sun</sub> / A = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp22' /><span id='dsp-inp22'></span></span> x T<sub>sun</sub><sup>4</sup> x 10<sup>-12</sup> w/m<sup>2</sup>
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol2();'  id='temp-btn-12' >Verify</button></div>


    </div>

    `;
    a1_inp1 = boltzmann_constant / 1e-12 * a1_sun_area;
    a1_a = 4 * Math.PI * (Math.pow((a1_L / 1e11), 2));
    a1_qsun_by_a = (a1_epsilon * (boltzmann_constant) * a1_sun_area / (a1_a * 1e+4)) / 1e-12;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol2() {
    let btn = document.getElementById('temp-btn-12');
    console.log(a1_inp1, a1_a, a1_qsun_by_a);
    let inp0 = document.getElementById('a1-inp20');
    let sp0 = document.getElementById('dsp-inp20');
    let inp1 = document.getElementById('a1-inp21');
    let sp1 = document.getElementById('dsp-inp21');
    let inp2 = document.getElementById('a1-inp22');
    let sp2 = document.getElementById('dsp-inp22');
    if (!verify_values(parseFloat(inp0.value), a1_inp1)) {
        alert('first value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), a1_a)) {
        alert('A is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a1_qsun_by_a)) {
        alert('Qsun / A is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp0.remove();
    sp0.innerText = `${(a1_inp1).toFixed(4)}`;
    inp1.remove();
    sp1.innerText = `${(a1_a).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a1_qsun_by_a).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    sol3();
}
function sol3() {
    let btn_text = get_collapse_btn_text("Temperature of the Sun", "tb1-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st3'>


        <p> 
                Radiation received by the Earth
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q_{earth} = (${a1_rad_received} \\times 10^3) + (${a1_rad_absorbed} \\times 10^3) w/m^2 $$
                </span> 
        </p>

        <p style='text-align: center;'> 
                Q<sub>earth</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp31' /><span id='dsp-inp31'></span></span> w/m<sup>2</sup>
        </p>

        <p> 
                Now

        <br>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{Q_{sun}}{A} = Q_{earth} $$
                </span> 
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ X \\times T_{sun}^4 = Q_{earth} $$
                </span> 
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ T_{sun} = \\left(\\frac{Q_{earth}}{X} \\right)^{1/4} $$
                </span> 
        </p>

         <p style='text-align: center;'> 
                T<sub>sun</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp32' /><span id='dsp-inp32'></span></span> K
        </p>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol3();'  id='temp-btn-13' >Verify</button></div>


    </div>

    `;
    a1_qearth = (a1_rad_received + a1_rad_absorbed) * 1000;
    a1_tsun = Math.pow((a1_qearth / (a1_qsun_by_a * 1e-12)), 0.25);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol3() {
    let btn = document.getElementById('temp-btn-13');
    console.log(a1_qearth, a1_tsun);
    let inp1 = document.getElementById('a1-inp31');
    let sp1 = document.getElementById('dsp-inp31');
    let inp2 = document.getElementById('a1-inp32');
    let sp2 = document.getElementById('dsp-inp32');
    if (!verify_values(parseFloat(inp1.value), a1_qearth)) {
        alert('Qearth is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a1_tsun)) {
        alert('Tsun is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1_qearth).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a1_tsun).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map