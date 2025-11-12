// patch.js — hotfix data sebelum dipakai app.js
(function () {
  const C = window.COMPONENTS || [];
  const byId = id => C.find(x => x.id === id);

  // 1) ESP32: tambahkan PWM ke interfaces (filter kamu pakai ini)
  const esp32 = byId("esp32");
  if (esp32 && !esp32.interfaces.includes("PWM")) esp32.interfaces.push("PWM");

  // 2) LoRa: key salah 'isk' -> 'risk'
  const lora = byId("lora_sx1278");
  if (lora && lora.isk) { lora.risk = lora.isk; delete lora.isk; }

  // 3) DS18B20: pastikan pinout 1 URL valid
  const ds = byId("ds18b20_temp_sensor");
  if (ds) ds.pinout = "https://components101.com/sensors/ds18b20-temperature-sensor";

  // 4) L298N: pinout link yang benar (bukan L293x)
  const l298 = byId("l298n_driver");
  if (l298) l298.pinout = "https://components101.com/modules/l298n-motor-driver-module";

  // 5) LCD 16x2: samakan nama dengan interfaces (I2C + Parallel)
  const lcd = byId("lcd_16x2");
  if (lcd) lcd.name = "LCD 16x2 (I2C/Parallel)";

  // 6) Raspberry Pi 4: pertegas risiko 3.3V (biar jelas buat pemula)
  const pi = byId("raspberry_pi_4b");
  if (pi) pi.risk = [
    "GPIO 3.3V — jangan hubungkan langsung ke perangkat 5V.",
    "Suhu dapat naik tinggi pada beban berat, gunakan heatsink atau kipas pendingin."
  ];

  // 7) IR Obstacle: rapikan kapitalisasi catatan
  const ir = byId("ir_obstacle_sensor");
  if (ir && Array.isArray(ir.wiringNotes)) {
    ir.wiringNotes = ir.wiringNotes.map(n =>
      String(n).replace(/^potensiometer/i, "Potensiometer")
    );
  }
})();
