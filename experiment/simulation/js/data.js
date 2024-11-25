// all experiment variables
//a1
let a1_rad_received = parseFloat((0.9 + Math.random() * 0.6).toFixed(1)); // kw/m2
let a1_rad_absorbed = 0.3; // kw/m2
let a1_ds = 1.39e9; // meters
let a1_de = 12.8e6; // meters
let a1_L = 1.5e11; // meters
let boltzmann_constant = 5.67e-8; // W/(m2-k4)
let a1_epsilon = 1;
let a1_inp1 = 0; // 10^(10)
let a1_sun_area = 0; // x 10^18 m2
let a1_a = 0; // x 10^22
let a1_qsun_by_a = 0; // x 10^(-12)
let a1_qearth = 0;
let a1_tsun = 0;
//a2
let a2_solar_flux = parseInt((600 + Math.random() * 200).toFixed(0)); // w/m2
let a2_env_temp = parseInt((25 + Math.random() * 10).toFixed(0)); // celcius
let a2_h = 10; // w/m2-k 
let a21_alpha = 1.12;
let a21_epsilon = 0.9;
let a22_alpha = 0.96;
let a22_epsilon = 0.95;
let a2_tf = a2_env_temp + 273;
let a_21_c = 0;
let a21_t = 0;
let a_22_c = 0;
let a22_t = 0;
//# sourceMappingURL=data.js.map