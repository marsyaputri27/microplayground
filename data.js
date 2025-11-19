const COMPONENTS = [
  {
    id: "uno",
    type: "board",
    name: "Arduino Uno R3",
    voltage: "5V",
    interfaces: ["Digital", "Analog", "I2C", "SPI", "UART"],
    overview: "Board klasik untuk pemula, stabil, dukungan library melimpah.",
    pinout: "https://store.arduino.cc/products/arduino-uno-rev3",
    wiringNotes: [
      "https://youtu.be/k5fWN4kJEX4?si=SueyU5zs1IVKtPzZ",
      "Selalu satukan GND antar perangkat.",
      "Hati-hati arus 5V total, hindari beban berlebih dari pin 5V."
    ],
    relatedProjects: ["thermo_oled", "distance_beeper"],
    risk: ["Arus 5V terbatas", "Pin analog mudah noise"]
  },

  {
    id: "nano",
    type: "board",
    name: "Arduino Nano V3",
    voltage: "5V",
    interfaces: ["Digital", "Analog", "I2C", "SPI", "UART"],
    overview: "Board compact breadboard friendly, memiliki fungsi hampir sama seperti Arduino Uno namun dalam ukuran kecil.",
    pinout: "https://store.arduino.cc/products/arduino-nano", 
    wiringNotes: [
      "https://youtu.be/Fkzl_FwUtds?si=wtU4Oe2ypLZT0skh",
      "Gunakan kabel pendek untuk breadboard-layout agar noise minimal.",
      "Pastikan 5V dan GND tersambung dengan baik ke semua perangkat eksternal.",
      "Hati-hati arus pin I/O : walaupun beberapa sumber menyebut hingga 40 mA, tetap terbaik untuk <20 mA untuk kestabilan."  
    ],
    relatedProjects: ["compact_sensor_node", "wearable_alert_system"],
    risk: ["Ukuran pin header rapat", "Pada breadboard tinggi sehingga arus bisa drop tegangan karena jalur kecil"]
  },


  {
    id: "esp32",
    type: "board",
    name: "ESP32 Devkit",
    voltage: "3.3V",
    interfaces: ["Digital", "Analog", "I2C", "SPI", "UART", "WiFi", "BLE"],
    overview: "Board bertenaga dengan WiFi/BLE. Cocok untuk IoT terhubung.",
    pinout: "https://randomnerdtutorials.com/esp32-pinout-reference-gpios/",
    wiringNotes: [
      "https://youtu.be/wsKTmlipQOE?si=M_u_lzkIdhkAUNG-",
      "Gunakan level 3.3V.",
      "Periksa ulang pin yang khusus (GPIO34..39 input only)."
    ],
    relatedProjects: ["esp32_web_led", "thermo_oled"],
    risk: ["Level logic 3.3V", "Beberapa pin tidak support pullup/pulldown"]
  },

  {
    id: "esp8266_nodemcu",
    type: "board",
    name: "ESP8266 NodeMCU",
    voltage: "3.3V (logika), input 5V melalui USB",
    interfaces: ["Digital", "Analog", "I2C", "SPI", "UART", "WiFi"],
    overview: "Board WiFi murah dan populer untuk proyek IoT. Sudah punya USB to serial dan dukungan library luas.",
    pinout: "https://randomnerdtutorials.com/esp8266-pinout-reference-gpios/",
    wiringNotes: [
      "https://youtu.be/vq17gdFe8qY?si=cYHvktPuRm-__AGu",
      "Gunakan tegangan logika 3.3V, bukan 5V.",
      "GPIO0, GPIO2, dan GPIO15 sensitif jadi hindari dipakai untuk output biasa saat boot.",
      "Gunakan pin D1 (SCL) dan D2 (SDA) untuk komunikasi I2C."
    ],
    relatedProjects: ["wifi_temp_monitor", "smart_light"],
    risk: ["Salah colok daya bisa rusak total", "Beberapa GPIO punya fungsi ganda saat boot"]
  },


  {
    id: "raspberry_pi_4b",
    type: "board",
    name: "Raspberry Pi 4 Model B",
    voltage: "5V",
    interfaces: ["Digital", "I2C", "SPI", "UART", "PWM", "Ethernet", "HDMI"],
    overview: "Board mini-komputer canggih dengan prosesor quad-core, RAM besar, WiFi, Bluetooth, dan port lengkap. Ideal untuk proyek IoT skala menengah hingga server kecil.",
    pinout: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/",
    wiringNotes: [
      "https://youtu.be/36IZaGlRy9U?si=1K-t-hWvIIgQ0p0C",
      "Gunakan pin 5V untuk daya eksternal ringan, tapi hindari beban besar langsung dari GPIO.",
      "Sensor atau modul gunakan daya 5V.",
      "Pastikan adaptor daya minimal 5V 3A agar sistem stabil terutama saat WiFi dan HDMI aktif.",
      "Gunakan label pinout resmi Raspberry Pi karena banyak pin multifungsi (I2C, SPI, UART, PWM)."
    ],
    relatedProjects: ["home_automation_server", "smart_camera", "edge_ai_sensor_hub", "personal_cloud"],
    risk: [
      "Jangan sambungkan langsung ke perangkat 5V.",
      "Suhu dapat naik tinggi pada beban berat, gunakan heatsink atau kipas pendingin."
    ]
  },

  {
    id: "stm32_bluepill",
    type: "board",
    name: "STM32F103C8T6 (Blue Pill)",
    voltage: "3.3V (logika), 5V input via USB",
    interfaces: ["Digital", "Analog", "I2C", "SPI", "UART", "PWM"],
    overview: "Board murah dan kuat dengan kecepatan prosesor tinggi. Cocok untuk proyek real-time atau kontrol motor.",
    pinout: "https://stm32-base.org/boards/STM32F103C8T6-Blue-Pill.html",
    wiringNotes: [
      "https://youtu.be/K-jYSysmw9w?si=CFgFSQz2nD5eWa6k",
      "Gunakan ST-Link atau USB-TTL untuk upload program.",
      "Perhatikan pin BOOT0 untuk memilih mode flash.",
      "GPIO tahan 5V tapi tetap disarankan pakai logika 3.3V."
    ],
      relatedProjects: ["robot_controller", "motor_driver_system"],
    risk: ["Upload program kadang gagal tanpa ST-Link", "Kurang dukungan library pemula dibanding Arduino"]
  },

  {
    id: "bme280_sensor",
    type: "sensor",
    name: "BME280",
    voltage: "3.3V",
    interfaces: ["I2C","SPI"],
    overview: "Sensor 3-in-one (suhu, kelembapan, tekanan) dari Bosch — versi upgrade dari BMP280; cocok untuk aplikasi cuaca atau ketinggian.",
    pinout: "https://randomnerdtutorials.com/bme280-sensor-arduino-pressure-temperature-humidity/",
    wiringNotes: [
      "https://youtu.be/dPaUaScB42g?si=1kJnHZbmAZo9E9OX",
      "Hubungkan VCC ke 3.3V, GND ke GND, SDA ke SDA, SCL ke SCL.",
      "Gunakan I2C atau SPI sesuai board; pastikan logika 3.3V atau level-shifter jika board 5V.",
      "Sensor perlu stabilisasikan daya sedikit untuk hasil akurat (±3% kelembapan, ±1 hPa tekanan). :contentReference[oaicite:2]{index=2}"
    ],
    relatedProjects: ["weather_station","altitude_logger"],
    risk: ["Rentan rusak jika diberi tegangan di atas 3.6V","Perlu kalibrasi kecil untuk akurasi tinggi"]
  },

  {
    id: "max30100_sensor",
    type: "sensor",
    name: "MAX30100 Heart-Rate & SpO2 Sensor",
    voltage: "3.3V",
    interfaces: ["I2C"],
    overview: "Sensor optik untuk deteksi detak jantung dan kadar oksigen (SpO2), banyak digunakan di wearable dan proyek kesehatan IoT.",
    pinout: "https://components101.com/sensors/max30100-heart-rate-oxygen-pulse-sensor-pinout-features-datasheet/ :contentReference[oaicite:4]{index=4}",
    wiringNotes: [
      "https://youtu.be/DBEj7kSkNa8?si=wuFmq_Vb3_60GDeq",
      "Hubungkan module ke 3.3V (atau board 5V dengan regulator/logika level sesuai).",
      "I2C SDA ke SDA board, SCL ke SCL; pastikan alamat I2C benar (0x57 biasanya).",
      "Letakkan sensor di permukaan yang cocok (misalnya jari) agar pembacaan stabil; perhatikan LED IR/Red sudah pas. :contentReference[oaicite:5]{index=5}"
    ],
    relatedProjects: ["heart_rate_monitor","wearable_health_device"],
    risk: ["Memerlukan posisi sensor yang tepat agar hasil akurat","Arus LED bisa tinggi sehingga perhatikan daya dan panas"]
  },

  {
    id: "mq2_gas_sensor",
    type: "sensor",
    name: "MQ-2 Gas Sensor",
    voltage: "5V",
    interfaces: ["Analog","Digital"],
    overview: "Sensor gas mudah terbakar & asap seperti mendeteksi LPG, propane, hidrogen, metana. Cocok deteksi kebocoran gas di proyek IoT.",
    pinout: "https://components101.com/sensors/mq2-gas-sensor",  
    wiringNotes: [
      "https://youtu.be/lu0MjaqZYc0?si=o5d9VmyZ092nC3HE",
      "VCC ke 5V, GND ke GND, keluaran analog ke ADC board.",
      "Sensor perlu waktu pre-heat sebelum pengukuran stabil (20 detik).",
      "Jaga ventilasi udara agar sensor mendapat representasi gas yang baik."
    ],
    relatedProjects: ["gas_leak_alarm","smart_home_safety"],
    risk: ["Bebas dari kalibrasi resmi hasil bisa kasar","Menggunakan tegangan 5V dan arus Heater cukup besar"]
  },

  {
    id: "ir_obstacle_sensor",
    type: "sensor",
    name: "IR Infrared Obstacle Avoidance Sensor",
    voltage: "5V (umumnya)",
    interfaces: ["Digital"],
    overview: "Modul sensor inframerah untuk deteksi objek atau jarak pendek, sering dipakai pada robot dan proyek IoT sederhana.",
    pinout: "https://projecthub.arduino.cc/aboda243/obstacle-detector-using-ir-module-tutorial-101320",  
    wiringNotes: [
      "https://youtu.be/tUTr58fq308?si=CiOAm7lDE1WStkQX",
      "VCC ke 5V, GND ke GND, keluaran digital ke pin digital mikrokontroler.",
      "potensiometer kecil yang digunakan untuk mengatur kepekaan sensor.",
      "Hindari pantulan cahaya kuat dari sumber lain agar hasil stabil."
    ],
    relatedProjects: ["line_follower_robot","automated_door"],
    risk: ["Jangkauan terbatas (beberapa cm)","Dipengaruhi kondisi cahaya lingkungan"]
  },

  {
    id: "pir_motion_sensor",
    type: "sensor",
    name: "PIR Sensor",
    voltage: "5V",
    interfaces: ["Digital"],
    overview: "Sensor gerakan berbasis inframerah pasif untuk mendeteksi kehadiran manusia/gerakan, banyak dipakai pada sistem keamanan IoT.",
    pinout: "https://components101.com/sensors/hc-sr501-pir-sensor",  
    wiringNotes: [
      "https://youtu.be/dfB-n99Nik8?si=gzEPfYg0KDQ11_zF",
      "VCC ke 5V, GND ke GND, OUT ke pin digital mikrokontroler.",
      "Letakkan sensor pada posisi optimal (tinggi 2-3 m) untuk cakupan luas.",
      "Setel “sensitivity” dan “time-delay” pada modul agar sesuai lingkungan."
    ],
    relatedProjects: ["home_security_system","automatic_lighting"],
    risk: ["Deteksi bisa “false alarm” karena hewan kecil atau hembusan angin","Beberapa modul butuh waktu pemanasan awal (30 detik)"]
  },

  {
    id: "rain_sensor",
    type: "sensor",
    name: "Rain Detection Sensor",
    voltage: "5V",
    interfaces: ["Analog", "Digital"],
    overview: "Sensor untuk mendeteksi adanya air atau hujan di permukaannya. Umum dipakai di sistem otomatis seperti wiper dan pertanian IoT.",
    pinout: "https://arduinogetstarted.com/tutorials/arduino-rain-sensor",
    wiringNotes: [
      "https://youtu.be/H62xzxI-4A0?si=tpa9qSbTglQWzxtV",
      "Hubungkan A0 ke pin analog untuk pembacaan nilai, atau D0 untuk deteksi on/off.",
      "Jangan biarkan papan probe terus terendam air untuk waktu lama.",
      "Bersihkan papan probe jika mulai berkarat."
    ],
    relatedProjects: ["auto_wiper_system", "rain_alert"],
    risk: ["Probe mudah berkarat", "Hasil bisa salah jika air menetes tanpa hujan"]
  },

  {
    id: "soil_moisture_sensor",
    type: "sensor",
    name: "Soil Moisture Sensor",
    voltage: "3.3V–5V",
    interfaces: ["Analog", "Digital"],
    overview: "Sensor untuk membaca kelembapan tanah, sangat berguna untuk sistem penyiraman otomatis.",
    pinout: "https://lastminuteengineers.com/soil-moisture-sensor-arduino-tutorial/",
    wiringNotes: [
      "https://youtu.be/_wM2EjpJIIE?si=nT-FHUkMur0XcNyL",
      "Gunakan A0 untuk data analog dan D0 untuk ambang batas digital.",
      "Jangan tanam seluruh modul ke tanah — hanya probe logamnya.",
      "Gunakan sensor versi kapasitif jika ingin lebih awet terhadap korosi."
    ],
    relatedProjects: ["smart_irrigation", "plant_health_monitor"],
    risk: ["Sensor resistif cepat berkarat", "Sensitivitas berubah seiring waktu"]
  },


  {
    id: "dht11",
    type: "sensor",
    name: "DHT11 (Temp/Humidity)",
    voltage: "3.3–5V",
    interfaces: ["Digital"],
    overview: "Sensor suhu & kelembapan murah, cukup untuk demo dasar.",
    pinout: "https://lastminuteengineers.com/dht11-dht22-arduino-tutorial/",
    wiringNotes: [
      "https://youtu.be/Xsde8OmxxBU?si=Rz2OE9soXBC2HkRA",
      "Gunakan resistor pull-up 10k antara VCC dan Data jika modul polos."
    ],
    relatedProjects: ["thermo_oled"],
    risk: ["Update lambat (~1 Hz)", "Rentan pembacaan NaN bila wiring jelek"]
  },

  
  {
    id: "hc-sr04",
    type: "sensor",
    name: "HC-SR04 Ultrasonic",
    voltage: "5V",
    interfaces: ["Digital"],
    overview: "Sensor jarak ultrasonik murah. Cocok untuk robot sederhana.",
    pinout: "https://randomnerdtutorials.com/complete-guide-for-ultrasonic-sensor-hc-sr04/",
    wiringNotes: [
      "https://youtu.be/ka4stA_E8eM?si=rMTC_ZdXpFQ1XKx-",
      "Echo 5V, hati-hati jika dipakai pada ESP32 (3.3V)."
    ],
    relatedProjects: ["distance_beeper"],
    risk: ["Sensitif sudut/permukaan", "Butuh 5V stabil"]
  },

  {
    id: "ds18b20_temp_sensor",
    type: "sensor",
    name: "DS18B20 Temperature Sensor",
    voltage: "3.0-5.5V",
    interfaces: ["Digital (1-Wire)"],
    overview: "Sensor suhu digital yang cukup akurat dan mudah digunakan. Sensor ini bisa digunakan di air juga, sehingga memang dikhususkan untuk pengukuran suhu",
    pinout: "https://components101.com/sensors/ds18b20-temperature-sensor",  
    wiringNotes: [
      "https://youtu.be/Y1__vmkr8-g?si=CjvF9Z1h-pFvLhA1",
      "Gunakan pull-up resistor 4.7 kΩ antara data dan VCC agar data lebih akurat.",
      "Pastikan kabel data tidak terlalu panjang untuk menjaga akurasi.",
    ],
    relatedProjects: ["temperature_monitoring","smart_thermostat"],
    risk: ["Rentang suhu terbatas karena sensor rumahan","Butuh perhatian pada koneksi kabel data"]
  },

  {
    id: "ldr_sensor",
    type: "sensor",
    name: "LDR (Light Dependent Resistor)",
    voltage: "tegangan analog bervariasi (gunakan pembagi tegangan dengan 5V atau 3.3V)",
    interfaces: ["Analog"],
    overview: "Resistor yang nilai resistansinya berubah sesuai cahaya, cocok untuk mendeteksi cahaya/gelap.",
    pinout: "https://components101.com/resistors/ldr-datasheet",  
    wiringNotes: [
      "https://youtu.be/4fN1aJMH9mM?si=I-_ooalqqOYn1cgZ",
      "Gunakan pembagi tegangan (LDR + resistor tetap) untuk membaca dengan ADC.",
      "Jika board hanya mendukung 3.3V analog input, jangan langsung pakai 5V.",
      "Letakkan jauh dari cahaya lampu yang terlalu terang agar hasil lebih stabil."
    ],
    relatedProjects: ["automatic_light_control","sunlight_monitor"],
    risk: ["Respons lambat terhadap perubahan cepat cahaya","Pengukuran bisa dipengaruhi oleh bayangan atau sudut"]
  },

  {
    id: "sg90",
    type: "actuator",
    name: "Servo SG90",
    voltage: "4.8–6V",
    interfaces: ["PWM"],
    overview: "Servo kecil untuk gerakan sudut 0–180°. Cocok prototipe.",
    pinout: "https://www.studiopieters.nl/sg90-servo/",
    wiringNotes: [
      "https://youtu.be/DP4PERv4wWA?si=9tEwOWVvxITMBdSy",
      "Gunakan power terpisah jika servo lebih dari 1.",
      "Satukan GND."
    ],
    relatedProjects: ["servo_lock"],
    risk: ["Lonjakan arus", "Getar jika sinyal jelek"]
  },

  {
    id: "dc_motor",
    type: "actuator",
    name: "DC Motor",
    voltage: "3V–12V (tergantung tipe)",
    interfaces: ["PWM"],
    overview: "Motor arus searah yang digunakan untuk menghasilkan gerakan rotasi sederhana. Digunakan di robot, kipas, dan sistem mekanik.",
    pinout: "https://www.arduinoindonesia.id/2018/08/motor-dc-dinamo-dc.html",
    wiringNotes: [
      "https://youtu.be/4qpFQPPJ21U?si=LxjtHZ8rFZMn_v0L",
      "Gunakan driver seperti L298N atau transistor NPN untuk mengontrol arah dan kecepatan.",
      "Jangan sambungkan langsung ke pin mikrokontroler.",
      "Pasang dioda flyback untuk melindungi sirkuit dari lonjakan arus balik."
    ],
    relatedProjects: ["robot_car", "automatic_fan"],
    risk: ["Arus awal tinggi bisa merusak pin kontrol", "Tanpa driver mudah overheating"]
  },

  {
    id: "stepper_motor",
    type: "actuator",
    name: "Stepper Motor 28BYJ-48",
    voltage: "5V–12V (tergantung model)",
    interfaces: ["Digital", "PWM"],
    overview: "Motor yang bergerak dalam langkah-langkah kecil, cocok untuk aplikasi presisi seperti printer 3D dan CNC.",
    pinout: "https://components101.com/motors/28byj-48-stepper-motor",
    wiringNotes: [
      "https://youtu.be/yVDuo4e6K0I?si=wvwdp0fGJjRjoFBX",
      "Gunakan driver ULN2003 atau A4988 tergantung tipe motor.",
      "Jangan ubah arah rotasi terlalu cepat tanpa delay.",
      "Cek arus maksimum driver agar tidak overheat."
    ],
    relatedProjects: ["3d_printer", "smart_blinds"],
    risk: ["Arus tinggi bisa merusak driver", "Langkah bisa meleset jika kecepatan terlalu tinggi"]
  },

  {
    id: "relay_module",
    type: "actuator",
    name: "Relay Module (1/2/4 Channel)",
    voltage: "5V (beberapa 3.3V tersedia)",
    interfaces: ["Digital"],
    overview: "Modul saklar elektronik yang memungkinkan mikrokontroler mengontrol perangkat listrik AC atau DC berdaya besar.",
    pinout: "https://components101.com/switches/5v-single-channel-relay-module-pinout-features-applications-working-datasheet",
    wiringNotes: [
      "https://youtu.be/6intfCr9SnY?si=iEIAnXT7DDkWfqUP",
      "Hubungkan VCC ke 5V, GND ke GND, dan INx ke pin digital kontrol.",
      "Gunakan opto-isolated relay untuk keamanan lebih saat berurusan dengan tegangan AC.",
      "Selalu matikan daya utama sebelum melakukan pengkabelan AC."
    ],
    relatedProjects: ["smart_home_relay", "automatic_pump_control"],
    risk: ["Berbahaya jika salah wiring ke listrik AC", "Suara klik bisa mengganggu di lingkungan tenang"]
  },

  {
    id: "buzzer_module",
    type: "actuator",
    name: "Active / Passive Buzzer Module",
    voltage: "3.3V–5V",
    interfaces: ["Digital", "PWM"],
    overview: "Aktuator suara sederhana untuk memberi sinyal atau alarm. Versi aktif berbunyi otomatis, versi pasif butuh sinyal PWM.",
    pinout: "https://components101.com/misc/buzzer-pinout-working-datasheet",
    wiringNotes: [
      "https://youtu.be/gj-H_agfd6U?si=ORYTa2TnbQB-aGNI",
      "VCC ke 5V, GND ke GND, dan pin sinyal ke digital output.",
      "Gunakan resistor seri kecil jika output Arduino terasa lemah.",
      "Untuk buzzer pasif, kirim sinyal PWM untuk menghasilkan nada berbeda."
    ],
    relatedProjects: ["alarm_system", "timer_alert"],
    risk: ["Terlalu lama menyala bisa overheat", "Buzzer aktif tidak cocok untuk memainkan nada musik"]
  },

  {
    id: "led_rgb",
    type: "actuator",
    name: "RGB LED",
    voltage: "3.3V–5V",
    interfaces: ["Digital", "PWM"],
    overview: "1 LED dengan tiga warna (Red, Green, Blue) yang bisa dikombinasikan untuk menghasilkan warna lain.",
    pinout: "https://arduinogetstarted.com/tutorials/arduino-rgb-led",
    wiringNotes: [
      "https://youtu.be/YqHkULDmmGU?si=unda-E5_kiClfXUb",
      "Gunakan resistor 220Ω–330Ω untuk tiap warna.",
      "Untuk versi common anode, hubungkan pin umum ke 5V.",
      "Gunakan PWM untuk campuran warna yang halus."
    ],
    relatedProjects: ["smart_lamp", "color_indicator"],
    risk: ["Terlalu besar arus bisa membakar LED", "Salah sambung anoda/kathoda bikin LED mati total"]
  },

  {
    id: "dc_fan_mini",
    type: "actuator",
    name: "Mini DC Fan",
    voltage: "5V–12V (tergantung model)",
    interfaces: ["PWM"],
    overview: "Kipas kecil untuk pendingin sistem.",
    pinout: "https://arduinogetstarted.com/tutorials/arduino-controls-fan",
    wiringNotes: [
      "https://youtu.be/1Qndq5OV_XE?si=qzs_u6jgsrExiEc2",
      "Gunakan transistor atau relay untuk mengontrol kipas dari Arduino.",
      "Berikan daya terpisah jika kipas lebih dari 5V.",
      "Tambahkan dioda flyback untuk melindungi mikrokontroler."
    ],
    relatedProjects: ["smart_fan", "temperature_control"],
    risk: ["Arus awal tinggi bisa membuat pin drop tegangan", "Bunyi berisik"]
  },

  {
    id: "solenoid_door_lock",
    type: "actuator",
    name: "Solenoid Door Lock 12V",
    voltage: "12V",
    interfaces: ["Digital", "Relay"],
    overview: "Kunci pintu elektromagnetik yang terbuka saat diberi arus dan terkunci saat mati.",
    pinout: "https://arduinogetstarted.com/tutorials/arduino-solenoid-lock",
    wiringNotes: [
      "https://youtu.be/kGkyvVwwuL8?si=5NUhJfLHA0ClLK8R",
      "Gunakan transistor, relay, atau MOSFET untuk mengontrol dari Arduino.",
      "Gunakan dioda flyback paralel untuk melindungi arus balik.",
      "Pastikan adaptor tidak lemah."
    ],
    relatedProjects: ["smart_door_lock", "rfid_access_system"],
    risk: ["Tarikan lemah jika arus kurang", "Tanpa pelindung bisa merusak board"]
  },

  {
    id: "oled_display_096",
    type: "module",
    name: "OLED Display 0.96 (I2C)",
    voltage: "3.3V–5V",
    interfaces: ["I2C"],
    overview: "Layar kecil berbasis OLED dengan resolusi 128x64, digunakan untuk menampilkan teks dan grafik pada proyek IoT.",
    pinout: "https://randomnerdtutorials.com/guide-for-oled-display-with-arduino/",
    wiringNotes: [
      "https://youtu.be/_KD7skmusTQ?si=5_nHZjQysCRG_ASR",
      "Hubungkan SDA ke pin A4 (Arduino) atau D2 (ESP8266), SCL ke A5 atau D1.",
      "Pastikan alamat I2C benar (0x3C atau 0x3D).",
      "Gunakan library Adafruit SSD1306 dan GFX untuk menampilkan teks/gambar."
    ],
    relatedProjects: ["thermo_oled", "status_monitor"],
    risk: ["Alamat I2C berbeda antar modul", "Layar bisa burn-in jika tampilan statis terlalu lama"]
  },


  {
    id: "lcd_16x2",
    type: "module",
    name: "LCD 16x2 I2C",
    voltage: "5V",
    interfaces: ["I2C", "Parallel"],
    overview: "Layar karakter klasik 16 kolom x 2 baris untuk menampilkan teks. Umum digunakan di proyek sensor dan alat ukur.",
    pinout: "https://arduinogetstarted.com/tutorials/arduino-lcd-i2c",
    wiringNotes: [
      "https://youtu.be/CvqHkXeXN3M?si=i2T0-vbHy8dvqS_F",
      "Untuk I2C: SDA ke A4, SCL ke A5.",
      "Gunakan potensiometer atau kontras di modul I2C untuk mengatur kecerahan.",
      "Gunakan library LiquidCrystal atau LiquidCrystal_I2C."
    ],
    relatedProjects: ["sensor_display", "smart_weather_station"],
    risk: ["Koneksi paralel butuh banyak kabel", "Alamat I2C bisa berbeda antar modul"]
  },

  {
    id: "rfid_rc522",
    type: "module",
    name: "RFID RC522 Module",
    voltage: "3.3V (logika) / 5V kompatibel",
    interfaces: ["SPI", "I2C", "UART"],
    overview: "Modul pembaca kartu RFID berbasis chip MFRC522, digunakan untuk sistem akses atau identifikasi tanpa kontak.",
    pinout: "https://microcontrollerslab.com/rc522-rfid-reader-pinout-arduino-interfacing-examples-features/",
    wiringNotes: [
      "https://youtu.be/pdBrvLGH0PE?si=wEpS6i6JMdfXsNrd",
      "Gunakan pin SDA, SCK, MOSI, MISO, IRQ, GND, dan RST sesuai konfigurasi board.",
      "Pastikan level logika sesuai (gunakan 3.3V untuk ESP8266).",
      "Gunakan library MFRC522 pada Arduino IDE."
    ],
    relatedProjects: [ "smart_door_lock"],
    risk: ["Sensitif terhadap posisi kartu", "Tidak stabil jika kabel SPI terlalu panjang"]
  },

  {
    id: "bluetooth_hc05",
    type: "module",
    name: "Bluetooth HC-05 / HC-06",
    voltage: "3.3V–6V (logika 3.3V)",
    interfaces: ["UART"],
    overview: "Modul Bluetooth klasik untuk komunikasi serial nirkabel dengan mikrokontroler.",
    pinout: "https://id.hwlibre.com/Panduan-lengkap-untuk-modul-Bluetooth-HC-05-dan-HC-06-untuk-Arduino.",
    wiringNotes: [
      "https://youtu.be/aQcJ4uHdQEA?si=ld8Vxfd5EbZoDnj4",
      "Gunakan TX-RX silang: TX modul ke RX mikrokontroler dan sebaliknya.",
      "Gunakan level shifter atau pembagi tegangan di pin RX modul.",
      "HC-05 dapat diatur sebagai master/slave, sedangkan HC-06 hanya slave."
    ],
    relatedProjects: ["wireless_robot", "bluetooth_controlled_home"],
    risk: ["Koneksi tidak stabil jika baud rate salah", "Tegangan 5V langsung ke RX dapat merusak modul"]
  },

  {
    id: "wifi_esp01",
    type: "module",
    name: "WiFi Module ESP-01",
    voltage: "3.3V (logika dan daya)",
    interfaces: ["UART", "WiFi"],
    overview: "Modul WiFi berbasis ESP8266, dapat berfungsi sebagai mikrokontroler atau modem WiFi untuk Arduino.",
    pinout: "https://www.allelcoelec.com/blog/ESP-01-Wi-Fi-Module-Guide-Pinout,Features,and-Comparison-with-ESP8266.html",
    wiringNotes: [
      "https://youtu.be/cja6T7BgP2Q?si=CE760NlS2XM6eI6E",
      "Gunakan regulator 3.3V eksternal karena arus bisa mencapai 300mA.",
      "Hubungkan TX dan RX silang ke mikrokontroler.",
      "Gunakan perintah AT Command atau program langsung via IDE."
    ],
    relatedProjects: ["wifi_data_logger", "smart_home_gateway"],
    risk: ["Overheat jika tanpa regulator", "Tidak stabil dengan catu daya USB langsung"]
  },

  {
    id: "gps_neo6m",
    type: "module",
    name: "GPS Module NEO-6M",
    voltage: "3.3V–5V",
    interfaces: ["UART"],
    overview: "Modul GPS yang mampu memberikan data lokasi (latitude, longitude) dan waktu dengan akurasi tinggi.",
    pinout: "https://components101.com/modules/neo-6mv2-gps-module",
    wiringNotes: [
      "https://youtu.be/Dok39Tu54FQ?si=AeHa5oYGuM-9z7Qy",
      "Hubungkan TX modul ke RX mikrokontroler.",
      "Letakkan antena di area terbuka untuk sinyal terbaik.",
      "Gunakan library TinyGPS++ untuk parsing data serial."
    ],
    relatedProjects: ["gps_tracker", "vehicle_monitoring_system"],
    risk: ["Butuh waktu lama untuk fix pertama", "Sinyal lemah di dalam ruangan"]
  },

  {
    id: "sd_card_module",
    type: "module",
    name: "Micro SD Card Module",
    voltage: "3.3V–5V",
    interfaces: ["SPI"],
    overview: "Modul pembaca kartu microSD untuk menyimpan dan membaca data seperti sensor log atau file proyek IoT.",
    pinout: "https://components101.com/modules/micro-sd-card-module-pinout-features-datasheet-alternatives",
    wiringNotes: [
      "https://youtu.be/sS_oW81NweI?si=hnMaiOUo8Yt0AF0B",
      "Hubungkan pin CS, MOSI, MISO, SCK ke pin SPI Arduino.",
      "Gunakan kartu SD berformat FAT16/FAT32.",
      "Gunakan library SD.h atau SdFat.h."
    ],
    relatedProjects: ["data_logger", "audio_recorder"],
    risk: ["Kartu bisa korup jika dicabut saat aktif", "Kecepatan baca tulis terbatas pada SPI"]
  },

  {
    id: "l298n_driver",
    type: "module",
    name: "L298N Dual H-Bridge Motor Driver",
    voltage: "5V (logic) / 12V (motor)",
    interfaces: ["Digital", "PWM"],
    overview: "Driver motor DC dan stepper dengan dua channel H-Bridge untuk mengatur arah dan kecepatan motor.",
    pinout: "https://components101.com/modules/l293n-motor-driver-module",
    wiringNotes: [
      "https://youtu.be/E2sTbpFsvXI?si=jPWiZAUsV_Ml8vGX",
      "Gunakan ENA dan ENB untuk kontrol kecepatan (PWM).",
      "Pasang dioda flyback atau gunakan versi modul dengan proteksi internal.",
      "Jangan gunakan 5V output jika board disuplai lebih dari 12V."
    ],
    relatedProjects: ["robot_car", "smart_vehicle"],
    risk: ["Overheat pada arus tinggi", "Drop tegangan output sekitar 1.5V dari input"]
  },

  {
  
    id: "dfplayer_mini",
    type: "module",
    name: "DFPlayer Mini MP3 Module",
    voltage: "3.3V–5V",
    interfaces: ["UART"],
    overview: "Modul pemutar audio MP3 dengan slot microSD. Bisa dikontrol mikrokontroler lewat perintah serial.",
    pinout: "https://www.sinauprogramming.com/2020/12/tutorial-menggunakan-modul-mp3-player.html",
    wiringNotes: [
      "https://youtu.be/6Dc3emRvZCc?si=9iROP2RD66Nx9dlh",
      "Gunakan TX-RX silang ke Arduino.",
      "Gunakan resistor 1kΩ di jalur RX untuk kestabilan sinyal.",
      "Gunakan library DFPlayerMini dari DFRobot untuk kontrol mudah."
    ],
    relatedProjects: ["voice_alert_system", "talking_robot"],
    risk: ["Sensitif terhadap noise daya", "File harus diberi nama dan urutan sesuai format"]
  },

  {
    id: "lora_sx1278",
    type: "module",
    name: "LoRa SX1278 433MHz Module",
    voltage: "3.3V",
    interfaces: ["SPI"],
    overview: "Modul komunikasi jarak jauh berbasis LoRa yang hemat daya dengan jangkauan hingga beberapa kilometer.",
    pinout: "https://microcontrollerslab.com/sx1278-lora-rf-module-pinout-arduino-interfacing-datasheet/",
    wiringNotes: [
      "https://youtu.be/wH483V8fnN8?si=95dAqe_xwdMpijrm",
      "Gunakan pin NSS, SCK, MOSI, MISO, RESET, DIO0 ke SPI mikrokontroler.",
      "Gunakan library RadioHead atau LoRa.h.",
      "Pastikan antena terpasang sebelum memberi daya agar modul tidak rusak."
    ],
    relatedProjects: ["long_range_sensor_network", "remote_weather_station"],
    isk: ["Tanpa antena modul bisa panas dan rusak", "SPI noise tinggi pada kabel panjang"]
  },

  {
    id: "rtc_ds3231",
    type: "module",
    name: "RTC DS1307 / DS3231",
    voltage: "3.3V–5V",
    interfaces: ["I2C"],
    overview: "Modul Real-Time Clock untuk menyimpan waktu dan tanggal, tetap aktif walau mikrokontroler mati berkat baterai koin backup.",
    pinout: "https://lastminuteengineers.com/ds3231-rtc-arduino-tutorial/",
    wiringNotes: [
      "https://youtu.be/E6wkvTG2Ofs?si=rt0zwlhXIa5lqDYG",
      "Hubungkan SDA ke A4 dan SCL ke A5 (Arduino).",
      "Gunakan library RTClib untuk pengaturan waktu.",
      "Baterai CR2032 menjaga waktu tetap akurat saat mati daya."
    ],
    relatedProjects: ["data_logger_with_time", "clock_display"],
    risk: ["Baterai lemah bisa menyebabkan reset waktu", "Alamat I2C bisa berbeda antar modul"]
  },

  {
    id: "sim800l_module",
    type: "module",
    name: "SIM800L GSM/GPRS Module",
    voltage: "4V",
    interfaces: ["UART"],
    overview: "Modul GSM/GPRS quad-band yang memungkinkan perangkat IoT terhubung lewat SMS, suara, data seluler — cocok untuk sistem remote monitoring atau IoT tanpa WiFi.",
    pinout: "https://components101.com/wireless/sim800l-gsm-module-pinout-datasheet-equivalent-circuit-specs/ :contentReference[oaicite:10]{index=10}",
    wiringNotes: [
      "https://youtu.be/qugcj6TMlIg?si=ypPT-VqEH8Xf6ZZi",
      "Gunakan catu daya stabil 4.0V dan arus mampu puncak ~2A (saat transmisi). :contentReference[oaicite:11]{index=11}",
      "Sambungkan TX modul ke RX board, RX modul ke TX board (level logika 2.8-3.3V).",
      "Pasang antena eksternal dan pastikan sinyal seluler yang cukup."
    ],
    relatedProjects: ["remote_sensor_network","sms_alarm_system"],
    risk: ["Voltase salah bisa merusak modul","Arus puncak tinggi bisa bikin board reset jika suplai lemah"]
  },

];



// Simplified PROJECTS used by UI
const PROJECTS = [
  {
    id: "thermo_oled",
    level: "beginner",
    title: "Thermo Watch",
    youtube: "https://youtu.be/Sbm9G37_VyQ?si=g9M8L1FHQGc5liwG",
    desc: "Monitor suhu dan kelembaban dengan NodeMCU dan OLED mini.",
    code: `
*/
#include<Wire.h>
#include<Adafruit_GFX.h>
#include<Adafruit_SSD1306.h>
#include<DHT.h>
#define RESET LED_BUILTIN
#define PIN D5
#define TYPE DHT11
Adafruit_SSD1306 oled(RESET);
DHT dht(PIN, TYPE);
int te, hu, tt, hh;
const unsigned char myBitmap [] PROGMEM = {
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xff, 0xff, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xff, 0xff, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3f, 0xff, 0xff, 0xfc, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7f, 0xff, 0xff, 0xfe, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xff, 0xc0, 0x03, 0xff, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0xfe, 0x00, 0x00, 0x7f, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xf8, 0x00, 0x00, 0x1f, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0xe0, 0x00, 0x00, 0x07, 0xf8, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x3f, 0x80, 0x00, 0x00, 0x01, 0xfc, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x00, 0x00, 0x00, 0xfe, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x7e, 0x00, 0x00, 0x00, 0x60, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0xfc, 0x00, 0x00, 0x07, 0xc0, 0x3f, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x01, 0xf8, 0x00, 0x00, 0x07, 0xe8, 0x1f, 0x80, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x01, 0xf0, 0x00, 0x00, 0x1f, 0xfc, 0x0f, 0xc0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x03, 0xe0, 0x00, 0x00, 0x06, 0x38, 0x07, 0xc0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x07, 0xe0, 0x20, 0x00, 0x00, 0xb8, 0x07, 0xe0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x07, 0xc0, 0x20, 0x00, 0x00, 0x84, 0x03, 0xe0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x0f, 0xc0, 0x20, 0x00, 0x00, 0x80, 0x03, 0xf0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x0f, 0x80, 0x20, 0x60, 0x10, 0xb8, 0x01, 0xf0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x0f, 0x80, 0xf9, 0xf8, 0x7c, 0xfc, 0x01, 0xf0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x1f, 0x00, 0x23, 0x8c, 0xc6, 0xc6, 0x00, 0xf8, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x1f, 0x00, 0x23, 0x05, 0x80, 0x82, 0x00, 0xf8, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x1f, 0x00, 0x23, 0xff, 0x80, 0x82, 0x00, 0xf8, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x1e, 0x00, 0x23, 0xfd, 0x80, 0x82, 0x00, 0x78, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x1e, 0x00, 0x23, 0x01, 0x80, 0x82, 0x00, 0x7c, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x3e, 0x00, 0x31, 0xf8, 0xee, 0x82, 0x00, 0x7c, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x3e, 0x00, 0x1c, 0xf0, 0x7c, 0x82, 0x00, 0x7c, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x3e, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7c, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x3e, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7c, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x3e, 0x40, 0x8f, 0x07, 0xc3, 0xe1, 0xf8, 0x7c, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x3e, 0x61, 0x99, 0x8c, 0xe7, 0x73, 0xdc, 0x7c, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x3e, 0x21, 0x30, 0xd8, 0x6c, 0x1b, 0x86, 0x7c, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x3e, 0x33, 0x20, 0x58, 0x3c, 0x1b, 0x06, 0x7c, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x1e, 0x12, 0x3f, 0xd8, 0x3c, 0x1b, 0x06, 0x7c, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x1e, 0x1e, 0x30, 0x18, 0x3c, 0x1b, 0x06, 0x7c, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x1f, 0x0c, 0x39, 0x0c, 0x76, 0x3b, 0x06, 0xf8, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x1f, 0x0c, 0x1f, 0x87, 0xf3, 0xfb, 0x06, 0xf8, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x1f, 0x00, 0x00, 0x10, 0x30, 0x00, 0x00, 0xf8, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x0f, 0x80, 0x00, 0x18, 0x60, 0x00, 0x01, 0xf0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x0f, 0x80, 0x00, 0x0f, 0xc0, 0x00, 0x01, 0xf0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x0f, 0xc0, 0x00, 0x07, 0x80, 0x00, 0x03, 0xf0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x07, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x03, 0xe0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x07, 0xe0, 0x00, 0x00, 0x00, 0x00, 0x07, 0xe0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x03, 0xe0, 0x00, 0x00, 0x00, 0x00, 0x07, 0xc0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x01, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xc0, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x01, 0xf8, 0x00, 0x00, 0x00, 0x00, 0x1f, 0x80, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0xfc, 0x00, 0x00, 0x00, 0x00, 0x3f, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x7f, 0x00, 0x00, 0x00, 0x00, 0xfe, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x3f, 0x80, 0x00, 0x00, 0x01, 0xfc, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0xe0, 0x00, 0x00, 0x07, 0xf8, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xf8, 0x00, 0x00, 0x1f, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0xfe, 0x00, 0x00, 0x7f, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xff, 0xc0, 0x03, 0xff, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3f, 0xff, 0xff, 0xfc, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0xff, 0xff, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xff, 0xff, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0xf8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
};
void setup()
{
  Serial.begin(9600);
  oled.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  oled.clearDisplay();
  oled.clearDisplay();
  oled.drawBitmap(0, 0, myBitmap, 128, 64, WHITE);
  oled.display();
  delay(2000);
  dht.begin();
  delay(1000);
}
void loop()
{
  tt = dht.readTemperature();
  hh = dht.readHumidity();
  if (isnan(tt) || tt > 50)
  {
    te = te;
  }
  else
  {
    te = tt;
  }
  if (isnan(hh) || hh > 100)
  {
    hu = hu;
  }
  else
  {
    hu = hh;
  }
  oled.clearDisplay();
  oled.setTextSize(1);
  oled.setTextColor(WHITE);
  oled.drawRect(0, 0, 127, 63, WHITE);
  oled.setCursor(29, 5);
  oled.print("TEMPERATURE");
  oled.setTextSize(3);
  oled.setCursor(46, 20);
  oled.print(te);
  oled.setTextSize(1);
  oled.setCursor(37, 50);
  oled.print("DEGREES(C)");
  oled.display();
  delay(2000);
  oled.clearDisplay();
  oled.setTextSize(1);
  oled.setTextColor(WHITE);
  oled.drawRect(0, 0, 127, 63, WHITE);
  oled.setCursor(38, 5);
  oled.print("HUMIDITY");
  oled.setTextSize(3);
  oled.setCursor(46, 20);
  oled.print(hu);
  oled.setTextSize(1);
  oled.setCursor(54, 50);
  oled.print("(%)");
  oled.display();
  delay(2000);
}
/* Weather Station using NodeMCU ESP8266 & OLED Display
  Author: Ashish Labade (Tech Vegan) https://www.ashishvegan.com
  Subscribe My YouTube Channel: https://www.youtube.com/channel/UCs_dbtq_OF-0HxkAQnBGapA/
*/`,
    tools: [
      "Breadboard Small",
      "Breadboard Big",
      "NodeMCU - ESP8266 (CP2102)",
      "0.96\" 128x64 OLED Display",
      "Jumper Cables (Male to Male)",
      "DHT11 Sensor"
    ]
  },
  {
    id: "distance_beeper",
    level: "beginner",
    title: "Distance Beeper",
    youtube: "https://youtu.be/n-gJ00GTsNg?si=BNmW4W4zFwezDsQg",
    desc: "Sensor ultrasonik dengan indikator LED/buzzer saat objek mendekat.",
    code: `const int trigPin = 7;
const int echoPin = 8;

long duration;
float distance_cm;
float distance_inch;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  // Pastikan trig LOW dulu
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  // Kirim trigger 10 microsecond
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Baca waktu pantulan di pin echo (dalam microsecond)
  duration = pulseIn(echoPin, HIGH);

  // Rumus: jarak (cm) = (duration * 0.034) / 2
  distance_cm   = (duration * 0.034) / 2.0;
  distance_inch = distance_cm / 2.54;

  Serial.print("Distance: ");
  Serial.print(distance_cm);
  Serial.print(" cm   |   ");
  Serial.print(distance_inch);
  Serial.println(" inch");

  delay(500); // baca tiap 0.5 detik
}`,
    tools: ["Arduino Uno", "Breadboard", "HC-SR04 Ultrasonic", "LED"]
  },
  {
    id: "light_control",
    level: "beginner",
    title: "Automatic Light Control",
    youtube: "https://youtu.be/9YkpectmSr4?si=TbVVvUxf3rhQfEeH",
    desc: "Lampu otomatis menyala saat lingkungan gelap menggunakan sensor LDR.",
    code: `const int ldrPin = A0;   // titik tengah LDR + resistor
const int ledPin = 9;    // LED + resistor ke pin 9

int sensorValue = 0;
int threshold = 500;     // batas terang/gelap, nanti bisa kamu ubah

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);    // buat lihat nilai sensor di Serial Monitor
}

void loop() {
  sensorValue = analogRead(ldrPin);

  Serial.print("LDR value: ");
  Serial.println(sensorValue);

  // Versi ini: LED NYALA saat GELAP (nilai lebih besar dari threshold)
  if (sensorValue > threshold) {
    digitalWrite(ledPin, HIGH);  // LED ON
  } else {
    digitalWrite(ledPin, LOW);   // LED OFF
  }

  delay(200);
}`,
    tools: ["Arduino Uno", "Jumper Cables", "Breadboard", "Sensor LDR", "Resistor", "LED"]
  },
  {
    id: "rain_alert",
    level: "beginner",
    title: "Rain Alert",
    youtube: "https://youtu.be/ZBIK0Sj8uZo?si=X7aN1dbhBJKQwBZ-",
    desc: "Sensor hujan memicu servo untuk menutup penutup kecil ketika air terdeteksi.",
    code: `//eazytronic.com
#include <Servo.h> // servo library
Servo s1;
int val = 0 ;

void setup()
{
    Serial.begin(9600);
    pinMode(7,INPUT);  // Rain sensor output pin connected
    s1.attach(6);      // Servo Motor   
}

void loop() 
{
   val = digitalRead(7);  //  Rain sensor output pin connected
  Serial.println(val);    // see the value in serial monitor
  delay(100);
  
  if(val == 0 )
  {
    s1.write(90);   // Servo Rotate 90 Degree
    delay(500);     // delay time
  } 

   if(val == 1 )
  {
    s1.write(0);     // Servo Rotate 0 Degree
  }
}`,
    tools: ["Servo SG90", "Arduino Uno", "Rain sensor module"]
  },
  {
    id: "clock_digital",
    level: "beginner",
    title: "Digital Clock",
    youtube: "https://youtu.be/hjy8b01CXcY?si=A_Cm84fJUtszBQ-2",
    desc: "Jam digital LED matrix dengan efek animasi sederhana pada NodeMCU.",
    code: `const int ledPins[] = {3, 5, 6, 9, 10, 11};
const int ledCount = sizeof(ledPins) / sizeof(ledPins[0]);

void setup() {
  for (int i = 0; i < ledCount; i++) {
    pinMode(ledPins[i], OUTPUT);
    digitalWrite(ledPins[i], LOW);
  }
  randomSeed(analogRead(0));
}

void loop() {
  runningWave();
  delay(300);

  boomFlash();
  delay(300);

  cascadeDown();
  delay(300);

  glitchRandom();
  delay(400);
}

void runningWave() {
  for (int i = 0; i < ledCount; i++) {
    digitalWrite(ledPins[i], HIGH);
    delay(100);
  }
  for (int i = 0; i < ledCount; i++) {
    digitalWrite(ledPins[i], LOW);
    delay(50);
  }
}

void boomFlash() {
  for (int i = 0; i < ledCount; i++) {
    digitalWrite(ledPins[i], HIGH);
  }
  delay(150);
  for (int i = ledCount - 1; i >= 0; i--) {
    digitalWrite(ledPins[i], LOW);
    delay(70);
  }
}

void cascadeDown() {
  for (int i = 0; i < ledCount; i++) {
    digitalWrite(ledPins[i], HIGH);
    delay(80);
  }
  for (int i = 0; i < ledCount; i++) {
    digitalWrite(ledPins[i], LOW);
    delay(80);
  }
}

void glitchRandom() {
  for (int i = 0; i < 30; i++) {
    int led = random(ledCount);
    digitalWrite(ledPins[led], HIGH);
    delay(random(20, 70));
    digitalWrite(ledPins[led], LOW);
    delay(random(20, 70));
  }
}`,
    tools: ["ESP8266 (NodeMCU / Wemos D1 Mini)", "Modul LED Matrix MAX7219 (4 in 1)", "Breadboard", "Kabel jumper"]
  },
  {
    id: "traffic_lights",
    level: "beginner",
    title: "Traffic Lights",
    youtube: "https://youtu.be/PcAO6EhXoXQ?si=tYB4gBG5qFJF4BhQ",
    desc: "Simulasi lampu lalu lintas menggunakan tiga LED dan Arduino.",
    code: `const int led = 8;
const int led2 = 7;
const int led3 = 6;

void setup() {
 pinMode (led, OUTPUT);
 pinMode (led2, OUTPUT);
 pinMode (led3, OUTPUT);
}

void loop() {
 digitalWrite (led, HIGH);
 digitalWrite (led2, LOW);
 digitalWrite (led3, LOW);
 delay(1000);
 
 digitalWrite (led, LOW);
 digitalWrite (led2, HIGH);
 digitalWrite (led3, LOW);
 delay(1000);

 digitalWrite (led, LOW);
 digitalWrite (led2, LOW);
 digitalWrite (led3, HIGH);
 delay(1000);
}`,
    tools: ["Arduino Uno", "Breadboard", "Kabel jumper", "Resistor", "LED"]
  },
  {
    id: "door_lock",
    level: "intermediate",
    title: "Servo Door Lock",
    youtube: "https://youtu.be/GOO84CGBPz8?si=HOr3lIJdII6WDJlv",
    desc: "Pintu otomatis berbasis RFID dengan LCD dan servo pengunci.",
    code: `#include <LiquidCrystal_I2C.h>
#include <SPI.h>
#include <MFRC522.h>

#define RST_PIN 9
#define SS_PIN  10
byte readCard[4];
byte a = 0;

LiquidCrystal_I2C lcd(0x27, 16, 2);
MFRC522 mfrc522(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
  while (!Serial);
  SPI.begin();
  mfrc522.PCD_Init();
  delay(4);
  mfrc522.PCD_DumpVersionToSerial();
  lcd.setCursor(2, 0);
  lcd.print("Put your card");
}

void loop() {
  if (!mfrc522.PICC_IsNewCardPresent()) return;
  if (!mfrc522.PICC_ReadCardSerial()) return;

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Scanned UID");
  a = 0;
  Serial.println(F("Scanned PICC's UID:"));
  for (uint8_t i = 0; i < 4; i++) {
    readCard[i] = mfrc522.uid.uidByte[i];
    Serial.print(readCard[i], HEX);
    Serial.print(" ");
    lcd.setCursor(a, 1);
    lcd.print(readCard[i], HEX);
    lcd.print(" ");
    delay(500);
    a += 3;
  }
  Serial.println("");
  mfrc522.PICC_HaltA();
}`,
    tools: ["Arduino Uno", "RFID module", "Jumper wires", "Foam board", "LCD display", "I2C module", "Servo motor", "Door lock", "Iron stick"]
  },
  {
    id: "smart_lamp",
    level: "intermediate",
    title: "Smart Lamp",
    youtube: "https://youtu.be/xdV75VkkZgA?si=JDTt5KR4ran_hNnE",
    desc: "Lampu rumah menyala dengan tepukan menggunakan sensor suara dan relay.",
    code: `const int soundPin = 2;    // OUT sensor suara
const int relayPin = 3;    // IN modul relay

int soundState = 0;
int lastSoundState = 0;

bool lampState = false;

unsigned long lastToggleTime = 0;
const unsigned long debounceDelay = 300;

void setup() {
  pinMode(soundPin, INPUT);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH);
  lampState = false;
  Serial.begin(9600);
}

void loop() {
  soundState = digitalRead(soundPin);
  unsigned long currentTime = millis();

  if (soundState == HIGH && lastSoundState == LOW) {
    if (currentTime - lastToggleTime > debounceDelay) {
      lampState = !lampState;
      lastToggleTime = currentTime;
      if (lampState) {
        digitalWrite(relayPin, LOW);
        Serial.println("Lampu: ON");
      } else {
        digitalWrite(relayPin, HIGH);
        Serial.println("Lampu: OFF");
      }
    }
  }
  lastSoundState = soundState;
}`,
    tools: ["Arduino Nano", "Sensor suara", "Relay module 1CH", "Kabel jumper", "Breadboard", "Lampu", "Kabel steker"]
  },
  {
    id: "smoke_alart",
    level: "intermediate",
    title: "Smoke Alert",
    youtube: "https://youtu.be/hQ61BkvJCuc?si=J16OOTLw0KFlQSHd",
    desc: "Alarm pendeteksi asap menggunakan sensor MQ dan buzzer.",
    code: `int smokeA0 = A0;
int buzzer = 11;
int led = 8;

float sensorValue;

void setup() {
  pinMode(buzzer, OUTPUT);
  pinMode(led, OUTPUT);
  pinMode(smokeA0, INPUT);

  Serial.begin(9600);
  Serial.println("Gas sensor warming up...");
  delay(20000);
  noTone(buzzer);
}

void loop() {
  sensorValue = analogRead(smokeA0);

  Serial.print("Sensor Value: ");
  Serial.print(sensorValue);

  if (sensorValue > 300) {
    Serial.println(" | Smoke detected!");
    tone(buzzer, 1000, 200);
    digitalWrite(led, HIGH);
  } else {
    Serial.println(" | Smoke not detected.");
    noTone(buzzer);
    digitalWrite(led, LOW);
  }
  delay(500);
}`,
    tools: ["Arduino Uno", "Sensor asap MQ-2/MQ-6", "Buzzer", "LED 5mm", "Resistor 220Ω", "Kabel jumper", "Breadboard"]
  },
  {
    id: "smart_irrigation",
    level: "intermediate",
    title: "Smart Irrigation",
    youtube: "https://youtu.be/bJIriNF0zcA?si=EqPxhslx3JzEYws1",
    desc: "Pompa 5V hidup otomatis bila permukaan air turun dengan sensor ultrasonik.",
    code: `const int trigPin = 10;
const int echoPin = 11;
long duration;
int distanceCm, distanceInch;
void setup()
{

Serial.begin(9600); 
pinMode(trigPin, OUTPUT);
pinMode(echoPin, INPUT);
pinMode(7,OUTPUT);
digitalWrite(7,HIGH);
}
void loop() 
{
digitalWrite(trigPin, LOW);
delayMicroseconds(2);
digitalWrite(trigPin, HIGH);
delayMicroseconds(10);
digitalWrite(trigPin, LOW);
duration = pulseIn(echoPin, HIGH);
distanceCm= duration*0.034/2;
distanceInch = duration*0.0133/2;
Serial.println("Distance: ");
Serial.println(distanceCm);
delay(500);

if(distanceCm <20)
{
  digitalWrite(7,LOW);
 
}

if(distanceCm >20)
{
  digitalWrite(7,HIGH);
 
}

}`,
    tools: ["arduino uno","signal channel relay module","5v mini pump","soli monsture sensor","breadboard","jumper wires"]
  },
  {
    id: "automatic_fan",
    level: "intermediate",
    title: "Automatic Fan",
    youtube: "https://youtu.be/1Qndq5OV_XE?si=Xy-fdJbv_-0AM10_",
    desc: "Mengontrol kipas via sensor DHT dan relay dengan tampilan LCD.",
    code: `#include <DHT.h>
#include <DHT_U.h>
#include <LiquidCrystal_I2C.h>

#define DHTPIN 2
#define DHTTYPE DHT11
#define RELAY_PIN 8
#define FAN_ON_TEMP 30

DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, HIGH);
  dht.begin();
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Automatic Fan");
  lcd.setCursor(0, 1);
  lcd.print("Warming sensor");
  delay(2000);
  lcd.clear();
  Serial.begin(9600);
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("DHT Error");
    delay(1000);
    return;
  }
  Serial.print("Temp: ");
  Serial.print(t);
  Serial.print(" *C | Hum: ");
  Serial.println(h);

  lcd.setCursor(0, 0);
  lcd.print("T:");
  lcd.print(t, 1);
  lcd.print((char)223);
  lcd.print("C ");
  lcd.print("H:");
  lcd.print(h, 0);
  lcd.print("% ");

  if (t >= FAN_ON_TEMP) {
    digitalWrite(RELAY_PIN, LOW);
    lcd.setCursor(0, 1);
    lcd.print("Fan: ON         ");
  } else {
    digitalWrite(RELAY_PIN, HIGH);
    lcd.setCursor(0, 1);
    lcd.print("Fan: OFF        ");
  }
  delay(1000);
}`,
    tools: ["Arduino Uno", "Sensor DHT11", "Resistor", "Breadboard", "LCD I2C", "Relay module", "Kabel jumper", "Kipas 12V", "Adaptor daya"]
  },
  {
    id: "automatic_trash",
    level: "intermediate",
    title: "Automatic Trash Can",
    youtube: "https://youtu.be/wZ_QQQrZc3o?si=TuvlVE8VyUpyECGB",
    desc: "Tong sampah otomatis membuka tutup saat tangan mendekat.",
    code: `#include <Servo.h>

Servo servoMotor;
const int trigPin = 9;
const int echoPin = 10;
const int servoPin = 11;

void setup() {
  servoMotor.attach(servoPin);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);
  servoMotor.write(0);
}

void loop() {
  long duration, distance;
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration * 0.034) / 2;
  if (distance < 20) {
    servoMotor.write(90);
    delay(5000);
    servoMotor.write(0);
  }
  delay(200);
}`,
    tools: ["Arduino Uno", "Sensor ultrasonik HC-SR04", "Servo motor", "Breadboard", "Kabel jumper", "Tong sampah demo"]
  },
  {
    id: "digital_clock",
    level: "intermediate",
    title: "Smart Digital Clock",
    youtube: "https://youtu.be/KtRMrXZzGQ8?si=QWZl2EFqdwF-3Bm6",
    desc: "Jam DS3231 dengan LCD I2C yang sekaligus menampilkan suhu RTC.",
    code: `#include <Wire.h>
#include <RTClib.h>
#include <LiquidCrystal_I2C.h>

RTC_DS3231 rtc;
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  Wire.begin();
  if (!rtc.begin()) {
    lcd.print("RTC not found!");
    while (1);
  }
  // rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
  lcd.setCursor(0, 0);
  lcd.print("Digital Clock");
  delay(1500);
  lcd.clear();
}

void loop() {
  DateTime now = rtc.now();
  lcd.setCursor(0, 0);
  if (now.hour() < 10) lcd.print("0");
  lcd.print(now.hour());
  lcd.print(":");
  if (now.minute() < 10) lcd.print("0");
  lcd.print(now.minute());
  lcd.print(":");
  if (now.second() < 10) lcd.print("0");
  lcd.print(now.second());

  float temp = rtc.getTemperature();
  lcd.setCursor(11, 0);
  lcd.print(temp, 0);
  lcd.print((char)223);
  lcd.print("C");

  lcd.setCursor(0, 1);
  if (now.day() < 10) lcd.print("0");
  lcd.print(now.day());
  lcd.print("/");
  if (now.month() < 10) lcd.print("0");
  lcd.print(now.month());
  lcd.print("/");
  lcd.print(now.year());
  delay(500);
}`,
    tools: ["DS3231 RTC", "Arduino Nano", "Breadboard", "Kabel jumper", "LCD I2C"]
  },
  {
    id: "car_parking",
    level: "intermediate",
    title: "Automatic Car Parking",
    youtube: "https://youtu.be/PFF4DTkMsaM?si=nsRWyLkRV3jbT9lm",
    desc: "Palang parkir servo bergerak otomatis berdasarkan jarak kendaraan.",
    code: `#include <Servo.h>
Servo servo;
int trigPin = 11;
int echoPin = 12;

long duration;
int distance;

void setup()
{
  servo.attach(13);
  servo.write(180);
  delay(2000);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() 
{
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = duration*0.034/2;
  Serial.print("Distance: ");
  Serial.println(distance);
  if (distance <= 25) {
    servo.write(180);
    delay(3000);
  } else {
    servo.write(90);
  }
}`,
    tools: ["Arduino Uno", "Sensor ultrasonik", "Kabel jumper", "Servo SG90"]
  },
  {
    id: "motion_detection",
    level: "intermediate",
    title: "Motion Detection",
    youtube: "https://youtu.be/xucNiqxDjdc?si=rxvp-c6kIe2hLvMb",
    desc: "ESP32-CAM memantau gerakan lewat PIR lalu mengirim foto ke Telegram sekaligus menyediakan stream CCTV.",
    code: `#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <UniversalTelegramBot.h>
#include "esp_camera.h"

#define PIR_PIN 13

const char* ssid = "WIFI_SSID";
const char* password = "WIFI_PASSWORD";
String BOTtoken = "BOT_TOKEN";
String chat_id = "CHAT_ID";

WiFiClientSecure client;
UniversalTelegramBot bot(BOTtoken, client);

#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27
#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

void startCameraServer();
unsigned long bot_lasttime = 0;

void setup() {
  Serial.begin(115200);
  pinMode(PIR_PIN, INPUT);
  WiFi.begin(ssid, password);
  client.setInsecure();
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(WiFi.localIP());

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  config.frame_size = FRAMESIZE_VGA;
  config.jpeg_quality = 12;
  config.fb_count = 2;
  esp_camera_init(&config);
  startCameraServer();
}

void sendPhotoTelegram() {
  camera_fb_t * fb = esp_camera_fb_get();
  if (!fb) return;
  bot.sendPhoto(chat_id, fb->buf, fb->len, "Motion Detected!");
  esp_camera_fb_return(fb);
}

void handleNewMessages() {
  int numNewMessages = bot.getUpdates(bot.last_message_received + 1);
  while(numNewMessages) {
    for (int i = 0; i < numNewMessages; i++) {
      String text = bot.messages[i].text;
      String from = bot.messages[i].chat_id;
      if (text == "/start") bot.sendMessage(from, "Menu:\\n/foto\\n/stream\\n/motion");
      if (text == "/foto") { bot.sendMessage(from, "📸"); sendPhotoTelegram(); }
      if (text == "/stream") {
        String url = "http://" + WiFi.localIP().toString() + ":81/stream";
        bot.sendMessage(from, url);
      }
      if (text == "/motion") bot.sendMessage(from, "Mode deteksi gerakan aktif");
    }
    numNewMessages = bot.getUpdates(bot.last_message_received + 1);
  }
}

void loop() {
  if (millis() - bot_lasttime > 1000) {
    handleNewMessages();
    bot_lasttime = millis();
  }
  if (digitalRead(PIR_PIN) == HIGH) {
    sendPhotoTelegram();
    delay(3000);
  }
}`,
    tools: ["ESP32-CAM", "PIR Sensor", "USB to TTL FT232RL", "Kabel jumper", "Breadboard"]
  },
  {
    id: "home_detection",
    level: "Lanjutan",
    title: "Home Assistant",
    youtube: "https://youtu.be/OurlX5w7W8c?si=3zkY1HAOoVoU_-iU",
    desc: "Membuat rumah menjadi otomatis dengan Raspberry",
    code: `# gunakan python
import speech_recognition as sr
from gtts import gTTS
from playsound import playsound
import requests
import os
import time

AI_API_KEY = "API_KEY_KAMU"
AI_URL = "https://api.openai.com/v1/chat/completions"

def ask_ai(prompt):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {AI_API_KEY}"
    }
    data = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": prompt}]
    }
    res = requests.post(AI_URL, headers=headers, json=data)
    return res.json()["choices"][0]["message"]["content"]

def speak(text):
    print("Asisten:", text)
    tts = gTTS(text=text, lang="id")
    filename = "voice.mp3"
    tts.save(filename)
    playsound(filename)
    os.remove(filename)

def listen():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Mendengarkan...")
        r.pause_threshold = 1
        audio = r.listen(source)
    try:
        query = r.recognize_google(audio, language="id-ID")
        print("Kamu:", query)
        return query
    except:
        return ""

def main():
    speak("Asisten Raspberry siap membantu")
    while True:
        text = listen().lower()
        if "hey asisten" in text or "hai asisten" in text:
            speak("Ya, ada apa?")
            command = listen().lower()
            if command:
                response = ask_ai(command)
                speak(response)
            else:
                speak("Maaf aku tidak mendengar")
        time.sleep(1)

if __name__ == "__main__":
    main()`,
    tools: ["Raspberry Pi", "Mic + speaker", "Koneksi internet"]
  },
  {
    id: "smart_camera",
    level: "Lanjutan",
    title: "Smart Camera",
    youtube: "https://youtu.be/aoYfHlbNxGQ",
    desc: "Raspberry Pi kamera dengan YOLO Tiny dan server Flask untuk streaming serta snap foto.",
    code: `from picamera2 import Picamera2
import cv2
import time
from flask import Flask, Response

labelsPath = "models/coco.names"
LABELS = open(labelsPath).read().strip().split("\\n")
weightsPath = "models/yolov3-tiny.weights"
configPath = "models/yolov3-tiny.cfg"

net = cv2.dnn.readNetFromDarknet(configPath, weightsPath)
net.setPreferableBackend(cv2.dnn.DNN_BACKEND_OPENCV)

picam2 = Picamera2()
config = picam2.create_video_configuration(main={"size": (640, 480)})
picam2.configure(config)
picam2.start()

app = Flask(__name__)

def gen_frames():
    while True:
        frame = picam2.capture_array()
        img = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)
        (H, W) = img.shape[:2]
        blob = cv2.dnn.blobFromImage(img, 1/255.0, (416, 416), swapRB=True, crop=False)
        net.setInput(blob)
        outputs = net.forward(net.getUnconnectedOutLayersNames())
        boxes, confidences, classIDs = [], [], []
        for output in outputs:
            for detection in output:
                scores = detection[5:]
                classID = int(scores.argmax())
                confidence = scores[classID]
                if confidence > 0.4:
                    box = detection[0:4] * [W, H, W, H]
                    (centerX, centerY, width, height) = box.astype("int")
                    x = int(centerX - width/2)
                    y = int(centerY - height/2)
                    boxes.append([x, y, int(width), int(height)])
                    confidences.append(float(confidence))
                    classIDs.append(classID)
        idxs = cv2.dnn.NMSBoxes(boxes, confidences, 0.4, 0.3)
        if len(idxs) > 0:
            for i in idxs.flatten():
                (x, y, w, h) = boxes[i]
                text = f"{LABELS[classIDs[i]]}: {confidences[i]:.2f}"
                cv2.rectangle(img, (x, y), (x+w, y+h), (0,255,0), 2)
                cv2.putText(img, text, (x, y-5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,255,0), 2)
        _, img_encoded = cv2.imencode('.jpg', img)
        frame_bytes = img_encoded.tobytes()
        yield (b'--frame\\r\\n'
               b'Content-Type: image/jpeg\\r\\n\\r\\n' + frame_bytes + b'\\r\\n')

@app.route('/video')
def video():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/photo')
def photo():
    frame = picam2.capture_array()
    filename = f"photo_{int(time.time())}.jpg"
    cv2.imwrite(filename, cv2.cvtColor(frame, cv2.COLOR_RGB2BGR))
    return f"Foto disimpan: {filename}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)`,
    tools: ["Raspberry Pi", "Pi AI Camera", "microSD", "Internet"]
  },
  {
    id: "smart_bin",
    level: "Lanjutan",
    title: "Smart Waste Segregation Bin",
    youtube: "https://youtu.be/4XedfXtPxLQ?si=hTKbHZvOwrgIJ-JB",
    desc: "Tong sampah otomatis memisahkan kering/basah/metal memakai sensor IR, soil, servo, dan stepper.",
    code: `#include <CheapStepper.h>
#include <Servo.h>
Servo servo1;
#define ir 5
#define proxi 6
#define buzzer 12
int potPin = A0;
int soil=0;
int fsoil;

CheapStepper stepper (8,9,10,11);

void setup()
{
  Serial.begin(9600);
  pinMode(proxi, INPUT_PULLUP);
  pinMode(ir, INPUT);
  pinMode(buzzer, OUTPUT);
  servo1.attach(7);
  stepper.setRpm(17); 
  servo1.write(180);
  delay(1000);
  servo1.write(70);
  delay(1000);
}

void loop() 
{
  fsoil=0;
  int L =digitalRead(proxi);
  Serial.print(L);
  if(L==0)
  {
    tone(buzzer, 1000, 1000);
    stepper.moveDegreesCW (240);
    delay(1000); 
    servo1.write(180);
    delay(1000);
    servo1.write(70);
    delay(1000);
    stepper.moveDegreesCCW (240);
    delay(1000); 
  } 

  if(digitalRead(ir)==0)
  {
    tone(buzzer, 1000, 500);
    delay(1000);
    for(int i=0;i<3;i++)
    {
      soil = analogRead(potPin);
      soil = constrain(soil, 485, 1023);
      fsoil = (map(soil, 485, 1023, 100, 0))+fsoil;
      delay(75);
    }
    fsoil=fsoil/3;
    Serial.print(fsoil);
    Serial.println("%");

    if(fsoil>20)
    {
      stepper.moveDegreesCW (120);
      delay(1000); 
      servo1.write(180);
      delay(1000);
      servo1.write(70);
      delay(1000);
      stepper.moveDegreesCCW (120);
      delay(1000); 
    } 
    else {
      tone(buzzer, 1000, 500);
      delay(1000);
      servo1.write(180);
      delay(1000);
      servo1.write(70);
      delay(1000);
    }
  }
}`,
    tools: ["Arduino Uno", "Stepper driver", "IR sensor", "Stepper motor", "Proximity switch", "Servo SG90", "Rain sensor", "18650 Li-ion", "Buzzer", "Shaft adaptor", "Jumper cables", "3x20mm bolt"]
  },
  {
    id: "ai_control",
    level: "Lanjutan",
    title: "AI Voice Assistant with IoT Control",
    youtube: "https://youtu.be/iagQxcXv-So?si=k0if7FoRNY2Ygi9c",
    desc: "Asisten suara berbasis Gemini API yang merespon perintah via Raspberry Pi.",
    code: `import speech_recognition as sr
from gtts import gTTS
from playsound import playsound
import google.generativeai as genai
import time
import os

GEN_API_KEY = "ISI_API_KEY_KAMU"
genai.configure(api_key=GEN_API_KEY)
model = genai.GenerativeModel("gemini-pro")

def speak(text):
    print("Asisten:", text)
    tts = gTTS(text=text, lang="id")
    filename = "assistant.mp3"
    tts.save(filename)
    playsound(filename)
    os.remove(filename)

def listen():
    recog = sr.Recognizer()
    with sr.Microphone() as source:
        print("Mendengarkan...")
        recog.pause_threshold = 1
        audio = recog.listen(source)
    try:
        text = recog.recognize_google(audio, language="id-ID")
        print("Kamu:", text)
        return text.lower()
    except:
        return ""

def ask_gemini(prompt):
    response = model.generate_content(prompt)
    return response.text

def main():
    speak("Asisten Gemini siap membantu.")
    while True:
        query = listen()
        if "hey gemini" in query or "hi gemini" in query:
            speak("Ya, ada yang bisa saya bantu?")
            command = listen()
            if command:
                try:
                    answer = ask_gemini(command)
                    speak(answer)
                except Exception as e:
                    speak("Maaf, terjadi kesalahan.")
                    print(e)
            else:
                speak("Aku tidak mendengar apapun.")
        time.sleep(0.5)

if __name__ == "__main__":
    main()`,
    tools: ["Raspberry Pi", "Gemini API key", "Mikrofon + speaker"]
  },
  {
    id: "gps",
    level: "Lanjutan",
    title: "GPS Tracking With Google Maps",
    youtube: "https://youtu.be/XNE0Qm0NdLg?si=VmpSJ-mrPFZR4WZi",
    desc: "Tracker LoRa mengirim koordinat GPS (NEO6M) ke receiver lalu tampil di serial.",
    code: `#include <SoftwareSerial.h>
#include <AltSoftSerial.h>
#include <TinyGPSPlus.h>

#define L_RX 3
#define L_TX 2
SoftwareSerial LoRaSerial(L_RX, L_TX);

#define G_RX 4
#define G_TX 5
AltSoftSerial gpsSerial(G_RX, G_TX);

TinyGPSPlus gps;
#define BAUDRATE 115200

void setup() {
  Serial.begin(BAUDRATE);
  LoRaSerial.begin(BAUDRATE);
  gpsSerial.begin(9600);
}

void loop() {
  while (gpsSerial.available() > 0) {
    if (gps.encode(gpsSerial.read())) {
      displayInfo();
    }
  }
  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println(F("No GPS detected: check wiring."));
    while(true);
  }
}

void displayInfo()
{
  if (gps.location.isValid())
  {
    String data;
    data += String(gps.location.lat(), 6);
    data += ",";
    data += String(gps.location.lng(), 6);
    data += "|";
    sendLoraData(data, 2);
    Serial.println(data);
    Serial.flush();
    delay(3000);
  }
}

void sendLoraData(String data, int address) {
  String myString = "AT+SEND=" + String(address) + "," + String(data.length()) + "," + data + "\\r\\n";
  char* buf = (char*) malloc(sizeof(char) * myString.length() + 1);
  myString.toCharArray(buf, myString.length() + 1);
  LoRaSerial.write(buf);
  free(buf);
}

#include <SoftwareSerial.h>
#define RX 5
#define TX 4
SoftwareSerial LoRaSerial(RX, TX);

void setupReceiver() {
  Serial.begin(115200);
  LoRaSerial.begin(115200);
}

void loopReceiver() {
  while (LoRaSerial.available()) {
    String data = LoRaSerial.readString();
    Serial.println(data);
  }
}`,
    tools: ["RYLR406 LoRa module", "NEO6M GPS", "Arduino/NodeMCU", "Resistor", "Kabel jumper"]
  },
  {
    id: "object_detection",
    level: "Lanjutan",
    title: "Object Detection",
    youtube: "https://youtu.be/bZIKVaD3dRk?si=VguMdgvdq09UtEwk",
    desc: "ESP32-CAM mendeteksi warna merah (tomat) dan menampilkan status pada OLED 0.96\".",
    code: `#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "esp_camera.h"

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);
#define OLED_SDA 14
#define OLED_SCL 15

#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27
#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

void setup() {
  Serial.begin(115200);
  Wire.begin(OLED_SDA, OLED_SCL);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0,0);
  display.println("Object Detection");
  display.display();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_RGB565;
  config.frame_size = FRAMESIZE_QQVGA;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  if (esp_camera_init(&config) != ESP_OK) {
    Serial.println("Camera init failed!");
    return;
  }
}

bool detectTomato(uint16_t pixel) {
  uint8_t r = (pixel & 0xF800) >> 11;
  uint8_t g = (pixel & 0x07E0) >> 5;
  uint8_t b = (pixel & 0x001F);
  return (r > 20 && g < 10 && b < 10);
}

void loop() {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) return;
  int redCount = 0;
  int totalSample = 0;
  for (int i = 0; i < fb->len; i += 10) {
    uint16_t pixel = ((uint16_t)fb->buf[i] << 8) | fb->buf[i + 1];
    if (detectTomato(pixel)) redCount++;
    totalSample++;
  }
  esp_camera_fb_return(fb);
  bool isTomato = (redCount > totalSample * 0.15);
  display.clearDisplay();
  display.setCursor(0, 0);
  if (isTomato) {
    display.setTextSize(2);
    display.println("TOMAT");
    display.setTextSize(1);
    display.println("Objek Merah Terdeteksi");
  } else {
    display.setTextSize(2);
    display.println("Tidak");
    display.setTextSize(1);
    display.println("Objek bukan tomat");
  }
  display.display();
  delay(300);
}`,
    tools: ["ESP32-CAM", "OLED Display", "USB to TTL FT232RL", "Breadboard", "Kabel jumper"]
  },
  {
    id: "dron_arduino",
    level: "Lanjutan",
    title: "Dron Arduino",
    youtube: "https://youtu.be/Sa6EslOHsI0?si=6CDm9BQHGGjqSE_m",
    desc: "Flight controller Arduino Pro Mini dengan MPU6050 dan NRF24L01 plus remote control DIY.",
    code: `// flight_controller
#include <Wire.h>
#include <MPU6050.h>
#include <RF24.h>

RF24 radio(9, 10);
const byte address[6] = "DRONE";

struct Data { int throttle; int pitch; int roll; int yaw; } rx;

int M1 = 3, M2 = 5, M3 = 6, M4 = 9;
int buzzer = 8;
MPU6050 mpu;
float pitch = 0, roll = 0;
float gyroGain = 0.00007;
float Kp = 1.8, Ki = 0.001, Kd = 1.2;
float errorPitch, errorRoll, lastErrorPitch, lastErrorRoll, iPitch, iRoll;
unsigned long lastTime;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  mpu.initialize();
  pinMode(M1, OUTPUT); pinMode(M2, OUTPUT);
  pinMode(M3, OUTPUT); pinMode(M4, OUTPUT);
  pinMode(buzzer, OUTPUT);
  radio.begin(); radio.openReadingPipe(0, address); radio.startListening();
  analogWrite(M1,0); analogWrite(M2,0); analogWrite(M3,0); analogWrite(M4,0);
}

void loop() {
  if (radio.available()) radio.read(&rx, sizeof(rx));
  float accX, accY, accZ, gyroX, gyroY, gyroZ;
  mpu.getMotion6(&accX,&accY,&accZ,&gyroX,&gyroY,&gyroZ);
  unsigned long now = micros();
  float dt = (now - lastTime) / 1000000.0;
  lastTime = now;
  float accPitch = atan2(accY, accZ) * 57.3;
  float accRoll  = atan2(accX, accZ) * 57.3;
  pitch = 0.98 * (pitch + gyroX * gyroGain) + 0.02 * accPitch;
  roll  = 0.98 * (roll  - gyroY * gyroGain) + 0.02 * accRoll;
  errorPitch = rx.pitch - pitch;
  errorRoll  = rx.roll - roll;
  float pTermPitch = Kp * errorPitch;
  iPitch += Ki * errorPitch;
  float dTermPitch = Kd * (errorPitch - lastErrorPitch);
  float pTermRoll = Kp * errorRoll;
  iRoll += Ki * errorRoll;
  float dTermRoll = Kd * (errorRoll - lastErrorRoll);
  lastErrorPitch = errorPitch;
  lastErrorRoll  = errorRoll;
  float correctionPitch = pTermPitch + iPitch + dTermPitch;
  float correctionRoll  = pTermRoll + iRoll + dTermRoll;
  int m1 = rx.throttle + correctionPitch + correctionRoll; 
  int m2 = rx.throttle + correctionPitch - correctionRoll;
  int m3 = rx.throttle - correctionPitch + correctionRoll;
  int m4 = rx.throttle - correctionPitch - correctionRoll;
  m1 = constrain(m1, 0, 255);
  m2 = constrain(m2, 0, 255);
  m3 = constrain(m3, 0, 255);
  m4 = constrain(m4, 0, 255);
  analogWrite(M1, m1); analogWrite(M2, m2);
  analogWrite(M3, m3); analogWrite(M4, m4);
}

// remote controller
#include <RF24.h>
RF24 radioTX(9, 10);
const byte addressTX[6] = "DRONE";
struct DataTx { int throttle; int pitch; int roll; int yaw; } tx;

void setupTX() {
  Serial.begin(9600);
  radioTX.begin();
  radioTX.openWritingPipe(addressTX);
  radioTX.stopListening();
}

void loopTX() {
  tx.throttle = map(analogRead(A0), 0, 1023, 0, 255);
  tx.pitch    = map(analogRead(A1), 0, 1023, -30, 30);
  tx.roll     = map(analogRead(A2), 0, 1023, -30, 30);
  tx.yaw      = map(analogRead(A3), 0, 1023, -30, 30);
  radioTX.write(&tx, sizeof(tx));
  delay(10);
}`,
    tools: ["Arduino Pro Mini 3.3V", "MPU6050", "NRF24L01 (Tx/Rx)", "Motor brushed 6mm x4", "Propeller set", "SI2300 MOSFET x4", "Resistor 10K x4", "Diode SS14 x4", "LiPo 3.7V", "Buzzer LilyPad", "PCB prototipe + rangka sederhana"]
  },
  {
    id: "smart_car",
    level: "Lanjutan",
    title: "Smart Car",
    youtube: "https://youtu.be/6NOtZc3ukr8?si=VwaS_p9q2TLc2Dx4",
    desc: "Mobil otomatis menghindar rintangan memakai sensor ultrasonik di servo dan driver L293D.",
    code: `#include <AFMotor.h>
#include <NewPing.h>
#include <Servo.h>

#define TRIG_PIN A0
#define ECHO_PIN A1
#define MAX_DISTANCE 200
#define MAX_SPEED 190

NewPing sonar(TRIG_PIN, ECHO_PIN, MAX_DISTANCE);
AF_DCMotor motor1(1, MOTOR12_1KHZ);
AF_DCMotor motor2(2, MOTOR12_1KHZ);
AF_DCMotor motor3(3, MOTOR34_1KHZ);
AF_DCMotor motor4(4, MOTOR34_1KHZ);
Servo myservo;
boolean goesForward=false;
int distance = 100;
int speedSet = 0;

void setup() {
  myservo.attach(10);
  myservo.write(115);
  delay(2000);
  distance = readPing();
}

void loop() {
  int distanceR = 0;
  int distanceL = 0;
  delay(40);
  if(distance<=15) {
    moveStop(); delay(100);
    moveBackward(); delay(300);
    moveStop(); delay(200);
    distanceR = lookRight(); delay(200);
    distanceL = lookLeft(); delay(200);
    if(distanceR>=distanceL) turnRight();
    else turnLeft();
  } else {
    moveForward();
  }
  distance = readPing();
}

int lookRight(){
  myservo.write(50);
  delay(500);
  int distance = readPing();
  delay(100);
  myservo.write(115);
  return distance;
}

int lookLeft(){
  myservo.write(170);
  delay(500);
  int distance = readPing();
  delay(100);
  myservo.write(115);
  return distance;
}

int readPing() {
  delay(70);
  int cm = sonar.ping_cm();
  if(cm==0) cm = 250;
  return cm;
}

void moveStop() {
  motor1.run(RELEASE); motor2.run(RELEASE);
  motor3.run(RELEASE); motor4.run(RELEASE);
}

void moveForward() {
  if(!goesForward) {
    goesForward=true;
    motor1.run(FORWARD); motor2.run(FORWARD);
    motor3.run(FORWARD); motor4.run(FORWARD);
    for (speedSet = 0; speedSet < MAX_SPEED; speedSet +=2){
      motor1.setSpeed(speedSet); motor2.setSpeed(speedSet);
      motor3.setSpeed(speedSet); motor4.setSpeed(speedSet);
      delay(5);
    }
  }
}

void moveBackward() {
  goesForward=false;
  motor1.run(BACKWARD); motor2.run(BACKWARD);
  motor3.run(BACKWARD); motor4.run(BACKWARD);
  for (speedSet = 0; speedSet < MAX_SPEED; speedSet +=2){
    motor1.setSpeed(speedSet); motor2.setSpeed(speedSet);
    motor3.setSpeed(speedSet); motor4.setSpeed(speedSet);
    delay(5);
  }
}

void turnRight() {
  motor1.run(FORWARD); motor2.run(FORWARD);
  motor3.run(BACKWARD); motor4.run(BACKWARD);
  delay(500);
}
 
void turnLeft() {
  motor1.run(BACKWARD); motor2.run(BACKWARD);
  motor3.run(FORWARD); motor4.run(FORWARD);
  delay(500);
}`,
    tools: ["Arduino Uno", "Servo SG90", "Sensor ultrasonik HC-SR04", "Motor DC gearbox 1:48 x2", "Driver L293D", "Baterai 18650 + holder", "Jumper panjang", "Papan akrilik", "Saklar on/off"]
  },
  {
    id: "mochi_robot",
    level: "Lanjutan",
    title: "Mochi Robot",
    youtube: "https://youtu.be/TUQLnkUV5ro?si=Dq5SJeuPyIzh2QXy",
    desc: "Robot lucu ESP32-C3 dengan ekspresi OLED, speaker MAX98357, dan kontrol sentuh.",
    code: `#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <SD.h>
#include <SPI.h>
#include "Audio.h"

#define TOUCH_PIN 1
#define OLED_SDA 4
#define OLED_SCL 5
#define SD_CS    9
#define I2S_DIN 7
#define I2S_BCLK 3
#define I2S_LRC 2

Adafruit_SSD1306 display(128, 64, &Wire, -1);
Audio audio;

const char* faces[] = {"UwU", ">w<", "O_O", "^_^", "(o_o)"};
int faceIndex = 0;

void drawFace(const char* f) {
  display.clearDisplay();
  display.setTextSize(3);
  display.setTextColor(WHITE);
  display.setCursor(30, 20);
  display.println(f);
  display.display();
}

void playSound(const char* filename) {
  audio.connecttoFS(SD, filename);
}

void setup() {
  pinMode(TOUCH_PIN, INPUT);
  Serial.begin(115200);
  Wire.begin(OLED_SDA, OLED_SCL);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  drawFace("UwU");
  SD.begin(SD_CS);
  audio.setPinout(I2S_BCLK, I2S_LRC, I2S_DIN);
  Serial.println("Mochi Bot Ready!");
}

void loop() {
  if (digitalRead(TOUCH_PIN) == HIGH) {
    faceIndex++; if (faceIndex >= 5) faceIndex = 0;
    drawFace(faces[faceIndex]);
    switch (faceIndex) {
      case 0: playSound("/cute1.wav"); break;
      case 1: playSound("/cute2.wav"); break;
      case 2: playSound("/alert.wav"); break;
      case 3: playSound("/happy.wav"); break;
      case 4: playSound("/wow.wav"); break;
    }
    delay(500);
  }
  audio.loop();
}`,
    tools: ["ESP32-C3 Mini", "OLED SSD1306", "MAX98357", "Speaker mini", "LiPo 3.7V", "TP4056 charger", "TTP233 touch sensor", "MicroSD module", "Power switch", "Kabel jumper"]
  },
];

// Learn playlists (ganti di sini judul + link playlist YouTube)
// Anda bisa isi "playlist" dengan URL penuh YouTube/playlist atau langsung ID playlist (contoh: PLxxxx).
const LEARN = [
  { title: "IoT For Beginners (Playlist)", playlist: "PL9ooVrP1hQOGccfBbP5tJWZ1hv5sIUWJl" },
  { title: "IoT Introduction (Playlist)", playlist: "PLgwJf8NK-2e4_VQdy5Yd-tSHF2U8zu9pN" },
  { title: "Arduino Beginners (Playlist)", playlist: "PLdOKpSbw-1hXjnKQT35QTqMRGyHVpUySc" },
  { title: "ESP32 Introduction (Playlist)", playlist: "PLdOKpSbw-1hWUhhCPWJx9VXFDdtQcclp1" },
  { title: "ESP32 dan Bluetooth (Playlist)", playlist: "PLcnUJS1_zVWBArxDsgx_JmIowoiIl3sPH" },
  { title: "Raspberry Pi (Playlist)", playlist: "PLLSegLrePWgLzBgQqDJvgZ4ewbpCnuare" },
  { title: "Sensor (Playlist)", playlist: "PLiqO9B2zTejjTXqZU1dwzxgYBEa59R_37" },
  { title: "Solder & Breadbrond (Playlist)", playlist: "PLiqO9B2zTejglrUdZk6mKQErcFKPP6IM8" },
  { title: "Learning With Tinkercad (Playlist)", playlist: "PLflki7h9DLccLcHdKodjsuGSR7echzh-E" },
];


// Expose as globals for classic scripts usage
window.COMPONENTS = COMPONENTS;
window.PROJECTS = PROJECTS;
window.LEARN = LEARN;
window.TROUBLESHOOT = TROUBLESHOOT;
window.ROADMAPS = ROADMAPS;

// Simplify PROJECTS consumed by UI: only keep id, level, title, youtube
// To show a specific YouTube video on each project card, add `youtube`
// to each item in PROJECTS above (full URL or 11-char video ID).
// Example: youtube: "https://youtu.be/dQw4w9WgXcQ"
window.PROJECTS = (window.PROJECTS || []).map(p => ({
  id: p.id,
  level: p.level,
  title: p.title,
  youtube: p.youtube || '',
  desc: p.desc || '',
  code: p.code || '',
  tools: Array.isArray(p.tools) ? p.tools : []
}));
