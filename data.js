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
  { id: "thermo_oled",      level: "beginner",     title: "Thermo Watch", youtube: "https://youtu.be/Sbm9G37_VyQ?si=g9M8L1FHQGc5liwG" },
  { id: "distance_beeper",  level: "beginner",     title: "Distance Beeper", youtube: "https://youtu.be/n-gJ00GTsNg?si=BNmW4W4zFwezDsQg" },
  { id: "light_control",  level: "beginner",     title: "Automatic Light Control", youtube: "https://youtu.be/9YkpectmSr4?si=TbVVvUxf3rhQfEeH" },
  { id: "rain_alert",  level: "beginner",     title: "Rain Alert", youtube: "https://youtu.be/ZBIK0Sj8uZo?si=X7aN1dbhBJKQwBZ-" },
  { id: "clock_digital",  level: "beginner",     title: "Digital Clock", youtube: "https://youtu.be/hjy8b01CXcY?si=A_Cm84fJUtszBQ-2" },
  { id: "traffic_lights",  level: "beginner",     title: "Traffic Lights", youtube: "https://youtu.be/PcAO6EhXoXQ?si=tYB4gBG5qFJF4BhQ" },
  { id: "door_lock",  level: "intermediate",     title: "Servo Door Lock", youtube: "https://youtu.be/GOO84CGBPz8?si=HOr3lIJdII6WDJlv" },
  { id: "smart_lamp",  level: "intermediate",     title: "Smart Lamp", youtube: "https://youtu.be/xdV75VkkZgA?si=JDTt5KR4ran_hNnE" },
  { id: "smoke_alart",  level: "intermediate",     title: "Smoke Alart", youtube: "https://youtu.be/hQ61BkvJCuc?si=J16OOTLw0KFlQSHd" },
  { id: "smart_irrigation",    level: "intermediate", title: "Smart Irrigation", youtube: "https://youtu.be/bJIriNF0zcA?si=EqPxhslx3JzEYws1" },
  { id: "automatic_fan",       level: "intermediate", title: "Automatic Fan", youtube: "https://youtu.be/1Qndq5OV_XE?si=Xy-fdJbv_-0AM10_" },
  { id: "automatic_trash",       level: "intermediate", title: "Automatic Trash Can", youtube: "https://youtu.be/wZ_QQQrZc3o?si=TuvlVE8VyUpyECGB" },
  { id: "digital_clock",       level: "intermediate", title: "Smart Digital Clock", youtube: "https://youtu.be/KtRMrXZzGQ8?si=QWZl2EFqdwF-3Bm6" },
  { id: "car_parking",       level: "intermediate", title: "Automatic Car Parking", youtube: "https://youtu.be/PFF4DTkMsaM?si=nsRWyLkRV3jbT9lm" },
  { id: "motion_detection",       level: "intermediate", title: "Motion Detection", youtube: "https://youtu.be/xucNiqxDjdc?si=rxvp-c6kIe2hLvMb" },
  { id: "home_detection",       level: "Lanjutan", title: "Home Assistant", youtube: "https://youtu.be/OurlX5w7W8c?si=3zkY1HAOoVoU_-iU" },
  { id: "smart_camera",       level: "Lanjutan", title: "Smart Camera", youtube: "https://youtu.be/aoYfHlbNxGQ" },
  { id: "smart_bin",       level: "Lanjutan", title: "Smart Waste Segregation Bin", youtube: "https://youtu.be/4XedfXtPxLQ?si=hTKbHZvOwrgIJ-JB" },
  { id: "ai_control",       level: "Lanjutan", title: "AI Voice Assistant with IoT Control", youtube: "https://youtu.be/iagQxcXv-So?si=k0if7FoRNY2Ygi9c" },
  { id: "gps",       level: "Lanjutan", title: "GPS Tranking With Google Maps", youtube: "https://youtu.be/XNE0Qm0NdLg?si=VmpSJ-mrPFZR4WZi" },
  { id: "object_detection",       level: "Lanjutan", title: "Object Detection", youtube: "https://youtu.be/bZIKVaD3dRk?si=VguMdgvdq09UtEwk" },
  { id: "dron_arduino",       level: "Lanjutan", title: "Dron Arduino", youtube: "https://youtu.be/Sa6EslOHsI0?si=6CDm9BQHGGjqSE_m" },
  { id: "smart_car",       level: "Lanjutan", title: "Smart Car", youtube: "https://youtu.be/6NOtZc3ukr8?si=VwaS_p9q2TLc2Dx4" },
  { id: "mochi_robot",       level: "Lanjutan", title: "Mochi Robot", youtube: "https://youtu.be/TUQLnkUV5ro?si=Dq5SJeuPyIzh2QXy" },
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
  youtube: p.youtube || ''
}));
