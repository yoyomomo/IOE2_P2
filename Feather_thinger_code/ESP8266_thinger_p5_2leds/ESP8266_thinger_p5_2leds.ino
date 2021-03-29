////Code developed by Steve Hudak to be used//////
////with Sheridan IxD Thinger guide 2////////

#include <ThingerESP8266.h>
#include <ESP8266WiFi.h>

#define USERNAME "moooo"
#define DEVICE_ID "esp8266"
#define DEVICE_CREDENTIAL "JAD70nB#dQJW?kcD"

#define SSID "Home Wifi"
#define SSID_PASSWORD "OctopuS07"

ThingerESP8266 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

// digital pin, pin that goes to your LED
#define LED1 13
#define LED2 12

void setup() {
  Serial.begin(115200);
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);

  thing.add_wifi(SSID, SSID_PASSWORD);

  // pin control example (i.e. turning on/off a light, a relay, etc)
  thing["led1"]<< digitalPin(LED1);
  thing["led2"]<< digitalPin(LED2);
  
}

void loop() {
  thing.handle();

}
